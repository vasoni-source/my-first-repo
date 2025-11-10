import { Router } from "express";
import { createOrder, deleteOrder, getOrdersByUSerId,updateOrder } from "../controller/orderController.js";
import { getAllOrders } from "../controller/orderController.js";
import { getOrdersBySellerId } from "../controller/orderController.js";
import verifyToken from "../middleware/authMiddleware.js";
import verifySeller from "../middleware/sellerValidation/verifySeller.js";
import verifyAdmin from "../middleware/adminValidation/adminValidation.js";
import verifyCustomer from "../middleware/customervalidation/customerValidation.js";
const router = Router();

router.post('/',verifyToken,verifyCustomer,createOrder);
router.get('/',verifyToken,verifyAdmin,getAllOrders);
router.put('/:orderId',verifyToken,updateOrder);
router.delete('/:orderId',verifyToken,deleteOrder)
router.get('/ordersByUser',verifyToken,getOrdersByUSerId);
router.get('/sellerOrders',verifyToken,verifySeller,getOrdersBySellerId);

export default router