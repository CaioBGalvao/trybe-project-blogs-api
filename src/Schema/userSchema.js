const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long&400',
  }),
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    'string.email': '"email" must be a valid email&400',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long&400',
  }),
});

const validateUser = (userObject) => {
  const { error } = userSchema.validate(userObject);
  console.error(error);

  if (error) {
    const [message, code] = error.message.split('&');
    return {
      code,
      message,
    };
  }

  return { ok: true };
};

module.exports = { validateUser };