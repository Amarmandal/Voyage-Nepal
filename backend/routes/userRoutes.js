const express = require("express");
const router = express.Router();

const {
  uploadPhoto,
  updatePhoto,
  getUserById,
  removeUserById,
  updateUserRole,
  getUserDetails,
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
