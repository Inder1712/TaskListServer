import mongoose from "mongoose";

const Connection= async()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Tasks")
        console.log("Connected to the database");
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection;