const Review = require("../models/reviewModel");

exports.createPlaceReview = async (req, res) => {
  const userReview = req.body;
  userReview.user = req.user.id;
  
  try {
    const newReview = new Review(userReview);
    const place = req.place;

    const foundValue = place.reviews.findIndex((item) => {
      return item.user._id.toString() === req.user.id;
    });

    if (foundValue !== -1) {
        res.status(400).json({ error: "You have already reviewed this place "});
        return;
    }

    place.reviews.push(newReview._id);
    await newReview.save();
    await place.save();
    return res.status(200).json({ message: "New review has been added" });

  } catch (error) {
    console.log(error);
    res.status(400).json("Cannot Create the User Review");
  }
};

exports.getReviewByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const reviews = await Review.find({ user: userId.toString()})
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(400).json({error: "No reviews found"});
  }
}

exports.deleteReviewById = async (req, res) => {
  const reviewId = req.params.reviewId;

  try {
    await Review.findOneAndDelete({ _id: reviewId.toString() });
    return res.status(200).json({ message: 'Review has been deleted successfully'});
  }catch (err) {
    return res.status(400).json({ error: 'Unable to delete a review'});
  }
}
