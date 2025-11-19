import userSchema from "../../model/user.js";
import mongoose from "mongoose";
import Order from "../../model/order.js";
const User = mongoose.model("User", userSchema);

const getAllAcounts = async (req, res) => {
  // res.send('Getting all the user')
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getAllUsersAcounts = async(req,res)=>{
    try {
        const allAcounts = await User.find({});
        const allusers = await  allAcounts.filter((acount)=>acount.role==="user");
        res.status(200).json(allusers);
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
}
const getAllSellersAcount = async(req,res)=>{
     try {
        const allAcounts = await User.find({});
        const allSellers = await  allAcounts.filter((acount)=>acount.role==="seller");
        res.status(200).json(allSellers);
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
}
const getAllAdminAcounts = async(req,res)=>{
     try {
        const allAcounts = await User.find({});
        const allAdmins = await  allAcounts.filter((acount)=>acount.role==="admin");
        res.status(200).json(allAdmins);
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
}
const revenuePerSeller = async(req,res)=>{
  // const {sellerId} = req.body;
  const sellerId = req.user._id;
  try {
    const orders = await Order.find({}).populate({
      path:"orderItems.product",
      select:"seller price name quantity"
    });   
    console.log("orders",orders)
    let revenue=0;
    for (const order of orders) {
      for (const item of order.orderItems) {
        console.log("orderItems",item)
        if (item.product && item.product.seller === sellerId) {
          revenue += item.price * item.quantity;
        }
      }
    }
    res.status(200).json(revenue)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export {getAllAcounts,getAllUsersAcounts,getAllSellersAcount,getAllAdminAcounts,revenuePerSeller};