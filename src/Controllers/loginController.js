const { loginService } = require('../Services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginObject = { email, password };
  const result = await loginService.login(loginObject);
  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  if (result.code) {
    return res.status(Number(result.code)).json({ message: result.message });
  }
  return res.status(200).json({ token: result });
};

module.exports = { login };