import { json } from "sequelize";
import {GenreEntity} from "../entities/Genre.entity.js";
import { ERRORS, SUCESS } from "../shared/messages.js";
const createGenre = async (rec,res)=>{
    try{
    await GenreEntity.sync()
    const {name} = rec.body
    const createGenre = await GenreEntity.create({
            name
    })
    return res.status(201).json({createGenre})
    }
    catch{
    return res.status(404).json({ERRORS})
    }

}
