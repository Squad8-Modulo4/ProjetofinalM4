import { GenreEntity } from "../entities/Genre.entity.js";
import { NotFoundError } from "../helpers/error/apiErrors.js";

class GenreService {
  async createGenreService(name) {
    await GenreEntity.sync();
    const newGenre = await GenreEntity.create({ name });
    return newGenre;
  }

  async getAllGenreService() {
    const genres = GenreEntity.findAll();
    return genres;
  }

  async updateGenreService(id, name) {
    const genreId = await GenreEntity.findByPk(id);
    if (!genreId) {
      throw new NotFoundError("Gênero não encontrado.");
    }
    await GenreEntity.update(
      { name: name },
      {
        where: {
          id,
        },
      },
    );
    const messageUpdate = await GenreEntity.findByPk(id);
    return messageUpdate;
  }

  async deleteGenreService(id) {
    const genreId = await GenreEntity.findByPk(id);
    if (!genreId) {
      throw new NotFoundError("Gênero não encontrado.");
    }
    await GenreEntity.destroy({
      where: {
        id,
      },
    });
    return `Deletado com sucesso!`;
  }
}
export { GenreService };
