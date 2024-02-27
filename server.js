import express from "express";
import { testConnection } from "./database/connection.js";
import { routers } from "./routes/index.routes.js";
const app = express();
const port = 4000;

app.use(express.json());
app.use(routers)

app.listen(port, ()=> {
    testConnection()
    console.log("server running")
});