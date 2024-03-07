import { Router } from "express";
import {
  createGenre,
  getAllGeners,
  updateGenre,
  deleteGenre,
} from "../controllers/genre.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";

const genreRouter = Router();

genreRouter.post("/new-genre", authUser, createGenre);
genreRouter.get("/show-genres", authUser, getAllGeners);
genreRouter.patch("/name-update/:id", authUser, updateGenre);
genreRouter.delete("/delete-genre/:id", authUser, deleteGenre);

export { genreRouter };
