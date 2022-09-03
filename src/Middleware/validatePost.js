const { Category } = require('../database/models');

const postValidation = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
 
    const categoryResult = await Promise
      .all(categoryIds
        .map((id) => Category
          .findByPk(id)));

  if (categoryResult.some((result) => result === null)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = { postValidation };