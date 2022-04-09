const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema(
	{
		DOB: {
			type: Date,
			required: true,
		},
		city: {
			type: ObjectId,
			trim: true,
			ref: 'City',
		},
		gender: {
			type: String,
			enum: ['male', 'female', 'other'],
			default: 'male',
		},
		otpExpiresIn: {
			type: Date,
			unique: true,
		},
		encryptedOtp: {
			type: String,
			unique: true,
		},
	},
	{ timestamps: true }
)

//Profile Model
const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile
