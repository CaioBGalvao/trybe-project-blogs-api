const { User } = require('../database/models');
const { token } = require('../Middleware');

const login = async (loginObject) => {
  const { email, password } = loginObject;

  if (email.length === 0
    || password.length === 0) {
    return { 
      code: 400, 
      message: 'Some required fields are missing',
    };
  }

  const resultModel = await User.findOne({
    // logging: console.log,
    attributes: ['email', 'password'],
    where: { email },
    raw: true,
  });

  if (!resultModel) return undefined;

  if (resultModel.password !== loginObject.password) {
    return undefined;
  }

  return token.createToken({ email });
};

module.exports = { login };
