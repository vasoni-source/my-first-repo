import { Router } from "express";
import {
  getAllProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  updateProductField,
} from "../controller/index.js";
import verifySeller from "../middleware/sellerValidation/verifySeller.js";
import verifyToken from "../middleware/authMiddleware.js";
import verifySellerProduct from "../middleware/sellerValidation/verifySellerProduct.js";
import verifyDeletionAcces from "../middleware/sellerValidation/verifyDeletionAccess.js";
import upload from "../config/multerConfig.js";
const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
// router.post("/", addProduct);
router.post("/",verifyToken,verifySeller,upload.single('image'),addProduct)
router.put("/:id",verifyToken,verifySellerProduct, updateProduct);
router.patch("/:id",verifyToken,verifySellerProduct, updateProductField);
router.delete("/:id",verifyToken,verifyDeletionAcces, deleteProduct);
export default router;
