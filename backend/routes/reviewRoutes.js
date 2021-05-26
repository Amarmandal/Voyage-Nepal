const express = require('express');
const router = express.Router();

const { createPlaceReview, getReviewByUserId, deleteReviewById } = require('../controllers/reviewController');
const { getPlaceById } = require('../controllers/placeController');
const { isSignedIn, isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

router.param('placeId', getPlaceById);

router.post('/review/create/:placeId', isSignedIn, isAuthenticated, createPlaceReview);

//get an individual review
router.get('/review/:userId', isSignedIn, isAuthenticated, getReviewByUserId);

//delete review
router.delete('/review/:reviewId/delete', isSignedIn, isAuthenticated, isAdmin, deleteReviewById)

module.exports = router;