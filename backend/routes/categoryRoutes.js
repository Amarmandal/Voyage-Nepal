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
   getUserById
 } = require("../controllers/userController");
 const {
    isSignedIn,
    isAuthorized,
    isAdmin
 } = require('../middleware/authMiddleware');

router.param('categoryId', getCategoryById);
router.param('userId', getUserById);

//Read Category by Id
router.get('/category/:categoryId/:userId', isSignedIn, isAuthorized, getCategory);
//get all categories
router.get('/categories/:userId', isSignedIn, isAuthorized, getAllCategories);
//delete category
router.delete('/category/:categoryId/:userId', isSignedIn, isAuthorized, isAdmin, deleteCategory);

//update category
router.put('/category/update/:categoryId/:userId', isSignedIn, isAuthorized, isAdmin, updateCategory);

//create Category
router.post('/category/create/:userId', isSignedIn, isAuthorized, isAdmin, createCategory);

module.exports = router;