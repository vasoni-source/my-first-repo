// import userSchema from "../model/user.js";
import mongoose from "mongoose";
import product from "../model/product.js";
import cartSchema from "../model/cart.js";
import { CURSOR_FLAGS } from "mongodb";
// const User = mongoose.model("User", userSchema);
const Cart = mongoose.model("Cart", cartSchema);
export const addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    const productItem = await product.findById(productId);
    if (!productItem) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!cart) {
      cart = new Cart({ userId, items: [], totalPrice: 0 });
    }
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, price: productItem.price });
    }
    cart.totalPrice = cart.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "items.productId",
      "name price imageUrl"
    );
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const removeProductFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    console.log("Remove productId:", productId);

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId.toString()
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // remove item
    cart.items.splice(itemIndex, 1);

    // recalc total price
    cart.totalPrice = cart.items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    // save updated cart
    await cart.save();

    // IMPORTANT: populate AFTER save, but DO NOT re-query incorrectly!
    const populatedCart = await cart.populate("items.productId");

    return res.status(200).json({
      message: "Product removed from cart",
      cart: populatedCart
    });

  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// export const removeProductFromCart = async (req, res) => {
//   const userId = req.user.id;
//   // const productId = req.params.productId;
//   const {productId} = req.body;
//     console.log("product id ",productId.toString())
//   try {
//     const cart = await Cart.findOne({ userId });
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }
//     console.log("cart from remocveCArt",cart)
//     const itemIndex = cart.items.findIndex(
//       (item) => item.productId.toString() === productId.toString()
//     );
//     console.log("itemindex",itemIndex);
//     if (itemIndex === -1) {
//       return res.status(404).json({ message: "Product not found in cart" });
//     }
//     cart.items.splice(itemIndex, 1);
//     cart.totalPrice = cart.items.reduce(
//       (sum, item) => sum + item.quantity * item.price,
//       0
//     );
//     await cart.save();

//     res.status(200).json({ message: "Product removed from cart", cart });
//   } catch (error) {
//     console.error("Remove from cart error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
