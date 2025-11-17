// import userSchema from "../model/user.js";
import mongoose from "mongoose";
import product from "../model/product.js";
import wishlistSchema from "../model/wishlist.js";
import userSchema from "../model/user.js";
const User = mongoose.model("User", userSchema);
const Wishlist = mongoose.model("Wishlist",wishlistSchema);
export const addToWishlist = async (req, res) => {
  const userId = req.user.id;
  const { productId} = req.body;
  try {
    let wishlist = await Wishlist.findOne({ userId });
    const productItem = await product.findById(productId);
    if (!productItem) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!wishlist) {
      wishlist = new Wishlist({ userId, items: [] });
    }
    const existingItemIndex = wishlist.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (existingItemIndex > -1) {
      return res.send("Item already in the wishlist")
    } else {
      wishlist.items.push({ productId, price: productItem.price ,imageUrl:productItem.imageUrl});
    }
    await wishlist.save();

    res.status(200).json({ message: "Product added to wishlist", wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.user.id }).populate(
      "items.productId",
      "name price imageUrl"
    );
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });
    res.json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeProductFromWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    console.log("Remove productId:", productId);

    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const itemIndex = wishlist.items.findIndex(
      item => item.productId.toString() === productId.toString()
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in wishlist" });
    }

    // remove item
    wishlist.items.splice(itemIndex, 1);

    // save updated cart
    await wishlist.save();

    // IMPORTANT: populate AFTER save, but DO NOT re-query incorrectly!
    const populatedCart = await wishlist.populate("items.productId");

    return res.status(200).json({
      message: "Product removed from wishlist",
      wishlist: populatedCart
    });

  } catch (error) {
    console.error("Remove from wishlist error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};