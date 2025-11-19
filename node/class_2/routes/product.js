import { Router } from "express";
import {
  getAllProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  updateProductField,
  searchProduct,
  filterProductsByCategory,
} from "../controller/index.js";
import verifySeller from "../middleware/sellerValidation/verifySeller.js";
import verifyToken from "../middleware/authMiddleware.js";
import verifySellerProduct from "../middleware/sellerValidation/verifySellerProduct.js";
import verifyDeletionAcces from "../middleware/sellerValidation/verifyDeletionAccess.js";
import upload from "../config/multerConfig.js";
const router = Router();


router.get("/search",searchProduct);
router.get("/filter_category",filterProductsByCategory)
router.get("/:id", getProductById);


// router.post("/", addProduct);
router.post("/",verifyToken,verifySeller,upload.single('image'),addProduct)
router.put("/:id",verifyToken,verifySellerProduct,upload.single('image'), updateProduct);
router.patch("/:id",verifyToken,verifySellerProduct,upload.single('image'), updateProductField);
router.delete("/:id",verifyToken,verifyDeletionAcces, deleteProduct);
router.get("/", getAllProducts);
export default router;
