import express from "express"
import { AddTasks, completeTask,deleteTask, GetTasks, updateTask } from "../Controller/controller.js"

const route=express.Router()

route.post("/addTask",AddTasks)
route.post("/getTasks",GetTasks)
route.put("/updateTask",updateTask)
route.put("/completeTask",completeTask)
route.post("/deleteTask",deleteTask)


export default route