import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);

router.post("/", protect, authorizeRoles("instructor", "admin"), createCourse);

router.put(
  "/:id",
  protect,
  authorizeRoles("instructor", "admin"),
  updateCourse
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("instructor", "admin"),
  deleteCourse
);

export default router;
