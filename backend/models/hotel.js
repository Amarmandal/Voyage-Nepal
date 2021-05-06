const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types;

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1,
    },
    location: [{
        type: ObjectId,
        ref: 'Place',
        required: true,
    }]

}, {timestamps: true});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;