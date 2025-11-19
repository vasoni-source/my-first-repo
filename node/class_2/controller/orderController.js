import Order from "../model/order.js";
import Product from "../model/product.js";

export const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod } = req.body;
    console.log("orderitems", orderItems);
    console.log("shippingAddress", shippingAddress);
    console.log("paymentMethod", paymentMethod);

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items provided" });
    }

    let totalAmount = 0;
    for (const item of orderItems) {
      // const product = await Product.findById(item.productId._id);
      const product = await Product.findById(item.productId);

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
      console.log("product", product);
      totalAmount += product.price * item.quantity;
      product.stock = product.stock - item.quantity;
      await product.save();
    }
    // const formattedItems = orderItems.map((item) => ({
    //   product: item.productId._id,
    //   quantity: item.quantity,
    //   price: item.price,
    // }));
    const formattedItems = orderItems.map((item) => ({
      product: item.productId, // NOT item.productId._id
      quantity: item.quantity,
      price: item.price,
    }));

    const newOrder = new Order({
      user: req.user._id,
      orderItems: formattedItems,
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

export const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        user: req.user._id,
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
      },
      { new: true }
    );
    if (!order) {
      res.status(400).send("order not found");
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const order = await Order.findById(orderId);
    if (!order) {
      res.status(400).send("order not found");
    }
    for (const item of order.orderItems) {
      const product = await Product.findById(item.product);

      if (product) {
        product.stock = product.stock + item.quantity;
        await product.save();
      }
    }
    await Order.findByIdAndDelete(orderId);
    const orders = await Order.find({ user: req.user._id });

    //  const order = await Order.findByIdAndDelete(orderId);

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      orders,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getOrdersBySellerId = async (req, res) => {
  try {
    const sellerId = req.user._id;
    const sellerProducts = await Product.find({ seller: sellerId }).select(
      "_id"
    );
    console.log("sellers products", sellerProducts);
    if (sellerProducts.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this seller" });
    }
    const productIds = sellerProducts.map((p) => p._id);
    const orders = await Order.find({
      "orderItems.product": { $in: productIds },
    })
      .populate("user", "name email")
      .populate("orderItems.product", "name price brand category seller");
    if (orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this seller's products" });
    }

    res.status(200).json({
      count: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getOrdersByUSerId = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId });
    console.log("all orders by user", orders);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
