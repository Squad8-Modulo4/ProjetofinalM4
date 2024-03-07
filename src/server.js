import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes/index.route.js";
import { testConnection } from "./database/connection.js";
import { errorHandler } from "./middlewares/error/erro.middleware.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  testConnection();
  console.log(`Servidor rodando na porta ${port}`);
});
