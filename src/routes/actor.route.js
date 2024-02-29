import { Router } from "express";
import {
    createActor,
    getAllActors,
    getActorById,
    getActorByName,
    updateFirstName,
    deleteActor
} from "../controllers/actor.controller.js";

const actorRoute = Router();

actorRoute.post("/new-actor", createActor);
actorRoute.get("/actors", getAllActors);
actorRoute.get("/actor-find-id/:id", getActorById);
actorRoute.get("/actor-find-name", getActorByName);
actorRoute.patch("/fist_name-update/:id", updateFirstName);
actorRoute.delete("/delete-actor/:id", deleteActor)

export { actorRoute }