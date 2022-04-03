const express = require('express')
const router = express.Router()
const { getUserById } = require('../controllers/userController')
const {
	userSignup,
	userEmailVerification,
	userSingin,
	forgetPassword,
	resetPassword,
	changeCurrentPassword,
	handleSignout,
	tokenGenerator,
} = require('../controllers/authController')
const { isSignedIn, isAuthorized, getUserByOtp } = require('../middleware/authMiddleware')

router.param('userId', getUserById)

//Activate User
router.post('/user/verify-email', userEmailVerification)

//Create New User
router.post('/user/signup', userSignup)

//user sign in
router.post('/user/signin', userSingin)

//forget Password
router.post('/user/forget-password', forgetPassword)

//reset user otp
router.post('/user/verify-reset-otp', getUserByOtp)

//reset password
router.post('/user/:userId/reset-password', resetPassword)

router.put('/user/:userId/change-password', isSignedIn, isAuthorized, changeCurrentPassword)

router.post('/auth/:userId/token', tokenGenerator)

router.get('/auth/:userId/signout', isSignedIn, isAuthorized, handleSignout)

module.exports = router
