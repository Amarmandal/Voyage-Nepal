const mongoose = require('mongoose')
const crypto = require('crypto')
const { v4: uuid } = require('uuid')
const { roleEnum } = require('../controllers/enum')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const { ObjectId } = Schema.Types

const userSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			minLength: 3,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			minLength: 1,
			unique: true,
		},
		DOB: {
			type: Date,
			required: true,
		},
		role: {
			type: String,
			enum: [roleEnum.USER, roleEnum.SUBADMIN, roleEnum.ADMIN],
			default: roleEnum.USER,
		},
		hashPassword: {
			type: String,
			trim: true,
			required: true,
		},
		city: {
			type: String,
			trim: true,
			required: true,
		},
		profileId: {
			type: ObjectId,
			ref: 'Profile',
		},
	},
	{ timestamps: true }
)

userSchema
	.virtual('password')
	.set(async function (userPass) {
		this._password = userPass
		this.hashPassword = await this.getHashPassword(userPass)
	})
	.get(function () {
		return this._password
	})

userSchema.method({
	authenticate: async function (plainPassword) {
		return await bcrypt.compare(plainPassword, this.hashPassword)
	},

	getHashPassword: async function (plainPassword) {
		if (plainPassword === '') return ''
		try {
			const saltRounds = 10
			const hash = await bcrypt.hash(plainPassword, saltRounds)
			return hash
		} catch (error) {
			return ''
		}
	},

	generateOtp: function () {
		let otp = ''
		for (let i = 0; i < 6; i++) {
			otp += Math.floor(Math.random() * 10)
		}

		this.encryptOtp = crypto.createHash('sha256').update(otp).digest('hex')

		this.otpExpires = Date.now() + 5 * 60 * 1000
		return otp
	},
})

//User Model
const User = mongoose.model('User', userSchema)

module.exports = User
