
import {GenreService} from "../services/genre.service.js";
import {SUCESS} from "../shared/message.js";

const instanceGenreServices = new GenreService()


const createGenre = async (req,res)=>{
    const {name} = req.body
    const newGenre= await instanceGenreServices.createGenreService(name);
     res.status(201).json({message:`Genênero ${SUCESS.CREATED}`, newGenre, });
    }

const getAllGeners = async(req,res)=> {
        const geners= await instanceGenreServices.getAllGenreService()
         res.json({geners});
}

const updateGenre = async(req,res)=>{
        const {id} = req.params;
        const {name} = req.body;
        const nameUpdate = await instanceGenreServices.updateGenreService(id, name);
        res.json({nameUpdate});
    }
const deleteGenre = async(req,res)=>{
    const {id} = req.params;
    const nameUpdate = await instanceGenreServices.deleteGenreService(id);
    res.json({nameUpdate});
}
export {createGenre,getAllGeners, updateGenre,deleteGenre}

