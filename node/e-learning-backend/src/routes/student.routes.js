import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get(
  "/courses",
  protect,
  authorizeRoles("student"),
  (req, res) => {
    res.json({ message: "Student can view enrolled courses" });
  }
);

export default router;
