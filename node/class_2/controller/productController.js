import mongoose from "mongoose";
import Product from "../model/product.js";
import userSchema from "../model/user.js";
import upload from "../config/multerConfig.js";
import cloudinary from "../config/cloudinaryConfig.js";
const User = mongoose.model("User", userSchema);
const getAllProducts = async (req, res) => {
  console.log("getttttinggg")
  try {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * limit;
    const total = await Product.countDocuments();
    const products = await Product.find().skip(startIndex).limit(limit);
    // const products = await product.find({});
    console.log("products", products);
    // res.status(200).json(products);
    res.status(200).json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      data: products,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const productItem = await Product.findById(id);
    res.status(200).json(productItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const addProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      {
        folder: "product_images",
      }
    );

    console.log("username form addfn", req.user);
    const newProduct = await new Product({
      name: req.body.name,
      category: req.body.category,
      brand: req.body.brand,
      price: req.body.price,
      stock: req.body.stock,
      rating: req.body.rating,
      description: req.body.description,
      // images: req.body.images,
      imageUrl:result.secure_url,
      cloudinaryId:result.public_id,
      // seller:req.user.name
      seller: req.user._id,
    });
    const savedProduct = await newProduct.save();
    console.log("saved product", savedProduct);
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productItem = await Product.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        category: req.body.category,
        brand: req.body.brand,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating,
        description: req.body.description,
        images: req.body.images,
      },
      { new: true }
    );
    if (!productItem) {
      res.status(400).send("product not found");
    }
    res.status(200).json(productItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updateProductField = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      { $set: updates },
      { new: true }
    );
    if (!updates) {
      res.status(400).send("product not found");
    }
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productItem = await Product.findByIdAndDelete(id);
    if (!productItem) {
      res.status(400).send("product not found");
    }
    res.status(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export {
  getAllProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  updateProductField,
};
