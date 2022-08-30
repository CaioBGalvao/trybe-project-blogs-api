const express = require('express');

const { token } = require('../Middleware');
const { userController } = require('../Controllers');

const userRoute = express.Router();

userRoute
  .post('/', userController.createUser)
  .get('/', token.validateToken,
  userController.getAllUsers)
  .get('/:id', token.validateToken,
  userController.getUserByPk);

module.exports = userRoute;