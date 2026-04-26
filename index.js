import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import dotenv from "dotenv";
dotenv.config();

import projectsRoute from "./Routers/projectsRoute.js";
import commentRoute from "./Routers/commentRoute.js";
import milestonesRoute from "./Routers/milestoneRoute.js";
import futureGoalsRoute from "./Routers/futureGoalsRoute.js";

app.use(express.json())

app.use(cors({
  origin: process.env.REACT_FRONTEND_URL, 
  credentials: true,              
}));

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(()=> console.log("connected to mongodb"))
.catch(err => console.log(err))

app.post("/",(req,res)=>{
    res.json("Hello Welcome To backend !!");
})

app.use("/api" ,projectsRoute);
app.use("/api" ,commentRoute);
app.use("/api", milestonesRoute);
app.use("/api", futureGoalsRoute);


app.listen(8080, () => {
    console.log("server is running on port 8080");
})