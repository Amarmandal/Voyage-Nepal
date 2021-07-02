const express = require("express");
const router = express.Router();

const {
  getPlaceById,
  getAllPlace,
  deletePlace,
  createPlace,
  updatePlace,
  recommendsPlace,
  getNextPlacePage,
  getPreviousPlacePage
} = require("../controllers/placeController");
const {
  isSignedIn,
  isAuthorized,
  isAdmin,
} = require("../middleware/authMiddleware");
const {
  getUserById
} = require("../controllers/userController");
const { uploadPlacePhoto } = require("../middleware/placeMiddleware");
const { upload } = require("../utils/uploadHelper");

router.param("placeId", getPlaceById);
router.param('userId', getUserById);

//get place by Id
router.get("/place/:placeId/:userId", isSignedIn, isAuthorized, (req, res) => {
  return res.status(200).json({ data: req.place});
});

//get All the places
router.get("/places/:userId", isSignedIn, isAuthorized, getAllPlace);

router.get(
  "/places/next-page/:userId/:lastObjectId?",
  isSignedIn,
  isAuthorized,
  isAdmin,
  getNextPlacePage
);

router.get(
  "/places/previous-page/:userId/:firstObjectId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  getPreviousPlacePage
);

//create place only by admin
router.post(
  "/place/create/:userId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  upload.single("photo"),
  uploadPlacePhoto,
  createPlace
);

//recommendation routes
router.post('/place/recommends/:userId', isSignedIn, isAuthorized, recommendsPlace);

//update place
router.put(
  "/place/update/:placeId/:userId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  updatePlace
);
//deleteplace
router.delete(
  "/place/delete/:placeId/:userId/",
  isSignedIn,
  isAuthorized,
  isAdmin,
  deletePlace
);

module.exports = router;
