const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll({
      include:[
        {
          model: Product,
        }
      ]
    });
    res.status(200).json(categoryData);
   }catch{
     res.status(500).json(err);
   }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if(!categoryData){
      res.status(404).json({message: 'No category found with this id!'});
    }
  } catch (error) {
    res.status(500).json(error)
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData)
  } catch (error) {
    res.status(500).json(error)
  }

});

router.put('/:id',  (req, res) => {
  // update a category by its `id` value
  
});

router.delete('/:id',  (req, res) => {
  // delete a category by its `id` value
  
});

module.exports = router;
