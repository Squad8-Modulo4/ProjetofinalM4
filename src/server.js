import express from "express";
import { testConnection } from "./database/connection.js";
import dotenv from "dotenv";
import { routes } from "./routes/index.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando na porta ${port}`)
})