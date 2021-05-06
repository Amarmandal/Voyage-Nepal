const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        unique: true,
    },
    gender: {
        type: String,
        trim: true,
        required: true,
    },
    isAdmin: {
       type: Boolean,
       default: false, 
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    profileImgURL: {
        type: String,
        trim: true,
    },
    encryPassword: {
        type: String,
        required: true
    },
    salt: String,
}, {timestamps: true});

//User Model
const User = mongoose.model('User', userSchema);

module.exports = User;