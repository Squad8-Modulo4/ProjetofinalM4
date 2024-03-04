import express from "express";

import dotenv from "dotenv";
import { routes } from "./routes/index.route.js";
import {testConnection} from "./database/connection.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    testConnection()
    console.log(`Servidor rodando na porta ${port}`)
})