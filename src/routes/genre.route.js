
import { Router } from "express" ;
import {createGenre,getAllGeners} from "../controllers/genre.controller.js";

const  genreRouter = Router()

genreRouter.post("/new-genre", createGenre)
genreRouter.get("/show-genres", getAllGeners)
export {genreRouter}
