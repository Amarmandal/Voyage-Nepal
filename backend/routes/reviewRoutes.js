const express = require('express');
const router = express.Router();

const { createPlaceReview } = require('../controllers/reviewController');
const { isSignedIn, isAuthenticated } = require('../middleware/authMiddleware');


router.post('/review/create/:placeId', isSignedIn, isAuthenticated, createPlaceReview);

module.exports = router;