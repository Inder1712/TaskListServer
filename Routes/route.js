import express from "express"
import { AddTasks, deleteTask, GetTasks, updateTask } from "../Controller/controller.js"

const route=express.Router()

route.post("/addTask",AddTasks)
route.post("/getTasks",GetTasks)
route.put("/updateTask",updateTask)
route.post("/deleteTask",deleteTask)


export default route