import { Router } from "express";
import {
  createGenre,
  getAllGeners,
  updateGenre,
  deleteGenre,
} from "../controllers/genre.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";
import { isAdmin } from "../middlewares/admin/authAdmin.middleware.js";

const genreRouter = Router();

genreRouter.post("/new-genre", authUser, isAdmin, createGenre);
genreRouter.get("/show-genres", authUser, getAllGeners);
genreRouter.patch("/name-update/:id", authUser, isAdmin, updateGenre);
genreRouter.delete("/delete-genre/:id", authUser, isAdmin, deleteGenre);

export { genreRouter };
