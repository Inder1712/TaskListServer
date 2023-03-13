import mongoose from "mongoose";

const schema=mongoose.Schema({
    accountId:{
        type:String
    },
    taskName:{
        type:String
    },
    details:{
        type:String
    },
    star:{
        type:Boolean
    },
    complete:{
        type:Boolean
    },
    listId:{
        type:String
    },
    date:{
        type:String
    }
},{
    timestamps:true
})

const taskModel=mongoose.model("tasks",schema)

export default taskModel