const express = require("express");
const router = express.Router();

const {
  getHotelById,
  createHotelForPlace,
  deleteHotel,
  updateHotel,
  getAllStayPlaces,
} = require("../controllers/hotresController");
const { getUserById } = require("../controllers/userController");
const {
  isSignedIn,
  isAuthorized,
  isAdmin,
} = require("../middleware/authMiddleware");
const { uploadHotelPhoto } = require("../middleware/hotelMiddleware");
const { upload } = require("../utils/uploadHelper");

router.param("hotelId", getHotelById);
router.param("userId", getUserById);

router.get(
  "/hotels/:userId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  getAllStayPlaces
);

//create hotel
router.post(
  "/hotel/create/:userId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  upload.single("photo"),
  uploadHotelPhoto,
  createHotelForPlace
);

//update the hotel
router.put(
  "/hotel/update/:hotelId/:userId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  updateHotel
);

//delete the hotel
router.delete(
  "/hotel/delete/:hotelId/:userId",
  isSignedIn,
  isAuthorized,
  isAdmin,
  deleteHotel
);

module.exports = router;
