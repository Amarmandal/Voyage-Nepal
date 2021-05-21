const express = require('express');
const router = express.Router();

//controllers
const { 
    createCategory,
    updateCategory,
    getAllCategories,
    getCategoryById,
    deleteCategory,
    getCategory
 } = require('../controllers/categoryController');

 const {
    isSignedIn,
    isAuthenticated,
    isAdmin
 } = require('../middleware/authMiddleware');

router.param('categoryId', getCategoryById);

//Read Category by Id
router.get('/category/:categoryId', getCategory);
router.get('/categories', getAllCategories);
//delete category
router.delete('/category/:categoryId', isSignedIn, isAuthenticated, isAdmin, deleteCategory);

//update category
router.put('/category/:categoryId', isSignedIn, isAuthenticated, isAdmin, updateCategory);

//create Category
router.post('/category/create', isSignedIn, isAuthenticated, isAdmin, createCategory);

module.exports = router;