const express = require("express");
const router = express.Router();

const {
  getHotelById,
  createHotelForPlace,
  deleteHotel,
  updateHotel,
  getAllStayPlaces
} = require("../controllers/hotresController");
const { getUserById } = require("../controllers/userController");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../middleware/authMiddleware");
const { uploadHotelPhoto } = require("../middleware/hotelMiddleware");
const { upload } = require("../utils/uploadHelper");

router.param("hotelId", getHotelById);
router.param("userId", getUserById);

router.get('/hotels', isSignedIn, isAuthenticated, getAllStayPlaces);

//create hotel
router.post(
  "/hotel/:userId/create",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  upload.single('photo'),
  uploadHotelPhoto,
  createHotelForPlace
);

//update the hotel
router.put(
  "/hotel/:userId/:hotelId/update",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateHotel
);

//delete the hotel
router.delete(
  "/hotel/:userId/:hotelId/delete",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteHotel
);

module.exports = router;
