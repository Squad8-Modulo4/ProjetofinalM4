import {GenreEntity} from "../entities/Genre.entity.js";




class GenreService {
    async createGenreService(name) {
        try {
            await GenreEntity.sync()
            const newGenre = await GenreEntity.create({name});
            return newGenre

        } catch (error) {
            return error
        }
    };

    async getAllGenreService() {
        try {
            const genres = GenreEntity.findAll();
            return genres

        } catch (error) {
            return error

        }

    };

    async updateGenreService(id, name) {
        try {
            const genreId = await GenreEntity.findByPk(id);
            if (!genreId) {
                return `Genêro  não encontrado`
            }
            await GenreEntity.update({name: name}, {
                where: {
                    id
                }
            });
            const messageUpdate = await GenreEntity.findByPk(id);
            return messageUpdate;

        } catch (error) {
            return error;
        }
    };

    async deleteGenreService(id){
        try {
            const genreId = await GenreEntity.findByPk(id);
            if (!genreId) {
                return `Genêro  não encontrado`
            }
            await GenreEntity.destroy({
                where: {
                    id
                }
            });
            return `Deletado com sucesso!`
        } catch (error) {
            return error;
        }

    }
}
export {GenreService}


