const { userService } = require('../Services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userObject = { displayName, email, password, image };
  const result = await userService.createUser(userObject);
  if (result.code) {
    return res.status(Number(result.code)).json({ message: result.message });
  }
  return res.status(201).json({ token: result });
};

const getAllUsers = async (_req, res) => {
  const result = await userService.getAllUsers();
  return res.status(200).json(result);
};

const getUserByPk = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getUserByPk(id);
  if (!result) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(result);
};

module.exports = { createUser, getAllUsers, getUserByPk };