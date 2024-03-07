import { Router } from "express";
import { movieRoute } from "./movie.routes.js";
import { actorRoute } from "./actor.routes.js";
import { directorRoute } from "./director.routes.js";
import { genreRouter } from "./genre.routes.js";
import userRoutes from "./user.routes.js";
import adminRoutes from "./admin.routes.js";

const routes = Router();

routes.use(actorRoute);
routes.use(movieRoute);
routes.use(genreRouter);
routes.use("/user", userRoutes);
routes.use("/admin", adminRoutes);
routes.use(directorRoute);

export { routes };
