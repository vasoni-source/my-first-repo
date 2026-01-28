import Enrollment from "../models/enrollment.model.js";
import Course from "../models/course.model.js";

export const canAccessCourse = async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  if (course.freeCourse) {
    return next();
  }

  
  const enrolled = await Enrollment.findOne({
    user: req.user.id,
    course: course._id,
  });

  if (!enrolled) {
    return res.status(403).json({
      message: "Enroll in the course to access content",
    });
  }

  next();
};
