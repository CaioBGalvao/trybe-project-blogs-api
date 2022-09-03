const express = require('express');
const { token } = require('../Middleware');

const { categoriesController } = require('../Controllers');

const categoriesRoute = express.Router();

categoriesRoute
  .post('/',
    token.validateToken,
    categoriesController.createCategory)
  .get('/', token.validateToken,
    categoriesController.getAllCategories);

module.exports = categoriesRoute;