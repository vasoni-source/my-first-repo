import Order from "../../model/order.js";

const getAllOrdersforAdmin = async(req,res)=>{
     try {
    const allOrders = await Order.find({});
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

export {getAllOrdersforAdmin,getOrderesByUserId}