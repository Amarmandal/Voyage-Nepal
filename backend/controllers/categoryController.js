const Category = require('../models/categoryModel');

exports.createCategory = (req, res) => {
    const newCat = new Category(req.body);
    newCat.save()
        .then(doc => {
            res.status(200).json({data: doc});
        })
        .catch(err => {
            console.log(err);
            res.status(403).json({error: err})
        })
}