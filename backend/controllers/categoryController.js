const Category = require('../models/categoryModel');

//category extractor
exports.getCategoryById = async (req, res, next, categoryId) => {
    try {
        const category = await Category.findById({ _id: categoryId.toString() });
        req.category = category;
        next();
    } catch (error) {
        console.log(error);
        return res.status(404).json({error: 'Category Not Found IN DB'});
    }
}

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

exports.deleteCategory = async (req, res) => {
    const targetCategoryId = req.category._id;
    try {
        await Category.findByIdAndRemove({ _id: targetCategoryId });
        return res.status(200).json('Category Successfully deleted');
    } catch(err) {
        console.log(err);
        return res.status(401).json("Couldn't delete the category");
    }

}

exports.updateCategory = async (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.difficulty = req.body.difficulty;

    try {
        await category.save();
        res.status(200).json({ data: 'Category updated Successfully'})
    } catch (error) {
        res.status(500).json({ error: 'Could not update a category'});
    }
}

exports.getCategory = (req, res) => {
    if(!req.category) {
        return res.status(404).json({error: 'Category not found'});
    }

    return res.status(200).json({ data: req.category });
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        return res.status(200).json({ data: categories});
    } catch (error) {
        console.log(error);
        return res.status(404).json({ error: 'NO any categories'});
    }
}

