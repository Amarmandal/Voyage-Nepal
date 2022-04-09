const User = require('../models/userModel')
const { OAuth2Client } = require('google-auth-library')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { rolePowerEnum } = require('../controllers/enum')
const npmlog = require('npmlog')
const client = new OAuth2Client(process.env.CLIENT_ID)
const axios = require('axios')

//Check if user is Signed in
exports.isSignedIn = (req, res, next) => {
	const authHeader = req.headers['authorization']
	const authToken = authHeader && authHeader.split(' ')[1]

	if (!authToken) return res.status(401).json({ error: 'User is not logged in...' })

	jwt.verify(authToken, process.env.JWT_SECRETS, (err, decodedValue) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid Access Token found!' })
		}

		req.auth = decodedValue
		next()
	})
}

exports.isGoogleTokenVerified = async (req, res, next) => {
	const { idToken } = req.body
	try {
		const ticket = await client.verifyIdToken({
			idToken,
			audience: process.env.CLIENT_ID,
		})
		const payload = ticket.getPayload()
		// const userid = payload['sub']
		req.googlePayload = payload
		next()
	} catch (error) {
		npmlog.error(error.message)
		return res.status(401).json({ error: 'Unauthorized Access!' })
	}
}

exports.isAuthenticatedByFacebook = async (req, res, next) => {
	const { accessToken } = req.body.data
	const debugAccessTokenUrl = 'https://graph.facebook.com/debug_token'
	try {
		const { data: response } = await axios(
			`${debugAccessTokenUrl}?input_token=${accessToken}&access_token=${process.env.FB_APP_TOKEN}`
		)
		if (!response.data.is_valid) {
			throw new Error('Invalid access token!')
		}
		next()
	} catch (error) {
		errMsg = error.message ? error.message : 'Unauthorized Access!'
		npmlog.error(errMsg)
		return res.status(401).json({ error: errMsg })
	}
}

exports.isAuthorized = (req, res, next) => {
	//req.userProfile is populated by getUserById method
	//req,auth is populated when isSigned verify jwt token successfully
	const checker = req.userProfile && req.auth && req.auth.id == req.userProfile._id
	if (!checker) {
		return res.status(401).json({ error: 'Unauthorized Access' })
	}
	next()
}

//isAdmin check
exports.isAdmin = (req, res, next) => {
	const { role } = req.userProfile

	if (rolePowerEnum[role] > 10) {
		next()
	} else {
		return res.status(401).json({ error: 'Not Enough Permission!' })
	}
}

exports.isSubAdmin = (req, res, next) => {
	const { role } = req.userProfile

	if (rolePowerEnum[role] > 5) {
		next()
	} else {
		return res.status(401).json({ error: 'Not Enought Permission!' })
	}
}

exports.getUserByOtp = async (req, res) => {
	const { otp } = req.body

	const hashedOtp = crypto.createHash('sha256').update(otp).digest('hex')

	const user = await User.findOne({
		encryptOtp: hashedOtp.toString(),
		otpExpires: { $gt: Date.now() },
	})

	if (!user) {
		return res.status(408).json({ error: 'Invalid or Expired OTP' })
	}

	// req.profile = user;
	return res.status(200).json({ userResetId: user._id })
}
