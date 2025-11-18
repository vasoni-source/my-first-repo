import mongoose from "mongoose";

const wishlistItemSchema = mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
    },
    stock:{
        type:Number
    }
   
})
const wishlistSchema = mongoose.Schema({

    userId :{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    items:[wishlistItemSchema],
})

export default  wishlistSchema;