const express = require('express');
const router = express.Router();

const User = require("../models/userModel");
const Place = require("../models/placeModel");
const HotRes = require('../models/hotresModel');
const Category = require('../models/categoryModel');

const {
    isSignedIn,
    isAuthenticated,
    isAdmin
 } = require('../middleware/authMiddleware');


const getDocsCount = async (req, res) => {
	try{
		const userCount = await User.find().countDocuments();
		const categoryCount = await Category.find().countDocuments();
		const placeCount = await Place.find().countDocuments();
		const hotelCount = await HotRes.find().countDocuments();

		return res.status(200).json({
			data: {
				userCount,
				categoryCount,
				placeCount,
				hotelCount
			}
		})

	} catch (err) {
		return res.status(404).json({ error: 'Cannot get the Count'});
	}
}


//update category
router.get('/docs/count', isSignedIn, isAuthenticated, isAdmin, getDocsCount);


module.exports = router;