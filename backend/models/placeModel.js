const mongoose = require('mongoose')

const Schema = mongoose.Schema
const { ObjectId } = Schema.Types

const placeSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			minLength: 1,
			unique: true,
			lowercase: true,
		},
		placePhoto: {
			type: String,
		},
		description: {
			type: String,
			trim: true,
			required: true,
		},
		nearestCity: {
			type: ObjectId,
			required: true,
			ref: 'City',
		},
		category: [
			{
				type: ObjectId,
				ref: 'Category',
				trim: true,
			},
		],
		stayPlace: [
			{
				type: ObjectId,
				ref: 'Horeca',
				trim: true,
			},
		],
		reviews: [
			{
				type: ObjectId,
				ref: 'Review',
				trim: true,
			},
		],
		rating: {
			type: Number,
			default: 0,
			required: true,
			max: 5,
		},
		userRatingsTotal: {
			type: Number,
			default: 0,
			required: true,
		},
	},
	{ timestamps: true }
)

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
