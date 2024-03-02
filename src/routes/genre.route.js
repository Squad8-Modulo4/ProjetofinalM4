
import { Router } from "express" ;
import {createGenre, getAllGeners,updateGenre,deleteGenre } from "../controllers/genre.controller.js";

const  genreRouter = Router()

genreRouter.post("/new-genre", createGenre);
genreRouter.get("/show-genres", getAllGeners);
genreRouter.patch("/name-update/:id", updateGenre);
genreRouter.delete("/delete-genre/:id",deleteGenre);


export {genreRouter}
