import Course from "../models/course.model.js";

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.error("Create course error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllCourses = async (req, res) => {
  const courses = await Course.find().populate(
    "createdBy",
    "name email role"
  );
  res.json(courses);
};

export const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id).populate(
    "createdBy",
    "name email"
  );

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  if (
    req.user.role === "instructor" &&
    course.createdBy.toString() !== req.user.id
  ) {
    return res.status(403).json({ message: "Not allowed" });
  }

  Object.assign(course, req.body);
  await course.save();

  res.json({ message: "Course updated successfully", course });
};

export const deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  if (
    req.user.role === "instructor" &&
    course.createdBy.toString() !== req.user.id
  ) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await course.deleteOne();
  res.json({ message: "Course deleted successfully" });
};
