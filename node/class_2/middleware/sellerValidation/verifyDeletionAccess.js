import userSchema from "../../model/user.js";
import mongoose from "mongoose";
const User = mongoose.model("User", userSchema);
const verifyDeletionAcces =  (req, res, next) => {
    console.log("comes in verifyDeletionAccess")
  try {
    console.log("req.user from deletion",req.user)
    if (req.user.role !== "admin" && req.user.role !=="seller") {
      return res.status(403).json({
        message: "Only sellers and admins are allowed to delete the product",
      });
    } 
      next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default verifyDeletionAcces;
