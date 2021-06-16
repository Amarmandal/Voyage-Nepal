const express = require("express");
const router = express.Router();

const {
  getPlaceById,
  getAllPlace,
  deletePlace,
  createPlace,
  updatePlace,
  recommendsPlace
} = require("../controllers/placeController");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../middleware/authMiddleware");
const { uploadPlacePhoto } = require("../middleware/placeMiddleware");
const { upload } = require("../utils/uploadHelper");

router.param("placeId", getPlaceById);

router.get("/place/:placeId", isSignedIn, isAuthenticated, (req, res) => {
  return res.status(200).json({ data: req.place});
});

//create place only by admin
router.post(
  "/place/create",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  upload.single("photo"),
  uploadPlacePhoto,
  createPlace
);

//recommendation routes
router.post('/place/recommends', isSignedIn, isAuthenticated, recommendsPlace);

//update place
router.put(
  "/place/:placeId/update",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updatePlace
);
//deleteplace
router.delete(
  "/place/:placeId/delete",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deletePlace
);
//get All the places
router.get("/places", isSignedIn, isAuthenticated, getAllPlace);

module.exports = router;
