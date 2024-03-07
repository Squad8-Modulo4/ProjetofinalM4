import { MovieEntity } from "../entities/Movie.entity.js";
import { NotFoundError } from "../helpers/error/apiErrors.js";

class MovieService {
  async creatMoviesService(title, synopsis, release_year, rating, id_director, id_genre) {
    await MovieEntity.sync();
    const newMovie = await MovieEntity.create({
      title,
      synopsis,
      release_year,
      rating,
      id_director,
      id_genre,
    });
    return newMovie;
  }

  async getAllMoviesService() {
    const movies = await MovieEntity.findAll();
    return movies;
  }

  async getMoviesByTitleService(title) {
    const movieTitle = await MovieEntity.findAll({
      where: {
        title,
      },
    });
    if (!movieTitle) {
      throw new NotFoundError("Filme não encontrado.");
    }
    return movieTitle;
  }

  async updateMovieService(id, newSynopsis) {
    const movieId = await MovieEntity.findByPk(id);
    if (!movieId) {
      throw new NotFoundError("Filme não encontrado.");
    }
    await MovieEntity.update(
      { synopsis: newSynopsis },
      {
        where: {
          id,
        },
      },
    );
    const messageUpdate = await MovieEntity.findByPk(id);
    return messageUpdate;
  }

  async deleteMovieService(id) {
    const movieId = await MovieEntity.findByPk(id);
    if (!movieId) {
      throw new NotFoundError("Filme não encontrado.");
    }
    await MovieEntity.destroy({
      where: {
        id,
      },
    });
    return "Filme deletado com sucesso";
  }
}

export { MovieService };
