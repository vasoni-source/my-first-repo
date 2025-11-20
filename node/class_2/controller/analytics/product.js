import userSchema from "../../model/user.js";
import mongoose from "mongoose";
import Order from "../../model/order.js";
import Product from "../../model/product.js";
const getAllProductsWithoutPagination = async (req, res) => {
  try {
    
    const products = await Product.find();
    res.status(200).json(products);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
 const getBestSellerProducts = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("orderItems.product");

    const productSalesMap = new Map();

    for (const order of orders) {
      for (const item of order.orderItems) {
        if (item.product) {
          const productId = item.product._id.toString();
          const soldQty = productSalesMap.get(productId) || 0;
          productSalesMap.set(productId, soldQty + item.quantity);
        }
      }
    }

    const sortedProducts = Array.from(productSalesMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    const topProductsIds = sortedProducts
      .slice(0, 5)
      .map(([productId]) => productId);

    const bestSellers = await Product.find({
      _id: { $in: topProductsIds },
    }).populate("seller", "name email");

    res.status(200).json({ count: bestSellers.length, bestSellers });
  } catch (error) {
    console.error("Error in best seller function:", error);
    res.status(500).json({ message: error.message });
  }
};

const sellerWiseProduct = async (req, res) => {
  // const { seller } = req.body;
  const seller = req.user._id;
  try {
    const products = await Product.find({ seller });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export { sellerWiseProduct,getBestSellerProducts,getAllProductsWithoutPagination };
