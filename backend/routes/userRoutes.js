const express = require("express");
const router = express.Router();

const {
  uploadPhoto,
  updatePhoto,
  getUserById,
  removeUserById,
  updateUserRole,
  getUserDetails,
  getNextUserPage,
  getPreviousUserPage
} = require("../controllers/userController");
const {
  isSignedIn,
  isAuthorized,
  isAdmin,
} = require("../middleware/authMiddleware");
const { upload } = require("../utils/uploadHelper");

router.param("userId", getUserById);

router.post(
  "/upload/photo/:userId",
  isSignedIn,
  isAuthorized,
  upload.single("photo"),
  uploadPhoto
);

router.get(
  "/user/user-details/:userId",
  isSignedIn,
  isAuthorized,
  getUserDetails
);

//to make the parameter option we use ? sign after the parameter
//here lastObjectId is the optional parameter
router.get(
  "/users/next-page/:userId/:lastObjectId?",
  isSignedIn,
  isAuthorized,
  isAdmin,
  getNextUserPage
);

router.get(
  "/users/previous-page/:userId/:firstObjectId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  getPreviousUserPage
);

router.put(
  "/update/photo/:userId",
  isSignedIn,
  isAuthorized,
  upload.single("photo"),
  updatePhoto
);

router.delete(
  "/user/:userId/:userDeleteId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  removeUserById
);

router.put(
  "/user/update-role/:userId/:userRoleUpdateId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  updateUserRole
);

module.exports = router;
