const express = require('express');
const router = express.Router();

//controllers
const { createCategory } = require('../controllers/categoryController');


//Read Category by Id
router.get('/category/:categoryId', (req, res) => {
    console.log('Reading category');
})

//create Category
router.post('/category/create/:userId', createCategory);

module.exports = router;