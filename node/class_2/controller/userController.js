import mongoose from "mongoose";
import userSchema from "../model/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const User = mongoose.model("User", userSchema);
const getUser = async (req, res) => {
  // res.send('Getting all the user')
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// create all the remaining controllers

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPaasword = await bcrypt.hash(password,10)
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      password:hashedPaasword
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ massage: error.message });
  }
};
const loginUser = async(req,res)=>{
    try {
        const name = req.body.name;
    const password = req.body.password;
    const user = await User.findOne({name});
    if(!user){
        return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password,user.password);
    if(!passwordMatch){
        return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({userId :user._id},"vs",{expiresIn:"12h"});
    res.status(200).json({token});
    
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId,{name : req.body.name,
    email : req.body.email,
    age : req.body.age},{new:true});
    if (!user) {
      res.status(400).send("id is required");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ massage: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(400).send("id is required");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ massage: error.message });
  }
};
export { getUser, addUser, updateUser, deleteUser ,getUserById,loginUser};
