import { Router } from "express";
import { getAllAcounts, getAllAdminAcounts, getAllSellersAcount, getAllUsersAcounts, revenuePerSeller } from "../../controller/analytics/userStats.js";
import { getAllOrdersforAdmin, getOrderesByUserId } from "../../controller/analytics/order.js";
import { getBestSellerProducts, sellerWiseProduct } from "../../controller/analytics/product.js";
// import { getAllAcounts } from "../../controller/analytics/userStats.js";
const router = Router();
router.get('/allAcounts',getAllAcounts);
router.get('/all_sellers',getAllSellersAcount);
router.get('/all_users',getAllUsersAcounts);
router.get('/all_admin',getAllAdminAcounts);
router.get('/all_orders',getAllOrdersforAdmin);
router.post('/orders_by_user',getOrderesByUserId);
router.post('/revenue_per_seller',revenuePerSeller);
router.post('/seller_products',sellerWiseProduct);
router.get('/best_seller_product',getBestSellerProducts)
export default router;