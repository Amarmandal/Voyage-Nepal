const express = require("express");
const router = express.Router();
const {
  userSignup,
  userEmailVerification,
  userSingin,
  forgetPassword,
  resetPassword
} = require("../controllers/authController");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getUserByOtp
} = require("../middleware/authMiddleware");

router.param("otp", getUserByOtp);

//Activate User
router.post("/user/verify-email", userEmailVerification);

//Create New User
router.post("/user/signup", userSignup);

//user sign in
router.post("/user/signin", userSingin);

//forget Password
router.post('/user/forget-password', forgetPassword);

//reset Password
router.post('/user/:otp/reset-password', resetPassword)

//Protected route test
router.get("/protected", isSignedIn, isAuthenticated, isAdmin, (req, res) => {
  res.send("With an admin privelages");
});

module.exports = router;
