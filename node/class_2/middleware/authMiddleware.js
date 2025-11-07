import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import userSchema from "../model/user.js";
const User = mongoose.model("User", userSchema);
const verifyToken = async (req, res, next) => {
   const authHeader = await req.header("Authorization");
    const token = authHeader.split(" ")[1];
  console.log(" verifyToken middleware triggered")
  console.log("token from middlware",token)
  try {
    if (!token) {
      return res.status(401).json({ error: "Access denied" });
    }
    console.log("Authorization header:", token);
    const decoded = jwt.verify(token, "vs");
    console.log("Token decoded successfully:", decoded);
    // req.userId = decoded.userId;
    const user = await User.findById(decoded.userId);
    console.log("user from verify",user)
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
export default verifyToken;

