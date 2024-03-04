import { MovieService } from "../services/movie.service.js";
import { SUCCESS } from "../shared/message.js";

const instanceMovieService = new MovieService();

const createMovie = async (req, res) => {
  const { title, synopsis, release_year, rating, id_director, id_genre } = req.body;
  const newMovie = await instanceMovieService.creatMoviesService(
    title,
    synopsis,
    release_year,
    rating,
    id_director,
    id_genre
    );
  res.status(201).json({
    message: `Filme ${SUCCESS.CREATED}`, newMovie
  });
};

const getAllMovies = async (req, res) => {
  const movies = await instanceMovieService.getAllMoviesService();
  res.json({ movies });
};

const getMoviesByTitle = async (req, res) => {
  const { title } = req.body;
  const movieTitle = await instanceMovieService.getMoviesByTitleService(title);
  res.json({ movieTitle });
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { synopsis } = req.body;
  const movieUpdate = await instanceMovieService.updateSynopsisService(
    id,
    synopsis
  );
  res.json({ movieUpdate });
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    const movieDelete = await instanceMovieService.deleteMovieService(id)
    res.json({ message: `Filme ${SUCCESS.DELETED}`, movieDelete });
};

export {
  createMovie,
  getAllMovies,
  getMoviesByTitle,
  updateMovie,
  deleteMovie,
};
