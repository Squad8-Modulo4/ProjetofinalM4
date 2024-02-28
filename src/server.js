import express from "express";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.route.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando na porta ${port}`)
})