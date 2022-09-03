const express = require('express');
const { token, validatePost } = require('../Middleware');

const { postController } = require('../Controllers');

const postRoute = express.Router();

postRoute
  .post('/',
    validatePost.postValidation,
    token.validateToken,
    postController.postMyBlog);

module.exports = postRoute;