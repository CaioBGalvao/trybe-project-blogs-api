const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1 days' };
// expiresIn: aceita ms, s, m, h, d, w, y (ex: 1d, 1h, 1y)
// ou seconds, minutes, hours, days, weeks, years (ex: 1 days, 1 hours, 1 years)
// por padrão uma numeração será considerada milessegundos

const createToken = (payload) => {
  // payload sempre será a entrada de um objeto (TypeScript faz falta)
  const token = jwt
    .sign(payload, JWT_SECRET, JWT_OPTIONS);
  return token;
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    jwt.verify(authorization, JWT_SECRET);
  } catch (err) {
    if (err.message === 'jwt must be provided') {
      return res.status(401).json({ message: 'Token not found' });
    }
    if (err.message) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
  next();
};

module.exports = { createToken, validateToken };
