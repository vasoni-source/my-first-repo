import Order from "../model/order.js";
import Product from "../model/product.js";

export const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items provided" });
    }

    let totalAmount = 0;
    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product not found: ${item.product}` });
      }

      if (product.stock < item.quantity) {
        return res
          .status(400)
          .json({ message: `${product.name} is out of stock` });
      }

      totalAmount += product.price * item.quantity;
    }

    const newOrder = new Order({
      user: req.user._id,
      orderItems,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });

    const savedOrder = await newOrder.save();
    res
      .status(201)
      .json({ message: "Order created successfully", order: savedOrder });
  } catch (error) {
    console.error("Order creation failed:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getAllOrders = async (req, res) => {
  try {
    const order = await Order.find({});

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getOrdersBySellerId = async (req, res) => {
  try {
    const sellerId = req.user._id;
    const sellerProducts = await Product.find({ seller: sellerId }).select(
      "_id"
    );
    console.log("sellers products",sellerProducts)
    if (sellerProducts.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this seller" });
    }
    const productIds = sellerProducts.map((p)=>p._id);
    const orders = await Order.find({"orderItems.product":{$in:productIds}}).populate("user","name email").populate("orderItems.product", "name price brand category seller");
     if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this seller's products" });
    }

    res.status(200).json({
      count: orders.length,
      orders,
    });


  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
