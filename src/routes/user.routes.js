import express from "express";
const userRouter = express.Router();
import userController from "../controllers/user.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";
import { registerUserValidator } from "../middlewares/user/validations/registerValidation.middleware.js";
import { loginUserValidator } from "../middlewares/user/validations/loginValidation.middleware.js";
import { updateUserValidator } from "../middlewares/user/validations/updateUserValidation.middleware.js";
import { deleteUserValidator } from "../middlewares/user/validations/deleteUserValidation.middleware.js";
import { handleValidationResult } from "../middlewares/user/validations/validationResult.middleware.js";
import { promoteAdminValidator } from "../middlewares/user/validations/promoteAdminValidation.js";

userRouter
  .route("/register")
  .post(registerUserValidator, handleValidationResult, userController.register);

userRouter
  .route("/login")
  .post(loginUserValidator, handleValidationResult, userController.login);

userRouter.route("/profile").get(authUser, userController.getProfile);

userRouter
  .route("/:id")
  .put(updateUserValidator, handleValidationResult, authUser, userController.update)
  .delete(deleteUserValidator, handleValidationResult, authUser, userController.delete);

userRouter
  .route("/promote/:id")
  .put(
    promoteAdminValidator,
    handleValidationResult,
    authUser,
    userController.promoteSelfToAdmin,
  );

userRouter.route("/uptime").head(userController.uptime);

export default userRouter;
