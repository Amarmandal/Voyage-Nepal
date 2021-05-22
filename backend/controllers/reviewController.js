const Review = require("../models/reviewModel");

exports.createPlaceReview = async (req, res) => {
  const userReview = req.body;
  userReview.userId = req.user.id;
  try {
    const newReview = new Review(userReview);
    const place = req.place;

    const foundValue = place.reviews.findIndex((item) => {
      return item.userId.toString() === req.user.id;
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
