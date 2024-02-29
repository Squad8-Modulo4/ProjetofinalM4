import { Router } from "express";
import { actorRoute } from "./actor.route.js";
import {genreRouter} from "./genre.route.js";

const routes = Router();

routes.use(actorRoute);
routes.use("/genre",genreRouter);
export { routes }