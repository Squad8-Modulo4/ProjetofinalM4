import { Router } from "express";
import { 
    createDirector,
    getAllDirectors,
    getDirectorByName,
    getDirectorByID,
    updateNameDirector,
    updateNationalityDirector,
    updateDateOfBirthDirector,
    deleteDirector
} from "../controllers/director.controller.js";

const directorRoute = Router();

directorRoute.post("/new-director", createDirector);
directorRoute.get("/all-directors", getAllDirectors);
directorRoute.get("/director-find-name", getDirectorByName);
directorRoute.get("/director-find-id/:id", getDirectorByID);
directorRoute.patch("/director-updateName/:id", updateNameDirector);
directorRoute.patch("/director-updateNationality/:id", updateNationalityDirector);
directorRoute.patch("/director-updateDOB/:id", updateDateOfBirthDirector)
directorRoute.delete("/director-deleteDirector/:id", deleteDirector);

export { directorRoute };