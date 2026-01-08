import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { canAccessCourse } from "../middlewares/courseAccess.middleware.js";
import Course from "../models/course.model.js";
import {
  enrollInCourse,
  myEnrollments,

} from "../controllers/enrollment.controller.js";

const router = express.Router();

router.post("/:courseId", protect, enrollInCourse);
router.get("/my-courses", protect, myEnrollments);
router.get(
  "/:courseId/content",
  protect,
  canAccessCourse,
  async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    res.json(course.sections);
  }
);

export default router;
