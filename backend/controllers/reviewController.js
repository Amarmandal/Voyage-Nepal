const Review = require('../models/reviewModel');

exports.createReview = async (req, res) => {
    const userReview = req.body;
    userReview.userId = req.user.id;

    try {
        const review = new Review(userReview);
        await review.save()
        res.status(200).json(review)
    } catch (error) {
        console.log(error);
        res.status(400).json('Cannot Create the User Review');
    }
}