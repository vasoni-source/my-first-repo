import Order from "../../model/order.js";
import mongoose from "mongoose";
import userSchema from "../../model/user.js";

const User = mongoose.model("User", userSchema);
const getAllOrdersforAdmin = async(req,res)=>{
     try {
    const allOrders = await Order.find({}).populate("user", "name email");;
    let totalRevenue = 0
    const countOfOrders = await Order.countDocuments();
    for(let i=0;i<allOrders.length-1;i++){
        totalRevenue = + totalRevenue + allOrders[i].totalAmount ||0
    }
    const averageOrderAmount = countOfOrders>0 ? totalRevenue/countOfOrders :0

    res.status(200).json({
        allOrders,totalRevenue,countOfOrders,averageOrderAmount
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const getOrderesByUserId = async(req,res)=>{
    const {user} = req.body;
    try {
        const ordersByUser = await Order.find({user});
        console.log("orders by user",ordersByUser)
        const ordersByUserCount = await Order.countDocuments({ user});
        res.status(200).json({ordersByUser,ordersByUserCount});
    } catch (error){
        res.status(400).json({ message: error.message });
    }
} 
const getOrdersPerUser = async (req, res) => {
    try {
      const result = await User.aggregate([
        {
          $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "user",
            as: "orders",
          },
        },
        {
          $project: {
            name: 1,
            email: 1,
            createdAt: 1,
            orderCount: { $size: "$orders" },
  
            // total sum of all order amounts
            totalOrderAmount: { 
              $sum: "$orders.totalAmount" 
            },
          },
        },
      ]);
  
      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching orders per user:", error);
      res.status(500).json({ message: error.message });
    }
  };
  

export {getAllOrdersforAdmin,getOrderesByUserId,getOrdersPerUser}