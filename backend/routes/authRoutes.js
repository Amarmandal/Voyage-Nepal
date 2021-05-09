const express = require('express');
const router = express.Router();
const { userSignup } = require('../controllers/authController');

//create a new user
router.post('/user/signup', userSignup);

module.exports = router;