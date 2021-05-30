const express = require("express");
const router = express.Router();
const { getUserById } = require("../controllers/userController");
const {
  userSignup,
  userEmailVerification,
  userSingin,
  forgetPassword,
  resetPassword,
  changeCurrentPassword,
  handleSignout
} = require("../controllers/authController");
const {
  isSignedIn,
  isAuthenticated,
  getUserByOtp
} = require("../middleware/authMiddleware");

//Activate User
router.post("/user/verify-email", userEmailVerification);

//Create New User
router.post("/user/signup", userSignup);

//user sign in
router.post("/user/signin", userSingin);

//forget Password
router.post('/user/forget-password', forgetPassword);

//reset user otp
router.post('/user/verify-reset-otp', getUserByOtp);

router.param('userId', getUserById);
//reset password
router.post('/user/:userId/reset-password', resetPassword);

router.put('/user/:userId/change-password', isSignedIn, isAuthenticated, changeCurrentPassword);

router.get('/user/:userId/signout', isSignedIn, isAuthenticated, handleSignout);

module.exports = router;
