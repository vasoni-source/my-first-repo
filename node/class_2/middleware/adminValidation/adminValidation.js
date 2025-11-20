
import mongoose from "mongoose";
const verifyAdmin = async (req, res, next) => {
    console.log("comes in verifyAdmin")
  try {
    // const userId = req.params.userId;
    // const user = await User.findById(userId);

    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Only admins are allowed to view all stats",
      });
    } 
      next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default verifyAdmin;