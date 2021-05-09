const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('/User Route hit');
})

router



module.exports = router;