import React, { useState } from 'react';
import { ChevronRight, ChevronDown, BookOpen, Clock, PlayCircle, ArrowLeft, ArrowRight, Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';
export default function CourseDetail() {
  // Sample course data based on your JSON structure
  const courseDetail = useSelector((state)=>state.course.courseDetail);
  console.log("coursedetail",courseDetail);
  const courseData = {
    id: 1,
    name: "C++ Programming Language",
    freeCourse: true,
    level: "Beginner to Advanced",
    description: "A complete free C++ course with topic-wise explanations.",
    sections: [
      {
        id: 101,
        title: "Introduction to C++",
        topics: [
          {
            id: 1001,
            title: "What is C++?",
            content: "C++ is a general-purpose programming language that supports procedural, object-oriented, and generic programming. It is widely used for system software, game development, and performance-critical applications.\n\nC++ was developed by Bjarne Stroustrup at Bell Labs in 1979 as an extension of the C programming language. The name 'C++' comes from the increment operator (++) in C, symbolizing that it is an enhanced version of C.\n\nKey characteristics of C++:\n• Multi-paradigm: Supports procedural, object-oriented, and generic programming\n• Performance: Provides low-level memory manipulation capabilities\n• Portability: Code can run on different platforms with minimal modifications\n• Rich library support: Extensive Standard Template Library (STL)\n• Large community: Widely used with abundant resources and support"
          },
          {
            id: 1002,
            title: "Features of C++",
            content: "C++ provides high performance, object-oriented features, low-level memory access, and a powerful Standard Template Library (STL).\n\nMajor Features:\n\n1. Object-Oriented Programming (OOP)\nC++ supports classes, objects, inheritance, polymorphism, and encapsulation, making code more organized and reusable.\n\n2. Low-Level Manipulation\nDirect memory access through pointers allows fine-grained control over system resources.\n\n3. Standard Template Library (STL)\nProvides ready-to-use data structures (vectors, maps, sets) and algorithms (sorting, searching).\n\n4. Fast Execution\nCompiled to machine code, C++ programs run with minimal overhead.\n\n5. Platform Independence\nC++ code can be compiled and run on various operating systems."
          }
        ]
      },
      {
        id: 102,
        title: "C++ Basics",
        topics: [
          {
            id: 1003,
            title: "Variables",
            content: "Variables are used to store data values in memory. Each variable must be declared with a specific data type.\n\nSyntax:\ndata_type variable_name = value;\n\nExample:\nint age = 25;\nfloat salary = 50000.50;\nchar grade = 'A';\nbool isPassed = true;\n\nVariable Naming Rules:\n• Must begin with a letter or underscore\n• Can contain letters, digits, and underscores\n• Cannot use C++ keywords\n• Case-sensitive (age and Age are different)\n\nBest Practices:\n• Use meaningful names (studentAge instead of x)\n• Follow camelCase or snake_case convention\n• Initialize variables when declaring them"
          },
          {
            id: 1004,
            title: "Data Types",
            content: "C++ supports data types such as int, float, double, char, and bool to define the type of data stored.\n\nPrimitive Data Types:\n\n1. Integer Types:\n• int: Stores whole numbers (4 bytes)\n• short: Smaller integers (2 bytes)\n• long: Larger integers (8 bytes)\n\n2. Floating-Point Types:\n• float: Single precision (4 bytes)\n• double: Double precision (8 bytes)\n\n3. Character Type:\n• char: Stores single character (1 byte)\n\n4. Boolean Type:\n• bool: Stores true or false (1 byte)\n\nExamples:\nint count = 100;\nfloat price = 99.99;\ndouble pi = 3.14159265359;\nchar letter = 'A';\nbool isActive = true;"
          }
        ]
      },
      {
        id: 103,
        title: "Object-Oriented Programming",
        topics: [
          {
            id: 1005,
            title: "Classes and Objects",
            content: "Classes are blueprints for creating objects. Objects represent real-world entities with properties and behaviors.\n\nClass Definition:\nclass Student {\npublic:\n    string name;\n    int rollNo;\n    \n    void display() {\n        cout << name << ' - ' << rollNo;\n    }\n};\n\nCreating Objects:\nStudent s1;\ns1.name = 'John';\ns1.rollNo = 101;\ns1.display();\n\nKey Concepts:\n• Class: Template or blueprint\n• Object: Instance of a class\n• Member variables: Data stored in class\n• Member functions: Operations on data\n• Access specifiers: public, private, protected"
          },
          {
            id: 1006,
            title: "Inheritance",
            content: "Inheritance allows one class to reuse the properties and methods of another class, promoting code reusability.\n\nSyntax:\nclass Parent {\npublic:\n    void parentMethod() {\n        cout << 'Parent method';\n    }\n};\n\nclass Child : public Parent {\npublic:\n    void childMethod() {\n        cout << 'Child method';\n    }\n};\n\nTypes of Inheritance:\n1. Single Inheritance: One parent, one child\n2. Multiple Inheritance: Multiple parents, one child\n3. Multilevel Inheritance: Chain of inheritance\n4. Hierarchical Inheritance: One parent, multiple children\n5. Hybrid Inheritance: Combination of above types\n\nBenefits:\n• Code reusability\n• Extensibility\n• Data hiding"
          }
        ]
      }
    ]
  };

  // Paid course example
  const paidCourseData = {
    id: 2,
    name: "Data Science Masterclass",
    freeCourse: false,
    level: "Beginner to Advanced",
    description: "A paid, video-based Data Science course covering analytics, machine learning, and visualization.",
    price: { amount: 79.99, currency: "USD" },
    sections: [
      {
        id: 201,
        title: "Introduction to Data Science",
        topics: [
          {
            id: 2001,
            title: "What is Data Science?",
            videoUrl: "https://www.youtube.com/embed/ua-CiDNNj30",
            duration: "14:20"
          },
          {
            id: 2002,
            title: "Data Science Lifecycle",
            videoUrl: "https://www.youtube.com/embed/8j8aFIF7s5c",
            duration: "12:10"
          }
        ]
      },
      {
        id: 202,
        title: "Python for Data Science",
        topics: [
          {
            id: 2003,
            title: "Python Basics",
            videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
            duration: "18:45"
          },
          {
            id: 2004,
            title: "NumPy and Pandas",
            videoUrl: "https://www.youtube.com/embed/vmEHCJofslg",
            duration: "22:30"
          }
        ]
      }
    ]
  };

  // Toggle between free and paid course
  const [currentCourse, setCurrentCourse] = useState(courseData);
  const [expandedSections, setExpandedSections] = useState([101, 102, 103, 201, 202]);
  const [selectedTopic, setSelectedTopic] = useState(currentCourse.sections[0].topics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get all topics in order for navigation
  const allTopics = currentCourse.sections.flatMap(section => 
    section.topics.map(topic => ({...topic, sectionTitle: section.title}))
  );

  const currentTopicIndex = allTopics.findIndex(t => t.id === selectedTopic.id);
  const hasPrevious = currentTopicIndex > 0;
  const hasNext = currentTopicIndex < allTopics.length - 1;

  const toggleSection = (sectionId) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleTopicSelect = (topic, sectionTitle) => {
    setSelectedTopic({...topic, sectionTitle});
    setSidebarOpen(false);
  };

  const navigateTopic = (direction) => {
    const newIndex = direction === 'next' ? currentTopicIndex + 1 : currentTopicIndex - 1;
    if (newIndex >= 0 && newIndex < allTopics.length) {
      setSelectedTopic(allTopics[newIndex]);
    }
  };

  const switchCourse = () => {
    const newCourse = currentCourse.id === 1 ? paidCourseData : courseData;
    setCurrentCourse(newCourse);
    setSelectedTopic(newCourse.sections[0].topics[0]);
    setExpandedSections(newCourse.sections.map(s => s.id));
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-30">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div>
              <h1 className="text-xl font-bold text-white">{currentCourse.name}</h1>
              <p className="text-sm text-gray-400">{currentCourse.level}</p>
            </div>
          </div>
          <button
            onClick={switchCourse}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          >
            Switch to {currentCourse.id === 1 ? 'Paid' : 'Free'} Course
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-20
          w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto
          transition-transform duration-300 ease-in-out
        `}>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-white">Course Content</h2>
            </div>

            {/* Course Sections */}
            <div className="space-y-2">
              {currentCourse.sections.map((section) => (
                <div key={section.id} className="border border-gray-800 rounded-lg overflow-hidden">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-750 transition-colors"
                  >
                    <span className="text-white font-medium text-sm">{section.title}</span>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {/* Topics List */}
                  {expandedSections.includes(section.id) && (
                    <div className="bg-gray-900">
                      {section.topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => handleTopicSelect(topic, section.title)}
                          className={`
                            w-full text-left px-4 py-3 border-l-2 transition-all
                            ${selectedTopic.id === topic.id
                              ? 'border-blue-500 bg-gray-800 text-white'
                              : 'border-transparent hover:bg-gray-850 text-gray-400 hover:text-white'
                            }
                          `}
                        >
                          <div className="flex items-start gap-3">
                            {currentCourse.freeCourse ? (
                              <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            ) : (
                              <PlayCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{topic.title}</p>
                              {topic.duration && (
                                <div className="flex items-center gap-1 mt-1">
                                  <Clock className="w-3 h-3" />
                                  <span className="text-xs text-gray-500">{topic.duration}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 lg:p-8">
            {/* Topic Header */}
            <div className="mb-6">
              <p className="text-sm text-blue-400 mb-2">{selectedTopic.sectionTitle}</p>
              <h1 className="text-3xl font-bold text-white mb-2">{selectedTopic.title}</h1>
            </div>

            {/* Content Display */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              {currentCourse.freeCourse ? (
                // Text Content for Free Courses
                <div className="p-6 lg:p-8">
                  <div className="prose prose-invert max-w-none">
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedTopic.content}
                    </div>
                  </div>
                </div>
              ) : (
                // Video Content for Paid Courses
                <div>
                  <div className="aspect-video bg-black">
                    <iframe
                      src={selectedTopic.videoUrl}
                      title={selectedTopic.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {selectedTopic.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 gap-4">
              <button
                onClick={() => navigateTopic('previous')}
                disabled={!hasPrevious}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                  ${hasPrevious
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                  }
                `}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={() => navigateTopic('next')}
                disabled={!hasNext}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                  ${hasNext
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-900 text-gray-600 cursor-not-allowed'
                  }
                `}
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
        />
      )}
    </div>
  );
}