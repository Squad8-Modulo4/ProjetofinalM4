import { MovieEntity } from "../entities/Movie.entity.js";
import { ERRORS, SUCCESS } from "../shared/message.js";

const createMovie = async (req, res) => {
    try {
        await MovieEntity.sync();
        const { title, synopsis, realease_year, rating, id_director, id_genre} = req.body;
        const newMovie = await MovieEntity.create({
            title, synopsis, realease_year, rating, id_director, id_genre
        })
        res
        .status(201)
        .json({
            message: `Filme ${SUCCESS.CREATED}`
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: error
        })
    }
}

const getAllMovies = async (req, res) => {
    try {
        const movies = await MovieEntity.findAll();
        res
        .json({movies})
    } catch (error) {
        res
        .status(500)
        .json({
            message: error
        })
    }
}

const getMoviesByTitle = async (req, res) => {
    try {
        const { title } = req.body;
        const movieTitle = await MovieEntity.findAll({
            where: {
                title
            }
        })
        res
        .json({movieTitle})
    } catch (error) {
        res
        .status(500)
        .json({
            message: error
        })
    }
}

const updateMovie = async (req, res) =>{
    try{
        const { id } = req.params;
        const { synopsis } = req.body;
        await MovieEntity.update({ synopsis: newSynopsis }, {
           where: {
            id
           } 
        })
        const messageUpdate = await MovieEntity.findByPk(id)
        res
        .json({messageUpdate})
    }
    catch(error){
        res
        .status(500)
        .json({
            message: error
        })
    
    }
}

const deleteMovie = async (req, res) =>{
    try {
        const { id } = req.params;
        await MovieEntity.destroy({
            where: {
                id
            }
        })
        res
        .json({message: `Filme ${SUCCESS.DELETED}`})
    } catch (error) {
        res
        .status(500)
        .json({
            message: error
        })
    
    }
}


export { createMovie, getAllMovies, getMoviesByTitle, updateMovie, deleteMovie }