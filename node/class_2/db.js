import mongoose from "mongoose";

const dbconnection = async()=>{
    try {
        console.log("mogourl: ",process.env.MONGO_URL)
        const conn = await  mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected",conn.connection.host);
    } catch (error) {
        console.error("Error :",error)
        process.exit();
    }
}
export default dbconnection;