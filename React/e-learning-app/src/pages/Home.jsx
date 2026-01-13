import React, { useState, useEffect } from "react";
import bgImage from "../assets/images/bg.png";
import expressLogo from "../assets/images/express.png";
import pythonLogo from "../assets/images/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn-removebg-preview.png";
import javaLogo from "../assets/images/java-removebg-preview.png";
import nodeLogo from "../assets/images/node-removebg-preview.png";
import { ShoppingCart, UserRound, MoveRight, MoveLeft } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../redux/thunk/coursesThunk";
export default function Home() {
  const { courses, loading, error } = useSelector((state) => state.course);
  console.log("courses", courses);
  console.log("---------------------");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  const images = [
    "https://icon.icepanel.io/Technology/svg/React.svg",
    // expressLogo,
    pythonLogo,
    "https://isocpp.org/assets/images/cpp_logo.png",
    javaLogo,
    nodeLogo,
  ];
  const cardData = courses
    .filter((course, i) => !course.freeCourse)
    .slice(0, 3);
  console.log("cardDta", cardData);
  const featuredCourses = courses.slice(0, 10);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const getVisibleImages = () => {
    const visibleCount = isMobile ? 1 : 5;
    const visibleImages = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({ src: images[index], index });
    }

    return visibleImages;
  };

  const infoCards = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      title: "Learn From Anywhere",
      description:
        "Access courses anytime, anywhere on desktop, tablet, or mobile devices.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
      title: "Affordable Courses",
      description:
        "High-quality learning at competitive prices with regular discounts.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
      title: "Secure Payments",
      description:
        "Safe and encrypted payment methods for a worry-free checkout.",
    },
  ];

  return (
    <div>
      <div
        className="max-w-full flex flex-col h-screen bg-fixed   bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* navgation starts here */}
        {/* Hero section starts here */}
        <div className="w-full overflow-hidden flex-1 flex flex-col justify-center items-center md:items-baseline ">
          <div className="w-full max-w-xl  text-white  flex flex-col text-center md:text-left md:p-8 gap-5  ">
            <h1 className="md:text-6xl text-5xl leading-20">
              Learn Anytime, Anywhere
            </h1>
            <p className="text-4xl ">
              Upgrade Your Skills with Expert-Led Courses
            </p>
            <div className="flex   h-auto flex-col gap-4 md:flex-row  items-center  justify-between   md:w-[55%]">
              <button className="py-3 px-5 text-xl md:text-sm md:py-2  md:px-3 w-full bg-white text-black uppercase">
                Get Started
              </button>
              <button className="py-3 px-5 text-xl md:text-sm w-full border border-white md:py-2 md:px-3 uppercase">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Hero section ends here */}
      </div>
      {/* card and logo section starts here */}
      <div className="flex flex-col bg-gray-950 py-10">
        {/* logo slider starts here */}
        <div className="flex items-center justify-center gap-2 md:gap-4 px-4 md:px-0 h-20 mb-10">
          <button
            onClick={handlePrev}
            className="shrink-0 p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-300 hover:text-white"
            aria-label="Previous"
          >
            <MoveLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          {getVisibleImages().map((item, i) => (
            <div
              key={`${item.index}-${i}`}
              className={`transition-all duration-500 ease-in-out ${
                isMobile ? "w-30" : "w-1/5"
              }`}
            >
              <img
                className="h-20 w-20 rounded-lg"
                src={item.src}
                alt={`Slide ${item.index + 1}`}
              />
            </div>
          ))}
          <button
            onClick={handleNext}
            className="shrink-0 p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-300 hover:text-white"
            aria-label="Next"
          >
            <MoveRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        {/* logo slider ends here */}
        {/* card section starts here */}
        <div className="w-full flex flex-wrap justify-around gap-6 p-4">
          {cardData.map((item, i) => (
            <div
              style={{
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`md:w-sm w-full h-96 flex flex-col justify-end bg-cover bg-center rounded-lg overflow-hidden border border-gray-800`}
              key={i}
            >
              <div className="z-10 p-6 m-4 text-white flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-gray-200">{item.description}</p>
                <button className="w-full uppercase bg-white text-black p-3 md:w-35 hover:bg-gray-200 transition-colors font-medium">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* card section ends here */}
      </div>
      {/* logo slider and card section ends here  */}
      <div className="bg-gray-950 w-full h-auto mt-10 bg-[#F5F7F9] flex flex-col items-center">
        {/* Featured products section starts here */}
        <div className="flex flex-col items-center mt-20">
          <div className="text-4xl font-semibold text-white">
            Featured Courses
          </div>
          <div className="border border-b rounded-md mt-5 border-blue-500 w-25"></div>
        </div>
        <div className="w-full  flex flex-wrap justify-evenly gap-4 mt-10">
          {featuredCourses.map((course, i) => (
            <div
              className=" w-[18%] min-w-[200px] h-[350px]  flex flex-col justify-evenly gap-2"
              key={i}
            >
              <img className="w-full h-[200px]" src={course.imageUrl} alt="" />
              <div className="text-md font-semibold text-white">
                {course.name}
              </div>
              <p className="text-gray-500 text-sm">{course.level}</p>
              <div className="flex ">
                {course.freeCourse ? (
                  <p className="text-white font-bold text-sm">Free</p>
                ) : (
                  <p>{course.price.amount}</p>
                )}
              </div>
              <div className="flex text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Featured products section ends here */}

        {/* assurance card starts here */}
        <div className="w-full text-white h-auto flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 md:gap-4 lg:gap-8 py-8 md:py-12 px-4">
          {infoCards.map((item, i) => (
            <div
              key={i}
              className="w-full max-w-[280px] sm:max-w-[240px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]  h-auto min-h-[180px] md:min-h-[200px] flex flex-col text-center justify-between items-center p-4 md:p-3 lg:p-4 gap-3 "
            >
              <img
                className="w-16 h-16 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-contain"
                src={item.img}
                alt={item.title}
              />

              <h2 className="font-bold text-xl md:text-lg lg:text-xl">
                {item.title}
              </h2>

              <p className="text-sm md:text-xs lg:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* assurance card ends here */}
      </div>
      {/* footer starts here */}
      <footer className="w-full bg-gray-950 text-white p-6 border-amber-50">
        <div className="mx-autow-full p-4 py-6 lg:py-8">
          <div className="flex justify-between">
            <div className="w-full grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-4 ">
              {/* Quick Links */}
              <div className="p-4 flex justify-center">
                <div>
                  <h2 className="mb-6 md:text-lg text-3xl font-normal md:font-semibold text-heading">
                    Quick Links
                  </h2>
                  <ul className="text-body md:text-lg text-2xl">
                    <li className="mb-4">Home</li>
                    <li className="mb-4">Courses</li>
                    <li className="mb-4">My Learning</li>
                    <li className="mb-4">Wishlist</li>
                    <li className="mb-4">Contact Us</li>
                  </ul>
                </div>
              </div>

              {/* Explore */}
              <div className="p-4 flex justify-center">
                <div>
                  <h2 className="mb-6 md:text-lg text-3xl font-normal md:font-semibold text-heading">
                    Explore
                  </h2>
                  <ul className="text-body md:text-lg text-2xl">
                    <li className="mb-4">Web Development</li>
                    <li className="mb-4">Data Science</li>
                    <li className="mb-4">Mobile Development</li>
                    <li className="mb-4">Programming Languages</li>
                    <li className="mb-4">Free Courses</li>
                  </ul>
                </div>
              </div>

              {/* Resources */}
              <div className="p-4 flex justify-center">
                <div>
                  <h2 className="mb-6 md:text-lg text-3xl font-normal md:font-semibold text-heading">
                    Resources
                  </h2>
                  <ul className="text-body md:text-lg text-2xl">
                    <li className="mb-4">Blog</li>
                    <li className="mb-4">Help Center</li>
                    <li className="mb-4">FAQs</li>
                    <li className="mb-4">Privacy Policy</li>
                    <li className="mb-4">Terms & Conditions</li>
                  </ul>
                </div>
              </div>

              {/* Mobile App */}
              <div className="p-4 flex justify-center">
                <div>
                  <h2 className="mb-6 md:text-lg text-3xl font-normal md:font-semibold text-heading">
                    Learn On The Go
                  </h2>
                  <div>
                    <img
                      className="w-30 h-10"
                      src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png"
                      alt="Download on Play Store"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-default sm:mx-auto lg:my-8" />

          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <span className="md:text-sm text-2xl text-body sm:text-center">
              © 2025 Learnify. All rights reserved.
            </span>
            <span className="md:text-sm text-2xl text-body sm:text-center">
              Empowering learners worldwide
            </span>
          </div>
        </div>
      </footer>
      {/* footer ends here */}
    </div>
  );
}
