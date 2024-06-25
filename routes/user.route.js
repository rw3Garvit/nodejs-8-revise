let express = require("express");
const { userController } = require("../controllers");
const { isLogin } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const validate = require("../middleware/validate");
const { userValidation } = require("../validations");

let route = express.Router();

route.get("/get", isLogin(["admin", "user"]), userController.getUser);
route.post(
  "/register",
  //   validate(userValidation.user),
  upload.single("profile"),
  userController.register
);
route.post("/login", userController.login);

module.exports = route;
