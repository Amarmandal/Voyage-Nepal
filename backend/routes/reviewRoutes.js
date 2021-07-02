const express = require('express');
const router = express.Router();

const { createPlaceReview, getReviewByUserId, deleteReviewById } = require('../controllers/reviewController');
const { getUserById } = require("../controllers/userController");
const { getPlaceById } = require('../controllers/placeController');
const { isSignedIn, isAuthorized, isAdmin } = require('../middleware/authMiddleware');

router.param('placeId', getPlaceById);
router.param('userId', getUserById)

router.post('/review/create/:placeId/:userId', isSignedIn, isAuthorized, createPlaceReview);

//get an individual review
router.get('/review/:userId', isSignedIn, isAuthorized, getReviewByUserId);

//delete review
router.delete('/review/:reviewId/:userId/delete', isSignedIn, isAuthorized, isAdmin, deleteReviewById)

module.exports = router;