import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get(
  "/users",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Admin can manage users" });
  }
);

export default router;
