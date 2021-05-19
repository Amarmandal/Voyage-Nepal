const express = require('express');
const router = express.Router();

const { uploadPhoto, updatePhoto } = require('../controllers/userController');
const { upload } = require('../utils/uploadHelper');

router.post('/upload/photo', upload.single('photo'), uploadPhoto);

router.post('/update/photo', upload.single('photo'), updatePhoto);

module.exports = router;