import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from './routes/userRoutes.js'


const app = express();
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

// MongoDB connectionz
mongoose.connect(MONGOURL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  })
  .catch((err) => console.log("DB error:", err));
app.use("/api/user", route); 