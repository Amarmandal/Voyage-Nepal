const express = require('express');
const router = express.Router();

const { uploadPhoto, updatePhoto, getUserById, removeUserById, updateUserRole } = require('../controllers/userController');
const { isSignedIn, isAuthenticated, isAdmin } = require('../middleware/authMiddleware');
const { upload } = require('../utils/uploadHelper');

router.param('userId', getUserById);

router.post('/upload/photo/:userId', isSignedIn, isAuthenticated, upload.single('photo'), uploadPhoto);

router.put('/update/photo/:userId', isSignedIn, isAuthenticated, upload.single('photo'), updatePhoto);

router.delete('/user/:userId', isSignedIn, isAuthenticated, isAdmin, removeUserById);

router.put('/user/update-role/:userId', isSignedIn, isAuthenticated, isAdmin, updateUserRole);

module.exports = router;