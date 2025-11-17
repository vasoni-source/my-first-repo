import { Router } from "express";
import { addToWishlist, getWishlist, removeProductFromWishlist } from "../controller/wishlistController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = Router();

router.get('/',verifyToken,getWishlist)
router.post('/',verifyToken,addToWishlist)
router.delete('/',verifyToken,removeProductFromWishlist)
export default router;