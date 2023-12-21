import express from "express";
import morgan from "morgan";
import routers from "./routers/index.js"
import cors from "cors";
import {connectDB} from "./mongo/connection/index.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json()); // Para convertir los req.body en json.
app.use (cors());
app.use (routers);

connectDB();

app.listen(3000, ()=>{
    console.log("Server is up and runing")
})