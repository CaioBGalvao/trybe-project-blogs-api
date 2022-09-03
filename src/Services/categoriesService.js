const { Category } = require('../database/models');
const { validateCategory } = require('../Schema');

const createCategory = async (categoryObject) => {
  const validationResult = validateCategory(categoryObject);
  if (validationResult.code) return validationResult;

  const { name } = categoryObject;

  const category = await Category.create({ name });
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAllCategories };