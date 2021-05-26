const express = require("express");
const router = express.Router();
const { getUserById } = require("../controllers/userController");
const {
  userSignup,
  userEmailVerification,
  userSingin,
  forgetPassword,
  resetPassword,
  changeCurrentPassword
} = require("../controllers/authController");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
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
//Protected route test
router.get("/protected", isSignedIn, isAuthenticated, isAdmin, (req, res) => {
  res.send("With an admin privelages");
});

module.exports = router;
