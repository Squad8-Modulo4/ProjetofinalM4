import { Router } from "express";
import {
  createMovie,
  getAllMovies,
  getMoviesByTitle,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";
import { isAdmin } from "../middlewares/admin/authAdmin.middleware.js";
const movieRoute = Router();

movieRoute.post("/movie", authUser, isAdmin, createMovie);
movieRoute.get("/movies", authUser, getAllMovies);
movieRoute.get("/movies-title", authUser, getMoviesByTitle);
movieRoute.patch("/update-movie/:id", authUser, isAdmin, updateMovie);
movieRoute.delete("/delete-movie/:id", authUser, isAdmin, deleteMovie);

export { movieRoute };
