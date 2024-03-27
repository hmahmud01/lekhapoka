const { Category } = require("../models/mongo.model");

const allCategories = async (req, res, next) => {
    const categories = await Category.find();
    res.status(200).json(categories);
}

const createCategory = async (req, res, next) => {
    const newCategory = new Category({...req.body})
    const createCategory = await newCategory.save()
    return res.status(201).json(createCategory)
}

module.exports = {
    allCategories,
    createCategory,
}