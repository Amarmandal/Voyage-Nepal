const express = require('express');
const router = express.Router();

const {
    getHotelById,
    createHotelForPlace,
    deleteHotel,
    updateHotel
} = require('../controllers/hotresController');
const { getUserById } = require('../controllers/userController');
const { isSignedIn, isAuthenticated, isAdmin} = require('../middleware/authMiddleware');

router.param('hotelId', getHotelById);
router.param('userId', getUserById);

//create hotel
router.post('/hotel/:userId/create', isSignedIn, isAuthenticated, isAdmin, createHotelForPlace);

//update the hotel
router.put('/hotel/:userId/:hotelId/update', isSignedIn, isAuthenticated, isAdmin, updateHotel);

//delete the hotel
router.delete('/hotel/:userId/:hotelId/delete', isSignedIn, isAuthenticated, isAdmin, deleteHotel);

module.exports = router;