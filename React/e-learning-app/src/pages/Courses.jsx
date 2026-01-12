import React, { useEffect, useState } from "react";
import { BookOpen, Clock, Users, Star, Filter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses,fetchCourseDetail } from "../redux/thunk/coursesThunk";
import { useNavigate } from "react-router-dom";
export default function Courses() {
  const [filter, setFilter] = useState("all");
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const switchToCourseDEtailPage = (id)=>{
    navigator(`/courses/${id}`);
    dispatch(fetchCourseDetail(id));
  }
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  console.log("courses from courses", courses);
  //     const courses = [
  //     {
  //       id: 1,
  //       title: 'Complete Web Development Bootcamp',
  //       instructor: 'Sarah Johnson',
  //       price: 'Free',
  //       freeCourse: true,
  //       rating: 4.8,
  //       students: 12500,
  //       duration: '40 hours',
  //       image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
  //       category: 'Development',
  //       level: 'Beginner'
  //     },
  //     {
  //       id: 2,
  //       title: 'Advanced React & TypeScript',
  //       instructor: 'Michael Chen',
  //       price: '$79.99',
  //       freeCourse: false,
  //       rating: 4.9,
  //       students: 8900,
  //       duration: '25 hours',
  //       image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
  //       category: 'Development',
  //       level: 'Advanced'
  //     },
  //     {
  //       id: 3,
  //       title: 'Digital Marketing Masterclass',
  //       instructor: 'Emma Williams',
  //       price: '$59.99',
  //       freeCourse: false,
  //       rating: 4.7,
  //       students: 15200,
  //       duration: '30 hours',
  //       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  //       category: 'Marketing',
  //       level: 'Intermediate'
  //     },
  //     {
  //       id: 4,
  //       title: 'Python for Data Science',
  //       instructor: 'David Kumar',
  //       price: 'Free',
  //       freeCourse: true,
  //       rating: 4.6,
  //       students: 20300,
  //       duration: '35 hours',
  //       image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
  //       category: 'Data Science',
  //       level: 'Beginner'
  //     },
  //     {
  //       id: 5,
  //       title: 'UI/UX Design Fundamentals',
  //       instructor: 'Alex Martinez',
  //       price: '$49.99',
  //       freeCourse: false,
  //       rating: 4.8,
  //       students: 9800,
  //       duration: '20 hours',
  //       image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
  //       category: 'Design',
  //       level: 'Beginner'
  //     },
  //     {
  //       id: 6,
  //       title: 'Machine Learning A-Z',
  //       instructor: 'Dr. Lisa Brown',
  //       price: '$89.99',
  //       freeCourse: false,
  //       rating: 4.9,
  //       students: 11200,
  //       duration: '50 hours',
  //       image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
  //       category: 'Data Science',
  //       level: 'Advanced'
  //     }
  //   ];

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
                  {/* <span className="text-xs text-blue-400 font-medium">{course.level}</span> */}
                  <span className="text-gray-600">•</span>
                  <span className="text-xs text-gray-400">{course.level}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>

                {/* <p className="text-sm text-gray-400 mb-4">{course.instructor}</p> */}

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
                <button onClick={()=>switchToCourseDEtailPage(course._id)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {course.freeCourse ? "Start Learning" : "Enroll Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
