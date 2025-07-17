import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Router } from "express";

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

//mongodb connection
mongoose.connect(MONGOURL).then(() => {
  console.log("Mongodb Connected Successfully");
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  })
}).catch((err)=>{
   console.log(err)
})
