import { Router } from "express";
import { createMovie, getAllMovies, getMoviesByTitle, updateMovie, deleteMovie } from "../controllers/movie.controller.js"
const movieRoute = Router();

movieRoute.post('/movie', createMovie)
movieRoute.get('/movies', getAllMovies)
movieRoute.get('/movies-title', getMoviesByTitle)
movieRoute.patch('/update-movie/:id', updateMovie)
movieRoute.delete('/delete-movie/:id', deleteMovie)

export { movieRoute }
