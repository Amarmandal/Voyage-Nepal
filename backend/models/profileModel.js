const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema(
	{
		profilePicture: {
			type: String,
			trim: true,
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