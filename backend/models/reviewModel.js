const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    reviewText: {
        type: String,
        trim: true,
        minLength: 5,
        maxLength: 150,
    },
    rating: {
        type: Number,
        default: 0,
        required: true,
        max: 5
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;