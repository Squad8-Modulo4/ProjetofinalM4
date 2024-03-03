import { Router } from "express";
import { movieRoute } from "./movie.route.js";
const routes = Router();

routes.use(movieRoute)

export { routes }