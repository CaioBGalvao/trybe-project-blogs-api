const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().empty('').required().messages({
    'any.required': '"name" is required&400',
  }),
});

const validateCategory = (categoryObject) => {
  const { error } = categorySchema.validate(categoryObject);
  
  if (error) {
    const [message, code] = error.message.split('&');
    return {
      code,
      message,
    };
  }

  return { ok: true };
};

module.exports = { validateCategory };