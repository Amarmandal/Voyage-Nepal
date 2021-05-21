const Review = require('../models/reviewModel');
const Place = require('../models/placeModel');

exports.createPlaceReview = async (req, res) => {
    const userReview = req.body;
    userReview.userId = req.user.id;
    try {
        const userReview = new Review(userReview);
        const place = await Place.findById({ _id: req.place._id});
        place.reviews.push(userReview);
        await review.save();
        await place.save()
        res.status(200).json(review)
    } catch (error) {
        console.log(error);
        res.status(400).json('Cannot Create the User Review');
    }
}
