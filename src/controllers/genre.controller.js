
import {GenreEntity} from "../entities/Genre.entity.js";
import { SUCESS } from "../shared/messages.js";
const createGenre = async (rec,res)=>{
    try{
    await GenreEntity.sync()
    const {name} = rec.body
    const createGenre = await GenreEntity.create({
            name
    });
    res.status(201).json({message:`Genênero ${SUCESS.CREATED}`, createGenre, });
    }
    catch(error){
    res.status(500).json({message:error})
    }
}
const getAllGeners = async(req,res)=> {
    try {
        const geners= await GenreEntity.findAll()
        res.json({geners});

    } catch (error){
        res.status(500).json({ message: error });
    }
}
export {createGenre,getAllGeners}

