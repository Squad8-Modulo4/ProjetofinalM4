import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);
const port = process.env.PORT;

app.listen(port, () => {
  testConnection();
  console.log(`Servidor rodando na porta ${port}`);
});
