let jwt = require("jsonwebtoken");

let createToken = (data) => {
  return jwt.sign({ data }, process.env.SECRET);
};

let isLogin = ([...role]) => {
  try {
    return (req, res, next) => {
      let token = req.cookies["token"];
      console.log(token);
      if (!token) {
        throw new Error("you are not login");
      }
      let { data } = jwt.verify(token, process.env.SECRET);
      console.log(data);

      if (!role.includes(data.role)) {
        throw new Error("you are no allow");
      }

      req.user = data;
      next();
    };
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createToken, isLogin };
