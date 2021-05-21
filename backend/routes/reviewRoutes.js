const express = require('express');
const router = express.Router();

const { createReview } = require('../controllers/reviewController');
const { isSignedIn, isAuthenticated } = require('../middleware/authMiddleware');


router.post('/review/create/:placeId', isSignedIn, isAuthenticated, createReview);


module.exports = router;