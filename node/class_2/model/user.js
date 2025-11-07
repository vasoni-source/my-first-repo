import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    role : {
        type:String,
        enum:['user','seller','admin'],
        default:'user',
        required:true
    },
    // sellerDetails:{
    //     storeName:String,
    //     products:[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}]
    // }
})
export default userSchema;
