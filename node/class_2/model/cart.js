import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},
    quantity:{
        type:Number,
        required:true,
        min:1
    },
    price:{
        type:Number,
        required:true
    },
   
})
const cartSchema = mongoose.Schema({

    userId :{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    items:[cartItemSchema],
    totalPrice : {
        type:Number,
        default:0
    }
})

export default  cartSchema;