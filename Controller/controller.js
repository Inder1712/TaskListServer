import taskModel from "../database/modals/Tasks.js"


export const AddTasks=async(req,res)=>{
    try {
      await  taskModel.create(req.body)
        res.json("Task created successfully")
    } catch (error) {
        console.log(error);
        res.json(error)
        
    }
}
export const GetTasks=async(req,res)=>{
    try {
       const tasks= await taskModel.find({accountId:req.body.accountId})
       
       res.json(tasks)
    } catch (error) {
        console.log(error);
        res.json("Error in GetTasks")
    }
}

export const updateTask = async (req, res) => {
    try {
        const taskId = req.body._id;
       
        const task = await taskModel.findByIdAndUpdate(taskId);
        task.star = !task.star;
        await task.save();
        res.json("Task updated successfully");
    } catch (error) {
        console.log("Error in updateTask", error);
        res.json("Error in updateTask");
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(req.body._id);
    
        res.json("Task deleted successfully")
    } catch (error) {
        console.log("Error in deleteTask", error);
        res.json("Error in deleteTask");
    }
}
