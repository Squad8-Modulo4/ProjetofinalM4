import { MovieEntity } from "../entities/Movie.entity.js";

class MovieService {
  async creatMoviesService(
    title,
    synopsis,
    release_year,
    rating,
    id_director,
    id_genre
  ) {
    try {
      await MovieEntity.sync();
      const newMovie = await MovieEntity.create({
        title,
        synopsis,
        release_year,
        rating,
        id_director,
        id_genre
      });
      return newMovie;
    } catch (error) {
      return error;
    }
  }
  async getAllMoviesService() {
    try {
      const movies = await MovieEntity.findAll();
      return movies;
    } catch (error) {
      return error;
    }
  }

  async getMoviesByTitleService(title) {
    try {
      const movieTitle = await MovieEntity.findAll({
        where: {
          title,
        },
      });
      if (!movieTitle) {
        return "Filme não encontrado";
      }
      return movieTitle;
    } catch (error) {
      return error;
    }
  }
  async updateMovieService(id, synopsis) {
    try {
      const movieId = await MovieEntity.findByPk(id);
      if (!movieId) {
        return "Filme não encontrado";
      }
      await MovieEntity.update(
        { synopsis },
        {
          where: {
            id,
          },
        }
      );
      const messageUpdate = await MovieEntity.findByPk(id);
      return messageUpdate;
    } catch (error) {
      return error;
    }
  }

  async deleteMovieService(id) {
    try {
      const movieId = await MovieEntity.findByPk(id);
      if (!movieId) {
        return "Filme não encontrado";
      }
      await MovieEntity.destroy({
        where: {
          id,
        },
      });
      return "Filme deletado com sucesso";
    } catch (error) {
      return error;
    }
  }
}

export { MovieService };
