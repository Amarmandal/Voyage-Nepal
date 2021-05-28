const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotResSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxLength: 65,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1,
    },
    stayType: {
        type: String,
        enum: ['Hotel', 'Restaurant'],
        default: 'Hotel'
    },
    hotelPhotoUrl: String

}, {timestamps: true});

const HotRes = mongoose.model('Hotel', hotResSchema);

module.exports = HotRes;