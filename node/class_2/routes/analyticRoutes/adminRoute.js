import { Router } from "express";
import { getAllAcounts, getAllAdminAcounts, getAllSellersAcount, getAllUsersAcounts, revenuePerSeller } from "../../controller/analytics/userStats.js";
import { getAllOrdersforAdmin, getOrderesByUserId } from "../../controller/analytics/order.js";
import { getBestSellerProducts, sellerWiseProduct } from "../../controller/analytics/product.js";
import verifyToken from ".././../middleware/authMiddleware.js"
// import { getAllAcounts } from "../../controller/analytics/userStats.js";
const router = Router();
router.get('/allAcounts',getAllAcounts);
router.get('/all_sellers',getAllSellersAcount);
router.get('/all_users',getAllUsersAcounts);
router.get('/all_admin',getAllAdminAcounts);
router.get('/all_orders',getAllOrdersforAdmin);
router.post('/orders_by_user',getOrderesByUserId);
router.get('/revenue_per_seller',verifyToken,revenuePerSeller);
router.get('/seller_products',verifyToken,sellerWiseProduct);
router.get('/best_seller_product',getBestSellerProducts)
export default router;