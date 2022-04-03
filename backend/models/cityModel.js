const mongoose = require('mongoose')

const Schema = mongoose.Schema

const citySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			maxLength: 65,
		},
		lat: {
			type: Number,
		},
		long: {
			type: Number,
		},
		cityType: {
			type: String,
			enum: ['Metropolitan', 'Sub-Metropolitan'],
			default: 'Metropolitan',
		},
	},
	{ timestamps: true }
)

const City = mongoose.model('City', citySchema)

module.exports = City
