const express = require('express');
const router = express.Router();

const { createPlaceReview } = require('../controllers/reviewController');
const { getPlaceById } = require('../controllers/placeController');
const { isSignedIn, isAuthenticated } = require('../middleware/authMiddleware');

router.param('placeId', getPlaceById);

router.post('/review/create/:placeId', isSignedIn, isAuthenticated, createPlaceReview);

module.exports = router;