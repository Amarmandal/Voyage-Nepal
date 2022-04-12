const { default: axios } = require('axios')
const npmlog = require('npmlog')
const City = require('../models/cityModel')

//category extractor
exports.getCategoryById = async (req, res, next, categoryId) => {
	try {
		const category = await Category.findById({ _id: categoryId.toString() })
		req.category = category
		next()
	} catch (error) {
		console.log(error)
		return res.status(404).json({ error: 'Category Not Found IN DB' })
	}
}

exports.getNextCategoryPage = async (req, res) => {
	try {
		const { lastObjectId } = req.params
		let categories
		if (!lastObjectId) {
			categories = await Category.find({}).limit(5)
		} else {
			categories = await Category.find({
				_id: { $gt: lastObjectId.toString() },
			}).limit(5)
		}
		return res.status(200).json({ data: categories })
	} catch (err) {
		console.log(err)
		return res.status(400).json({ error: 'Cannot fetch the next page' })
	}
}

exports.getPreviousCategoryPage = async (req, res) => {
	try {
		const { firstObjectId } = req.params
		let categories
		if (!firstObjectId) {
			categories = await Category.find({}).sort({ _id: -1 }).select('name difficulty').limit(5)
		} else {
			categories = await Category.find({ _id: { $lt: firstObjectId.toString() } })
				.sort({ _id: -1 })
				.select('name difficulty')
				.limit(5)
		}
		return res.status(200).json({ data: categories })
	} catch (err) {
		console.log(err)
		return res.json({ error: 'Cannot fetch Previous page' })
	}
}

exports.createNewCity = async (req, res) => {
	const { name, cityType } = req.body
	const key = process.env.GOOGLE_MAP_KEY
	const URL = 'https://maps.googleapis.com/maps/api/geocode/json'
	try {
		const city = new City({
			name,
			cityType,
		})
		const { data } = await axios.get(`${URL}?address=${name}&components=country:NP&key=${key}`)
		if (data.status !== 'OK') {
			throw new Error('Unable to set latitutde and longitude of the place')
		}

		const { results } = data
		const {
			geometry: { location },
		} = results[0]
		city.lat = location.lat
		city.long = location.lng
		await city.save()
		res.status(200).json({ newCity: city })
	} catch (err) {
		errMsg = err.code === 11000 ? 'City already exist in a DB' : 'Oops! Unable to create a city'
		res.status(403).json({ error: errMsg })
	}
}

exports.deleteCategory = async (req, res) => {
	try {
		const targetCategoryId = req.category._id
		if (!targetCategoryId) {
			throw new Error('Handled by Catch block')
		}

		await Category.findByIdAndRemove({ _id: targetCategoryId })
		return res.status(200).json('Category Successfully deleted')
	} catch (err) {
		return res.status(401).json({ error: 'Category might already be deleted' })
	}
}

exports.updateCategory = async (req, res) => {
	const category = req.category
	category.name = req.body.name
	category.difficulty = req.body.difficulty

	try {
		await category.save()
		res.status(200).json({ data: 'Category updated Successfully' })
	} catch (error) {
		res.status(500).json({ error: 'Could not update a category' })
	}
}

exports.getCategory = (req, res) => {
	if (!req.category) {
		return res.status(404).json({ error: 'Category not found' })
	}

	return res.status(200).json({ data: req.category })
}

exports.getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find({})
		return res.status(200).json({ data: categories })
	} catch (error) {
		console.log(error)
		return res.status(404).json({ error: 'NO any categories' })
	}
}
