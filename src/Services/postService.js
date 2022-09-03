const { validatePost } = require('../Schema');

const {
  User,
  BlogPost,
  PostCategory,
  sequelize,
} = require('../database/models');

const createPost = async (postObject, email) => {
  const validationResult = validatePost(postObject);
  if (validationResult.code) return validationResult;

  const { title, content, categoryIds } = postObject;

  const { id } = await User.findOne({ where: { email } });

  const result = await sequelize
    .transaction(async (t) => {
      const createResult = await BlogPost.create({
        userId: id, title, content,
      }, { transaction: t });
      const mappedCategories = categoryIds
        .map((categoryId) => ({ postId: createResult.id, categoryId }));
      await PostCategory.bulkCreate(mappedCategories, { transaction: t });
      return createResult;
    });
  return result;
};

module.exports = { createPost };