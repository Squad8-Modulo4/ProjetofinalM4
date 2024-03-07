import { Router } from "express";
import {
  createActor,
  getAllActors,
  getActorById,
  getActorByName,
  updateFirstName,
  deleteActor,
} from "../controllers/actor.controller.js";
import { authUser } from "../middlewares/user/auth/authUser.middleware.js";

const actorRoute = Router();

actorRoute.post("/new-actor", authUser, createActor);
actorRoute.get("/actors", authUser, getAllActors);
actorRoute.get("/actor-find-id/:id", authUser, getActorById);
actorRoute.get("/actor-find-name", authUser, getActorByName);
actorRoute.patch("/fist_name-update/:id", authUser, updateFirstName);
actorRoute.delete("/delete-actor/:id", authUser, deleteActor);

export { actorRoute };
