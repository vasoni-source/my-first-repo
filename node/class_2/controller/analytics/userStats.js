import userSchema from "../../model/user.js";
import mongoose from "mongoose";
import Order from "../../model/order.js";
import Product from "../../model/product.js";
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
        // const allAcounts = await User.find({});
        const allSellers = await User.find({role:"seller"})
        console.log("sellers",allSellers);
        // const allSellers = await  allAcounts.filter((acount)=>acount.role==="seller");
        res.status(200).json({allSellers});
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
}
// export const getAllSellersStats = async (req, res) => {
//   try {
//     const sellers = await User.aggregate([
//       { 
//         $match: { role: "seller" } 
//       },
//       {
//         $lookup: {
//           from: "products",
//           localField: "_id",
//           foreignField: "seller",
//           as: "products"
//         }
//       },
//       {
//         $lookup: {
//           from: "orders",
//           localField: "_id",
//           foreignField: "orderItems.product",
//           as: "orders"
//         }
//       },
//       {
//         $project: {
//           name: 1,
//           email: 1,
//           createdAt: 1,
//           products: { $size: "$products" },
//           revenue: {
//             $sum: {
//               $map: {
//                 input: "$orders",
//                 as: "order",
//                 in: { $sum: "$$order.totalAmount" }
//               }
//             }
//           },
          
//         }
//       }
//     ]);

//     res.status(200).json(sellers);

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
export const getAllSellersStats = async (req, res) => {
  try {
    // Step 1: Fetch all sellers
    const sellers = await User.find({ role: "seller" });

    // Step 2: Fetch all orders with product populated
    const orders = await Order.find({})
      .populate({
        path: "orderItems.product",
        select: "seller price rating name"
      });

    let finalData = [];

    for (const seller of sellers) {
      let revenue = 0;
      let orderCount = 0;
      let productCount = 0;
      let totalRating = 0;
      let ratingCount = 0;

      // Step 3: Count seller products
      const products = await Product.find({ seller: seller._id });
      productCount = products.length;

      // Calculate rating
      products.forEach((p) => {
        if (p.rating) {
          totalRating += p.rating;
          ratingCount++;
        }
      });

      // Step 4: Calculate revenue per seller (fixed)
      for (const order of orders) {
        let hasSellerProduct = false;

        for (const item of order.orderItems) {
          if (!item.product || !item.product.seller) continue; // skip null products

          if (String(item.product.seller) === String(seller._id)) {
            revenue += item.price * item.quantity;
            hasSellerProduct = true;
          }
        }

        if (hasSellerProduct) orderCount++;
      }

      const averageRating = ratingCount > 0 ? totalRating / ratingCount : 0;

      finalData.push({
        _id: seller._id,
        name: seller.name,
        email: seller.email,
        joined: seller.createdAt,
        products: productCount,
        rating: averageRating,
        revenue,
        orderCount
      });
    }

    res.status(200).json(finalData);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


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
    // console.log("orders",orders)
    let revenue=0;
    let orderCount = 0;
    for (const order of orders) {
      let orderHasSellerProduct = false;
      for (const item of order.orderItems) {
        console.log("orderItems--",item.product

        )
        // if (item.product && item.product.seller === sellerId) {
        //   console.log("inside loop")
        //   revenue += item.price * item.quantity;
        // }
         if (!item.product || !item.product.seller) {
          continue;  // skip this item
        }
         if (String(item.product.seller) === String(sellerId)) {
          revenue += item.price * item.quantity;
           orderHasSellerProduct = true;
        }
         if (orderHasSellerProduct) {
        orderCount++;
      }
     
      }
    }
     const averageOrderValue = orderCount === 0 ? 0 : revenue / orderCount;
    res.status(200).json({revenue,averageOrderValue})
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export {getAllAcounts,getAllUsersAcounts,getAllSellersAcount,getAllAdminAcounts,revenuePerSeller};