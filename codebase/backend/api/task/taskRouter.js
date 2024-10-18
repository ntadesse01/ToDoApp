import {Router} from "express"
import taskController from "./taskController.js"
 


const taskRouter = Router()

taskRouter.get("/:id",taskController.getSingleTask)
taskRouter.get("/",taskController.getAllTaskes)
taskRouter.put("/:id",taskController.updateTask)
taskRouter.delete("/:id",taskController.deleteTask)
taskRouter.post("/",taskController.registerTask)



export {taskRouter}