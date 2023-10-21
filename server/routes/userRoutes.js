import { Router } from "express";
import { getAllUser, signUp, logIn } from "../controllers/userController.js";
//import getAllUser from "../controllers/userController.js";
const userRouter = Router();


userRouter.get("/",getAllUser);
userRouter.post("/signup", signUp);
userRouter.post("/login" , logIn);

export default  userRouter;