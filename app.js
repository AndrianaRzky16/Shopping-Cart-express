import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";


dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

export default app;
