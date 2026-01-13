import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  BookOpen,
  Clock,
  PlayCircle,
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourseDetail } from "../redux/thunk/coursesThunk";
export default function CourseDetail() {
  const courseDetail = useSelector((state) => state.course.courseDetail);
  const dispatch = useDispatch();
  console.log("course detail", courseDetail);
  const id = useParams();
  const currentCourse = courseDetail;
console.log("id",id.id);
 useEffect(()=>{
 
  if(id){
    dispatch(fetchCourseDetail(id.id));
  }
 },[id])
 useEffect(() => {
  if (!currentCourse?.sections?.length) return;

  const firstSection = currentCourse.sections[0];
  const firstTopic = firstSection.topics[0];

  setExpandedSections(currentCourse.sections.map(s => s.id));

  setSelectedTopic({
    ...firstTopic,
    sectionIndex: 0,
    topicIndex: 0,
    sectionTitle: firstSection.title
  });
}, [currentCourse]);

  // const [expandedSections, setExpandedSections] = useState(
  //   currentCourse?.sections?.map((s) => s.id)
  // );
  // const [selectedTopic, setSelectedTopic] = useState(
  //   currentCourse?.sections[0].topics[0]
  // );
  const [selectedTopic, setSelectedTopic] = useState(null);
const [expandedSections, setExpandedSections] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("selected topic", selectedTopic);

  // const allTopics = currentCourse.sections.flatMap((section) =>
  //   section.topics.map((topic) => ({ ...topic, sectionTitle: section.title }))
  // );
  // const allTopics = currentCourse?.sections?.flatMap((section, sectionIndex) =>
  //   section.topics.map((topic, topicIndex) => ({
  //     ...topic,
  //     sectionIndex,
  //     topicIndex,
  //     sectionTitle: section.title,
  //   }))
  // );

  // const currentTopicIndex = allTopics.findIndex(
  //   (t) => t.id === selectedTopic.id
  // );

  // const currentTopicIndex = allTopics?.findIndex(
  //   (t) =>
  //     t.id === selectedTopic?.id &&
  //     t.sectionIndex === selectedTopic?.sectionIndex
  // );

  

  // const hasPrevious = currentTopicIndex > 0;
  // const hasNext = currentTopicIndex < allTopics?.length - 1;

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };
const getNextTopic = () => {
   if (!selectedTopic || !currentCourse?.sections?.length) return null;
  const { sectionIndex, topicIndex } = selectedTopic;
  const sections = currentCourse.sections;

  // Next topic in same section
  if (topicIndex + 1 < sections[sectionIndex].topics.length) {
    const topic = sections[sectionIndex].topics[topicIndex + 1];
    return {
      ...topic,
      sectionIndex,
      topicIndex: topicIndex + 1,
      sectionTitle: sections[sectionIndex].title
    };
  }

  // First topic of next section
  if (sectionIndex + 1 < sections.length) {
    const nextSection = sections[sectionIndex + 1];
    return {
      ...nextSection.topics[0],
      sectionIndex: sectionIndex + 1,
      topicIndex: 0,
      sectionTitle: nextSection.title
    };
  }

  return null; // last topic of course
};


const getPreviousTopic = () => {
  if (!selectedTopic || !currentCourse?.sections?.length) return null;
  const { sectionIndex, topicIndex } = selectedTopic;
  const sections = currentCourse.sections;

  // Previous topic in same section
  if (topicIndex - 1 >= 0) {
    const topic = sections[sectionIndex].topics[topicIndex - 1];
    return {
      ...topic,
      sectionIndex,
      topicIndex: topicIndex - 1,
      sectionTitle: sections[sectionIndex].title
    };
  }

  // Last topic of previous section
  if (sectionIndex - 1 >= 0) {
    const prevSection = sections[sectionIndex - 1];
    const lastIndex = prevSection.topics.length - 1;

    return {
      ...prevSection.topics[lastIndex],
      sectionIndex: sectionIndex - 1,
      topicIndex: lastIndex,
      sectionTitle: prevSection.title
    };
  }

  return null; // first topic of course
};

const handleNext = () => {
  const next = getNextTopic();
  if (!next) return;

  setSelectedTopic(next);
  setExpandedSections(prev =>
    prev.includes(currentCourse.sections[next.sectionIndex].id)
      ? prev
      : [...prev, currentCourse.sections[next.sectionIndex].id]
  );
};

const handlePrevious = () => {
  const prev = getPreviousTopic();
  if (!prev) return;

  setSelectedTopic(prev);
};

const hasNext = !!getNextTopic();
const hasPrevious = !!getPreviousTopic();

  const handleTopicSelect = (topic, sectionTitle) => {
    setSelectedTopic({ ...topic, sectionTitle });
    setSidebarOpen(false);
  };

  // const navigateTopic = (direction) => {
  //   const newIndex =
  //     direction === "next" ? currentTopicIndex + 1 : currentTopicIndex - 1;
  //   if (newIndex >= 0 && newIndex < allTopics.length) {
  //     setSelectedTopic(allTopics[newIndex]);
  //   }
  // };
  const navigateTopic = (direction) => {
    if (currentTopicIndex === -1) return;

    let newIndex =
      direction === "next" ? currentTopicIndex + 1 : currentTopicIndex - 1;

    if (newIndex < 0 || newIndex >= allTopics.length) return;

    const nextTopic = allTopics[newIndex];

    setSelectedTopic(nextTopic);

    // Auto expand section when navigating
    setExpandedSections((prev) =>
      prev.includes(currentCourse.sections[nextTopic.sectionIndex].id)
        ? prev
        : [...prev, currentCourse.sections[nextTopic.sectionIndex].id]
    );
  };
  //  if (!currentCourse || !currentCourse.sections?.length) {
  //   return null; // or loader
  // }
  if (!currentCourse || !selectedTopic) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Loading course...
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-30">
        <div className="px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white">
              {currentCourse.name}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-sm text-gray-400">{currentCourse.level}</p>
              {!currentCourse?.freeCourse && (
                <span className="px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full font-medium">
                  Premium
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-20
          w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto
          transition-transform duration-300 ease-in-out
        `}
        >
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-white">
                Course Content
              </h2>
            </div>

            {/* Course Sections */}
            <div className="space-y-2">
              {currentCourse?.sections.map((section,sectionIndex) => (
                <div
                  key={section.id}
                  className="border border-gray-800 rounded-lg overflow-hidden"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-750 transition-colors"
                  >
                    <span className="text-white font-medium text-sm">
                      {section.title}
                    </span>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {/* Topics List */}
                  {expandedSections.includes(section.id) && (
                    <div className="bg-gray-900">
                      {section.topics.map((topic, topicIndex) => (
                        <button
                          key={topic.id}
                          // onClick={() =>
                          //   handleTopicSelect(topic, section.title)
                          // }
                          onClick={() =>
                            setSelectedTopic({
                              ...topic,
                              sectionIndex,
                              topicIndex,
                              sectionTitle: section.title,
                            })
                          }
                          className={`
                            w-full text-left px-4 py-3 border-l-2 transition-all
                            ${
                              selectedTopic.id === topic.id
                                ? "border-blue-500 bg-gray-800 text-white"
                                : "border-transparent hover:bg-gray-850 text-gray-400 hover:text-white"
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
                              <p className="text-sm font-medium">
                                {topic.title}
                              </p>
                              {topic.duration && (
                                <div className="flex items-center gap-1 mt-1">
                                  <Clock className="w-3 h-3" />
                                  <span className="text-xs text-gray-500">
                                    {topic.duration}
                                  </span>
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
              <p className="text-sm text-blue-400 mb-2">
                {selectedTopic.sectionTitle}
              </p>
              <h1 className="text-3xl font-bold text-white mb-2">
                {selectedTopic.title}
              </h1>
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
                // onClick={() => navigateTopic("previous")}
                // disabled={!hasPrevious}
                onClick={handlePrevious} disabled={!hasPrevious}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                  ${
                    hasPrevious
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-900 text-gray-600 cursor-not-allowed"
                  }
                `}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                // onClick={() => navigateTopic("next")}
                // disabled={!hasNext}
                onClick={handleNext} disabled={!hasNext}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                  ${
                    hasNext
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-900 text-gray-600 cursor-not-allowed"
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
