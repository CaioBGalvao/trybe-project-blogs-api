const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().empty('').required(),
  content: Joi.string().empty('').required(),
  categoryIds: Joi.array().empty().required(),
}).required().messages({ 'any.required': 'Some required fields are missing&400' });

const validatePost = (postObject) => {
  const { error } = postSchema.validate(postObject);

  if (error) {
    const [message, code] = error.message.split('&');
    return {
      code,
      message,
    };
  }

  return { ok: true };
};

module.exports = { validatePost };