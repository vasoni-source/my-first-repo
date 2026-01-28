import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post(
  "/courses",
  protect,
  authorizeRoles("instructor"),
  (req, res) => {
    res.json({ message: "Instructor can create courses" });
  }
);

export default router;
