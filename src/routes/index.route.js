import { Router } from "express";
import { actorRoute } from "./actor.route.js";
import { directorRoute } from "./director.routes.js";
const routes = Router();

routes.use(actorRoute);
routes.use(directorRoute);
export { routes }