const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types;

const placeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        unique: true
    },
    placePhoto: {
        type: String,
    },
    category: [{
        type: ObjectId,
        ref: 'Category',
        trim: true,
    }],
    stayPlace: [{
        type: ObjectId,
        ref: 'Hotel',
        trim: true,
    }],
    reviews: [{
        type: ObjectId,
        ref: 'Review',
        trim: true,
    }],
    ratings: {
        type: Number,
        default: 0,
        required: true,
        max: 5
    }
}, {timestamps: true});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;