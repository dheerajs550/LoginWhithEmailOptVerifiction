import mongoose from "mongoose";
import { connectionSrt } from "./dburl.js";
// import dotenv from "dotenv"


const DbCon = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb is connected")
    } catch (error) {
        console.log("mongodb connection erroe", error)
    }
    
}
export default DbCon