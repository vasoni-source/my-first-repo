import Course from "../models/course.model.js";
import Enrollment from "../models/enrollment.model.js";


export const enrollInCourse = async (req, res) => {
  const course = await Course.findById(req.params.courseId);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

 
  if (course.freeCourse) {
    return res.status(400).json({
      message: "Free courses do not require enrollment",
    });
  }

 
  const alreadyEnrolled = await Enrollment.findOne({
    user: req.user.id,
    course: course._id,
  });

  if (alreadyEnrolled) {
    return res.status(400).json({ message: "Already enrolled" });
  }

  const enrollment = await Enrollment.create({
    user: req.user.id,
    course: course._id,
  });

  res.status(201).json({
    message: "Enrolled successfully",
    enrollment,
  });
};


export const checkEnrollment = async (userId, courseId) => {
  return Enrollment.findOne({
    user: userId,
    course: courseId,
  });
};


export const myEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user.id })
    .populate("course");

  res.json(enrollments);
};
