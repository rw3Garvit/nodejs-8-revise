const { createToken } = require("../middleware/auth");
const uploadImage = require("../middleware/cloudnary");
const { userService } = require("../services");
const sendEmail = require("../services/email.service");
const bcrypt = require('bcrypt');

let getUser = async (req, res) => {
  try {
    let user = req.user;
    res.status(200).json({
      message: "get success",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

let register = async (req, res) => {
  console.log(req.body);

  let body = req.body;
  let { path } = req.file;

  let result = await uploadImage(path)

  let newBody = {
    ...body,
    profile: result.url,
  };

  bcrypt.hash(body.password, 20, function (err, hash) {
    
  });

  console.log(newBody);

  // console.log(result, "cloud");

  let user = await userService.register(newBody);

  if (user) {

    let email = await sendEmail(user.email, "Test mail", `Hello ${user.email}`)

    console.log(email, "email");
  }

  res.status(200).json({
    message: "user created success",
    user,
  });
};

let login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await userService.findUserByEmail(email);
    console.log(user, "result");

    if (!user) {
      throw new Error("user not found");
    }

    if (user.password !== password) {
      throw new Error("password invalid");
    }

    let token = createToken(user);
    res.cookie("token", token);
    res.status(200).json({ message: "login success" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getUser, register, login };
