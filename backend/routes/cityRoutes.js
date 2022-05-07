const express = require('express')
const router = express.Router()

//controllers
const { createNewCity, getAllCities, getPlaceByCity } = require('../controllers/cityController')
const { isSignedIn, getUserProfile, isAdmin } = require('../middleware/authMiddleware')

// router.param('categoryId', getCategoryById)
// router.param('userId', getUserById)

//Read Category by Id
// router.get('/category/:categoryId/:userId', isSignedIn, getUserProfile, getCategory)
// //get all categories
// router.get('/categories/', isSignedIn, getUserProfile, getAllCategories)

// router.get(
// 	'/categories/next-page/:userId/:lastObjectId?',
// 	isSignedIn,
// 	getUserProfile,
// 	isAdmin,
// 	getNextCategoryPage
// )

// router.get(
// 	'/categories/previous-page/:userId/:firstObjectId',
// 	isSignedIn,
// 	getUserProfile,
// 	isAdmin,
// 	getPreviousCategoryPage
// )

// //delete category
// router.delete('/category/:categoryId/:userId', isSignedIn, getUserProfile, isAdmin, deleteCategory)

// //update category
// router.put(
// 	'/category/update/:categoryId/:userId',
// 	isSignedIn,
// 	getUserProfile,
// 	isAdmin,
// 	updateCategory
// )

//create a New City
router.post('/city/create', isSignedIn, getUserProfile, isAdmin, createNewCity)

//Get all cities
router.get('/city', isSignedIn, getAllCities)

//Get places by city
router.get('/city/:cityId', isSignedIn, getPlaceByCity)

module.exports = router
