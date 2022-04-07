const { Router } = require("express");
const {
  userLogin,
  userRegister,
} = require("../controllers/users.controller");

const userRouter = Router();

userRouter.get("/login", userLogin);

userRouter.get("/register", userRegister);

module.exports = userRouter;
