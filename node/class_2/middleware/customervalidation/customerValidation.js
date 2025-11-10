import userSchema from "../../model/user.js";
import mongoose from "mongoose";
const User = mongoose.model("User", userSchema);
const verifyCustomer =  (req, res, next) => {
    console.log("comes in verifyCustomer")
  try {
    console.log("role of user from verifycustomer",req.user.role)
    if (req.user.role === "admin" || req.user.role ==="seller") {
      return res.status(403).json({
        message: "Only customers are allowed to place order",
      });
    } 
      next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default verifyCustomer;