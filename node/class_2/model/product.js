import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   category: {
    type: String,
    required: true,
  },
   brand: {
    type: String,
    required: true,
  },
   price: {
    type: Number,
    required: true,
  },
   stock: {
    type: Number,
    required: true,
  },
   rating: {
    type: Number,
    required: true,
    default:0,
  },
   description: {
    type: String,
    required: true,
  },
   images: {
    type: [String],
    required: true,
  },
  createdAt:{
    type:Date,
    default: Date.now
  }

});

export default mongoose.model("Product", productSchema);
