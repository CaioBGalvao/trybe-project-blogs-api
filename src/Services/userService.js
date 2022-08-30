const { User } = require('../database/models');
const { token } = require('../Middleware');
const { validateUser } = require('../Schema');

const createUser = async (userObject) => {
  const validationResult = validateUser(userObject);
  if (validationResult.code) return validationResult;

  const { displayName, email, password, image } = userObject;

  const resultModel = await User.findOrCreate({
    logging: console.log,
    where: { email },
    defaults: {
      displayName,
      email,
      password,
      image,
    },
  });

  if (!resultModel[1]) {
    return { code: 409, message: 'User already registered' };
  }

  return token.createToken({ email });
};

const getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

const getUserByPk = async (id) => {
  const result = await User.findByPk(id);
  return result;
};

module.exports = { createUser, getAllUsers, getUserByPk };