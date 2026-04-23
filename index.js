import express from "express";
import mongoose from "mongoose";
// const mongoose  = require("mongoose")
import cors from "cors";
// const cors = require("cors")

const app = express();

import dotenv from "dotenv";
dotenv.config();


// const projectsRoute = require("./Routers/projectsRoute");
import projectsRoute from "./Routers/projectsRoute.js";
// const commentRoute = require("./Routers/commentRoute");
import commentRoute from "./Routers/commentRoute.js";

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




app.listen(8080, () => {
    console.log("server is running on port 8080");
})