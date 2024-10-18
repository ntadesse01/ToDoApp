import { Router } from "express";
import userController from "./userController.js";

const userRouter  = Router()

userRouter.get("/:id",userController.getSingleUser)
userRouter.get("/",userController.getAllUseres)
userRouter.put("/:id",userController.updateUser)
userRouter.delete("/:id",userController.deleteUser)
userRouter.post("/login",userController.login)
userRouter.post("/",userController.registerUser)




export default userRouter