import { Router } from "express";
import { createOrder } from "../controller/orderController.js";
import { getAllOrders } from "../controller/orderController.js";
import { getOrdersBySellerId } from "../controller/orderController.js";
import verifyToken from "../middleware/authMiddleware.js";
import verifySeller from "../middleware/sellerValidation/verifySeller.js";
import verifyAdmin from "../middleware/adminValidation/adminValidation.js";
const router = Router();

router.post('/',verifyToken,createOrder);
router.get('/',verifyToken,verifyAdmin,getAllOrders);
router.get('/random',verifyToken,verifySeller,getOrdersBySellerId)
export default router