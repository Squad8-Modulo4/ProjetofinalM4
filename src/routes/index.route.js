import { Router } from "express";
import { actorRoute } from "./actor.route.js";

const routes = Router();

routes.use(actorRoute);

export { routes }