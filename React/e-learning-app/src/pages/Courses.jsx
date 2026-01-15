import React, { useEffect, useState } from "react";
import { BookOpen, Clock, Users, Star, Filter,Eye } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, fetchCourseDetail } from "../redux/thunk/coursesThunk";
import { enrollment, myEnrollemnts } from "../redux/thunk/enrollmentThunk";
import { useNavigate } from "react-router-dom";
export default function Courses() {
  const [filter, setFilter] = useState("all");
  const courses = useSelector((state) => state.course.courses);
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const enrollments = useSelector((state) => state.enrollment.enrollments);
  console.log("enrollemnts", enrollments);
  console.log("login status", isLogin);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  // const switchToCourseDEtailPage = (id)=>{
  //   navigator(`/courses/${id}`);
  //   dispatch(fetchCourseDetail(id));
  // }
  useEffect(() => {
  dispatch(fetchCourses());

  if (isLogin) {
    dispatch(myEnrollemnts());
  }
}, [dispatch, isLogin]);

  const isEnrolled = (courseId) =>
  enrollments.some((e) => e.course._id === courseId);
  const handleCourseAction = async (course) => {
  // FREE COURSE
  if (course.freeCourse) {
    navigator(`/courses/${course._id}`);
    dispatch(fetchCourseDetail(course._id));
    return;
  }

  // NOT LOGGED IN
  if (!isLogin) {
    navigator("/auth");
    return;
  }

  // ALREADY ENROLLED
  if (isEnrolled(course._id)) {
    navigator(`/courses/${course._id}`);
    dispatch(fetchCourseDetail(course._id));
    return;
  }

  // NOT ENROLLED → ENROLL FIRST
  const result = await dispatch(enrollment(course._id));

  if (enrollment.fulfilled.match(result)) {
    await dispatch(myEnrollemnts());

    navigator(`/courses/${course._id}`);
    dispatch(fetchCourseDetail(course._id));
  }
};


  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  console.log("courses from courses", courses);

  const filteredCourses = courses.filter((course) => {
    if (filter === "free") return course.freeCourse === true;
    if (filter === "paid") return course.freeCourse === false;
    return true;
  });
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Explore Courses</h1>
          <p className="mt-2 text-gray-400">
            Enhance your skills with our expert-led courses
          </p>
        </div>
      </header>
    

      {/* Filter Bar */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setFilter("free")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "free"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Free
            </button>
            <button
              onClick={() => setFilter("paid")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "paid"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Paid
            </button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-blue-900/20 group"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.imageUrl}
                  alt={course.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.freeCourse === true
                        ? "bg-green-600 text-white"
                        : "bg-purple-600 text-white"
                    }`}
                  >
                    {course.freeCourse === true ? "FREE" : course.price.amount}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-600">•</span>
                  <span className="text-xs text-gray-400">{course.level}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {course.name}
                </h3>

                {/* Course Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-medium">
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.studentsEnrolled.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Enroll/Start Learning Button */}
                <button
                  onClick={() => handleCourseAction(course)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  {/* {course.freeCourse ? "Start Learning" : "Enroll Now"} */}
                  {course.freeCourse
                    ? "Start Learning"
                    : !isLogin
                    ? "Login to Enroll"
                    : isEnrolled(course._id)
                    ? "Explore Course"
                    : "Enroll Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
