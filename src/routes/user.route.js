import { Router } from "express";
import {
    createUser,
    getUserById,
    updateEmail,
    updatePassword,
    deleteUser
} from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.post("/new-user", createUser);
userRoute.get("/user-find-id/:id", getUserById);
userRoute.patch("/user-update-email/:id", updateEmail);
userRoute.patch("/user-update-password/:id", updatePassword);
userRoute.delete("/delete-user/:id", deleteUser);

export { userRoute }