const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types;

const placeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        minLength: 1,
    },
    category: [{
        type: ObjectId,
        ref: 'Category',
        trim: true,
    }],
    hotels: [{
        type: ObjectId,
        ref: 'Hotel',
        trim: true,
    }],
    restaurant: [{
        type: ObjectId,
        ref: 'Restaurant',
        trim: true,
    }],
    reviews: [{
        type: ObjectId,
        ref: 'Review',
        trim: true,
    }]
}, {timestamps: true});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;