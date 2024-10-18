import { Router } from "express";
import {taskRouter} from "../api/task/taskRouter.js";
import userRouter from "../api/user/userRouter.js";

 
const applicationRouter = Router()

applicationRouter.use("/task",taskRouter)
applicationRouter.use("/user",userRouter)



export default applicationRouter