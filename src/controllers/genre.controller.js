
import {GenreEntity} from "../entities/Genre.entity.js";
import {ERRORS, SUCESS} from "../shared/messages.js";
const createGenre = async (req,res)=>{
    try{
    await GenreEntity.sync()
    const {name} = req.body
    const createGenre = await GenreEntity.create({
            name
    });
    return  res.status(201).json({message:`Genênero ${SUCESS.CREATED}`, createGenre, });
    }
    catch(error){
    return  res.status(500).json({message:error})
    }
}
const getAllGeners = async(req,res)=> {
    try {
        const geners= await GenreEntity.findAll()
        return  res.json({geners});

    } catch (error){
        return  res.status(500).json({ message: error });
    }
}

const updateGenre = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name} = req.body;
        const genreId =   await  GenreEntity.findByPk();
        if(!genreId){
            res.json({ message: `Genre ${ERRORS.NOT_FOUND}` });
            await  GenreEntity.update( {name} ,{
                where: {
                    id
                }
            });


        }
    }catch (error){
       return  res.status(500).json({ message: error });
    }
}
const deleteGenre = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name} = req.body;
        const genreId =   await  GenreEntity.findByPk();
        if(!genreId){
            res.json({ message: `Genre ${ERRORS.NOT_FOUND}` });
            await  GenreEntity.destroy( {name:name} ,{
                where: {
                    id
                }
            });


        }
    }catch (error){
        return  res.status(500).json({ message: error });
    }
}
export {createGenre,getAllGeners, updateGenre,deleteGenre}

