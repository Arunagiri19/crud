import express from "express"
import {create,get, update, deleteUser} from "../controller/userController.js"


const route = express.Router();

route.post("/create",create);
route.get('/getallusers',get);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);

export default route;