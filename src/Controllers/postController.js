const { postService } = require('../Services');

const postMyBlog = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req;
  const postObject = { title, content, categoryIds };
  const post = await postService.createPost(postObject, email);
  if (post.code) {
    return res.status(Number(post.code)).json({ message: post.message });
  }
  res.status(201).json(post);
};

module.exports = { postMyBlog };