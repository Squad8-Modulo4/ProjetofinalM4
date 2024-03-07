import { MovieService } from "../services/movie.service.js";
import { SUCCESS } from "../shared/messages.js";

const instanceMovieService = new MovieService();

const createMovie = async (req, res) => {
  const { title, synopsis, release_year, rating, id_director, id_genre } = req.body;
  const newMovie = await instanceMovieService.creatMoviesService(
    title,
    synopsis,
    release_year,
    rating,
    id_director,
    id_genre,
  );
  res.status(201).json({
    message: `Filme ${SUCCESS.CREATED}`,
    newMovie,
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
  // const { newSynopsis } = req.body;
  // console.log(newSynopsis);
  const movieUpdate = await instanceMovieService.updateMovieService(id, req);
  res.json({ movieUpdate });
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  await instanceMovieService.deleteMovieService(id);
  res.json({ message: `Filme ${SUCCESS.DELETED}` });
};

export { createMovie, getAllMovies, getMoviesByTitle, updateMovie, deleteMovie };
