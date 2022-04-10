const express = require('express')
const router = express.Router()

const {
	getPlaceById,
	getAllPlace,
	deletePlace,
	createPlace,
	updatePlace,
	recommendsPlace,
	getNextPlacePage,
	getPreviousPlacePage,
} = require('../controllers/placeController')
const { isSignedIn, getUserProfile, isAdmin } = require('../middleware/authMiddleware')
const { getUserById } = require('../controllers/userController')
const { uploadPlacePhoto } = require('../middleware/placeMiddleware')
const { upload } = require('../utils/uploadHelper')

router.param('placeId', getPlaceById)
router.param('userId', getUserById)

//get place by Id
router.get('/place/:placeId/:userId', isSignedIn, getUserProfile, (req, res) => {
	return res.status(200).json({ data: req.place })
})

//get All the places
router.get('/places/:userId', isSignedIn, getUserProfile, getAllPlace)

router.get(
	'/places/next-page/:userId/:lastObjectId?',
	isSignedIn,
	getUserProfile,
	isAdmin,
	getNextPlacePage
)

router.get(
	'/places/previous-page/:userId/:firstObjectId',
	isSignedIn,
	getUserProfile,
	isAdmin,
	getPreviousPlacePage
)

// router.get('/places/:userId/:categoryId', isSignedIn, getUserProfile, getPlaceByCategory)

//create place only by admin
router.post(
	'/place/create/:userId',
	isSignedIn,
	getUserProfile,
	isAdmin,
	upload.single('photo'),
	uploadPlacePhoto,
	createPlace
)

//recommendation routes
router.post('/place/recommends/:userId', isSignedIn, getUserProfile, recommendsPlace)

//update place
router.put('/place/update/:placeId/:userId', isSignedIn, getUserProfile, isAdmin, updatePlace)
//deleteplace
router.delete('/place/delete/:placeId/:userId/', isSignedIn, getUserProfile, isAdmin, deletePlace)

module.exports = router
