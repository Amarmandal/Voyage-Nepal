const express = require('express')
const router = express.Router()

const {
	uploadPhoto,
	updatePhoto,
	getUserById,
	removeUserById,
	updateUserRole,
	getUserDetails,
	getNextUserPage,
	getPreviousUserPage,
} = require('../controllers/userController')
const { isSignedIn, getUserProfile, isAdmin } = require('../middleware/authMiddleware')
const { upload } = require('../utils/uploadHelper')

router.param('userId', getUserById)

router.post(
	'/upload/photo/:userId',
	isSignedIn,
	getUserProfile,
	upload.single('photo'),
	uploadPhoto
)

router.get('/user/user-details/:userId', isSignedIn, getUserProfile, getUserDetails)

//to make the parameter option we use ? sign after the parameter
//here lastObjectId is the optional parameter
router.get(
	'/users/next-page/:userId/:lastObjectId?',
	isSignedIn,
	getUserProfile,
	isAdmin,
	getNextUserPage
)

router.get(
	'/users/previous-page/:userId/:firstObjectId',
	isSignedIn,
	getUserProfile,
	isAdmin,
	getPreviousUserPage
)

router.put('/update/photo/:userId', isSignedIn, getUserProfile, upload.single('photo'), updatePhoto)

router.delete('/user/:userId/:userDeleteId', isSignedIn, getUserProfile, isAdmin, removeUserById)

router.put(
	'/user/update-role/:userId/:userRoleUpdateId',
	isSignedIn,
	getUserProfile,
	isAdmin,
	updateUserRole
)

module.exports = router
