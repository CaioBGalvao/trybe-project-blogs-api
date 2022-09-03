const { categoriesService } = require('../Services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const categoryObject = { name };
  const category = await categoriesService.createCategory(categoryObject);
  if (category.code) {
    return res.status(Number(category.code)).json(category.message);
  }
  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const categories = await categoriesService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = { createCategory, getAllCategories };