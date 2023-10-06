import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import EventRoute from "./modules/events/event.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/event", EventRoute);

connectDB();
app.listen(5000, () => console.log(`Server running on port 5000`));
