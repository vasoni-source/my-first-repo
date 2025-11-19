import product from "../../model/product.js";
const verifySellerProduct = async (req, res, next) => {
    console.log("comes in verifySellerProduct")
  try {
    const productId = req.params.id;
    const productItem = await  product.findById(productId)
    console.log("product from verifysellerproduct",productItem)
    if (req.user._id.toString() !== productItem.seller.toString()) {
        console.log("userId",req.user._id)
        console.log("sellerId from product",productItem.seller)
      return res.status(403).json({
        message: "The seller is only allowed to change or delete its own products",
      });
    } 
      next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default verifySellerProduct;