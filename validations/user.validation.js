const Joi = require("joi");

const user = {
  body: Joi.object().keys({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    profile: Joi.string().required().trim(),
    role: Joi.string().required().trim(),
  }),
};

module.exports = { user };
