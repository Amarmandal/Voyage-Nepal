const express = require("express");
const router = express.Router();
const {
  userSignup,
  userEmailVerification,
  userSingin,
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../controllers/authController");

//Activate User
router.post("/user/verify-email", userEmailVerification);

//Create New User
router.post("/user/signup", userSignup);

//user sign in
router.post("/user/signin", userSingin);

//Protected route test
router.get("/protected", isSignedIn, isAuthenticated, isAdmin, (req, res) => {
  res.send("With an admin privelages");
});

module.exports = router;
