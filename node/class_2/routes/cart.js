import { Router } from "express";
import { addToCart,getCart ,removeProductFromCart} from "../controller/cartController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = Router();

router.get('/',verifyToken,getCart)
router.post('/',verifyToken,addToCart)
router.delete('/',verifyToken,removeProductFromCart)
export default router;