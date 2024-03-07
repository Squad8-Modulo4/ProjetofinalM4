import { Router } from "express";
import {
  createDirector,
  getAllDirectors,
  getDirectorByName,
  getDirectorByID,
  updateNameDirector,
  updateNationalityDirector,
  updateDateOfBirthDirector,
  deleteDirector,
} from "../controllers/director.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";
import { isAdmin } from "../middlewares/admin/authAdmin.middleware.js";

const directorRoute = Router();

directorRoute.post("/new-director", authUser, isAdmin, createDirector);
directorRoute.get("/all-directors", authUser, getAllDirectors);
directorRoute.get("/director-find-name", authUser, getDirectorByName);
directorRoute.get("/director-find-id/:id", authUser, getDirectorByID);
directorRoute.patch("/director-updateName/:id", authUser, isAdmin, updateNameDirector);
directorRoute.patch(
  "/director-updateNationality/:id",
  authUser,
  isAdmin,
  updateNationalityDirector,
);
directorRoute.patch(
  "/director-updateDOB/:id",
  authUser,
  isAdmin,
  updateDateOfBirthDirector,
);
directorRoute.delete("/director-deleteDirector/:id", authUser, isAdmin, deleteDirector);

export { directorRoute };
