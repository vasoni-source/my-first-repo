import { Router } from "express";
import { getAllAcounts, getAllAdminAcounts, getAllSellersAcount, getAllSellersStats, getAllUsersAcounts, revenuePerSeller } from "../../controller/analytics/userStats.js";
import { getAllOrdersforAdmin, getOrderesByUserId ,getOrdersPerUser} from "../../controller/analytics/order.js";
import { getAllProductsWithoutPagination, getBestSellerProducts, sellerWiseProduct } from "../../controller/analytics/product.js";
import verifyToken from ".././../middleware/authMiddleware.js"
import verifyAdmin from "../../middleware/adminValidation/adminValidation.js";
// import { getAllAcounts } from "../../controller/analytics/userStats.js";
const router = Router();
router.get("/all/products",getAllProductsWithoutPagination);
router.get('/allAcounts',getAllAcounts);
router.get('/all_sellers',getAllSellersAcount);
router.get('/all_users',getAllUsersAcounts);
router.get('/all_admin',getAllAdminAcounts);
router.get('/all_orders',getAllOrdersforAdmin);
router.post('/orders_by_user',getOrderesByUserId);
router.get('/orders_per_user',getOrdersPerUser);
router.get('/revenue_per_seller',verifyToken,revenuePerSeller);
router.get('/sellers_stats',verifyToken,verifyAdmin,getAllSellersStats);
router.get('/seller_products',verifyToken,sellerWiseProduct);
router.get('/best_seller_product',getBestSellerProducts)
export default router;