import { Router } from "express";
import { movieRoute } from "./movie.route.js";
import { actorRoute } from "./actor.route.js";
import { directorRoute } from "./director.routes.js";
import { genreRouter } from "./genre.route.js";
import { userRoute } from "../routes/user.route.js";

const routes = Router();

routes.use(actorRoute)
routes.use(movieRoute)
routes.use(genreRouter)
routes.use(directorRoute);
routes.use(userRoute);

export { routes }