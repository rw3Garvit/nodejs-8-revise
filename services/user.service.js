const { userSchema } = require("../models");

let register = (body) => {
  return userSchema.create(body);
};

let findUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

module.exports = { register, findUserByEmail };
