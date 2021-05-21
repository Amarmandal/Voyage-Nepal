const express = require('express');
const router = express.Router();

const { uploadPhoto, updatePhoto, getUserById } = require('../controllers/userController');
const { isSignedIn, isAuthenticated } = require('../middleware/authMiddleware');
const { upload } = require('../utils/uploadHelper');

router.param('userId', getUserById);

router.post('/upload/photo/:userId', isSignedIn, isAuthenticated, upload.single('photo'), uploadPhoto);

router.post('/update/photo/:userId', isSignedIn, isAuthenticated, upload.single('photo'), updatePhoto);

module.exports = router;