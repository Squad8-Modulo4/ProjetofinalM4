import express from "express";
const adminRouter = express.Router();
import adminController from "../controllers/admin.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";
import { isAdmin } from "../middlewares/admin/authAdmin.middleware.js";
import { promoteAdminValidator } from "../middlewares/user/validations/promoteAdminValidation.js";
import { handleValidationResult } from "../middlewares/user/validations/validationResult.middleware.js";

adminRouter.route("/").get(authUser, isAdmin, adminController.getAllUsers);

adminRouter
  .route("/:id")
  .delete(authUser, isAdmin, adminController.deleteUsers);

adminRouter
  .route("/promote/:id")
  .put(
    promoteAdminValidator,
    handleValidationResult,
    authUser,
    isAdmin,
    adminController.promoteUsersToAdmin,
  );

export default adminRouter;
