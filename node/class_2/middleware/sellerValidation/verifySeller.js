import userSchema from "../../model/user.js";
import mongoose from "mongoose";
const User = mongoose.model("User", userSchema);
const verifySeller = async (req, res, next) => {
    console.log("comes in verifySeller")
  try {
    // const userId = req.params.userId;
    // const user = await User.findById(userId);

    if (req.user.role !== "seller") {
      return res.status(403).json({
        message: "Only sellers are allowed to create product",
      });
    } 
      next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default verifySeller;
