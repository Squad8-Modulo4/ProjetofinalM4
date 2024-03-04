import express from "express";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.route.js";
import dontenv from 'dotenv';
dontenv.config();

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando na porta ${port}`);
})
