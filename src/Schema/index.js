const { validateUser } = require('./userSchema');
const { validateCategory } = require('./categorySchema');
const { validatePost } = require('./postSchema');

module.exports = { validateUser, validateCategory, validatePost };