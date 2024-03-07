import { Router } from "express";
import { movieRoute } from "./movie.route.js";
import { actorRoute } from "./actor.route.js";
import { directorRoute } from "./director.routes.js";
import { genreRouter } from "./genre.route.js";
import userRoutes from "./user.routes.js";
import adminRoutes from "./admin.routes.js";

const routes = Router();

routes.use(actorRoute)
routes.use(movieRoute)
routes.use(genreRouter)
routes.use(directorRoute);
routes.use(userRoutes);
routes.use("/admin", adminRoutes);

export { routes };
