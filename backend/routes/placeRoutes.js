const express = require('express');
const router = express.Router();

const {
    getPlaceById,
    getAllPlace,
    deletePlace,
    createPlace,
    updatePlace
} = require('../controllers/placeController');
const { isSignedIn, isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

router.param('placeId', getPlaceById);

//create place only by admin
router.post('/place/create', isSignedIn, isAuthenticated, isAdmin, createPlace);
//update place
router.put('/place/:placeId/update', isSignedIn, isAuthenticated, isAdmin, updatePlace);
//deleteplace
router.delete('/place/:placeId/delete', isSignedIn, isAuthenticated, isAdmin, deletePlace);
//get All the places
router.post('/places', isSignedIn, isAuthenticated, getAllPlace);

module.exports = router;