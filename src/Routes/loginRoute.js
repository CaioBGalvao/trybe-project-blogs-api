const express = require('express');
const { loginValidation } = require('../Middleware');

const loginController = require('../Controllers/loginController');

const loginRoute = express.Router();

loginRoute
.post('/',
loginValidation.bodyValidation,
loginController.login);

module.exports = loginRoute;