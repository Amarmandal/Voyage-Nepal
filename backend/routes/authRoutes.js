const express = require('express');
const router = express.Router();
const { userSignup, userSingin, isSignedIn, isAuthenticated, isAdmin } = require('../controllers/authController');

//create a new user
router.post('/user/signup', userSignup);

//user sign in
router.post('/user/signin', userSingin);

//Protected route test
router.get('/protected', isSignedIn, isAuthenticated, isAdmin,(req, res) => {
    res.send('With an admin privelages');
})

module.exports = router;