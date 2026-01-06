import React ,{useState,useEffect} from 'react'
import bgImage from "../assets/images/bg.png"
import expressLogo from "../assets/images/express.png"
import pythonLogo from "../assets/images/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn-removebg-preview.png"
import javaLogo from "../assets/images/java-removebg-preview.png"
import nodeLogo from "../assets/images/node-removebg-preview.png"
import { ShoppingCart, UserRound, MoveRight, MoveLeft } from "lucide-react";
import { FaStar } from "react-icons/fa";
export default function 
() {
    const images = [
    "https://icon.icepanel.io/Technology/svg/React.svg",
    // expressLogo,
    pythonLogo,
    "https://isocpp.org/assets/images/cpp_logo.png",
    javaLogo,
    nodeLogo,
  ];
  const cardData = [
  {
    img: "https://img.freepik.com/free-photo/online-education-concept_23-2148529265.jpg",
    heading: "Web Development Courses",
    para: "Learn HTML, CSS, JavaScript, and modern frameworks with hands-on projects.",
  },
  {
    img: "https://img.freepik.com/free-photo/e-learning-online-courses-concept_23-2148533389.jpg",
    heading: "Data Science & AI",
    para: "Master data analysis, machine learning, and AI with expert-led courses.",
  },
  {
    img: "https://img.freepik.com/free-photo/online-learning-home_23-2148813625.jpg",
    heading: "Design & Creative Skills",
    para: "Improve your UI/UX, graphic design, and creative skills step by step.",
  },
];

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
  const products = [
  {
    name: "Complete Web Development Bootcamp",
    img: "https://miro.medium.com/0*ARCVgw1aDJ0vWXKM.jpeg",
    category: "Development",
    originalPrice: 150.0,
    currentPrice: 120.0,
  },
  {
    name: "Data Science & Machine Learning",
    img: "https://strapi.blog.talentsprint.com/uploads/data_science_trends_b611e9e920.webp",
    category: "Data Science",
    priceRange: [200.0, 240.0],
  },
  {
    name: "JavaScript for Beginners",
    img: "https://dvg5hr78c8hf1.cloudfront.net/2016/06/17/13/45/01/cc2fac88-2f81-4cc5-9ec9-334042781fd0/1*OsjnQFK1i6CkjXQmTErAtw.jpeg",
    category: "Development",
    price: 150.0,
  },
  {
    name: "UI/UX Design Fundamentals",
    img: "https://www.mindinventory.com/blog/wp-content/uploads/2024/12/top-mobile-app-ui-ux-design-trends.webp",
    category: "Design",
    price: 150.0,
  },
  {
    name: "Graphic Design Masterclass",
    img: "https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?semt=ais_hybrid&w=740&q=80",
    category: "Design",
    price: 150.0,
  },
  {
    name: "Digital Marketing Essentials",
    img: "https://midriffinfosolution.org/wp-content/uploads/2022/08/15-min.jpg",
    category: "Marketing",
    originalPrice: 150.0,
    currentPrice: 130.0,
  },
  {
    name: "Python Programming Course",
    img: "https://img-c.udemycdn.com/course/750x422/6053693_14e0_2.jpg",
    category: "Development",
    priceRange: [150.0, 180.0],
  },
  {
    name: "Cloud Computing with AWS",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20230419121924/Cloud-Computing.webp",
    category: "Cloud",
    priceRange: [150.0, 170.0],
  },
  {
    name: "Business & Entrepreneurship",
    img: "https://media.licdn.com/dms/image/v2/C5612AQF9rk2-X86anQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520104051827?e=2147483647&v=beta&t=mom9WegJ1KiI-h6e2_jEpfr0s4CALsz_eMA-zeULV3c",
    category: "Business",
    price: 150.0,
  },
  {
    name: "Mobile App Development",
    img: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
    category: "Development",
    priceRange: [100.0, 140.0],
  },
];

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
     <div className="max-w-full flex flex-col h-screen bg-fixed   bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        {/* navgation starts here */}
        {/* Hero section starts here */}
        <div className="w-full overflow-hidden flex-1 flex flex-col justify-center items-center md:items-baseline ">
          <div className="w-full max-w-xl  text-white  flex flex-col text-center md:text-left md:p-8 gap-5  ">
            <h1 className="md:text-6xl text-5xl leading-20">
              Learn Anytime, Anywhere
            </h1>
            <p className="text-4xl ">Upgrade Your Skills with Expert-Led Courses</p>
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
              <img className='h-20 w-20 rounded-lg' src={item.src} alt={`Slide ${item.index + 1}`} />
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
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`md:w-sm w-full h-96 flex flex-col justify-end bg-cover bg-center rounded-lg overflow-hidden border border-gray-800`}
              key={i}
            >
              <div className="z-10 p-6 m-4 text-white flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{item.heading}</h3>
                <p className="text-gray-200">{item.para}</p>
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
          <div className="text-4xl font-semibold text-white">Featured Courses</div>
          <div className="border border-b rounded-md mt-5 border-blue-500 w-25"></div>
        </div>
        <div className="w-full  flex flex-wrap justify-evenly gap-4 mt-10">
          {products.map((product, i) => (
            <div
              className=" w-[18%] min-w-[200px] h-[350px]  flex flex-col justify-evenly gap-2"
              key={i}
            >
              <img className="w-full h-[200px]" src={product.img} alt="" />
              <div className="text-md font-semibold text-white">{product.name}</div>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <div className="flex ">
                {product.originalPrice ? (
                  <p className="text-gray-500 font-bold line-through text-sm">
                    ${product?.originalPrice.toFixed(2)}
                  </p>
                ) : null}
                {product.currentPrice ? (
                  <p className="text-white font-bold text-sm">
                    ${product?.currentPrice.toFixed(2)}
                  </p>
                ) : null}
                {product.price ? (
                  <p className="text-white font-bold text-sm">
                    ${product?.price.toFixed(2)}
                  </p>
                ) : null}
                {product.priceRange ? (
                  <p className="text-white font-semibold text-sm">
                    ${product?.priceRange[0].toFixed(2)}-$
                    {product.priceRange[1].toFixed(2)}
                  </p>
                ) : null}
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
        {/* Limited time offer section starts here */}
        {/* <div className="w-full p-4 h-[80vh] flex flex-col bg-gray-950">
          <div
            style={{
              background:
                "linear-gradient(100deg, rgba(0, 132, 214, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat,no-repeat",
              backgroundAttachment: "fixed",
              // backgroundPosition:"60% 100%"
            }}
            className="w-full  h-[100%] flex items-center md:bg-fixed"
          >
            <div className="w-full max-w-2xl md:ml-20 md:text-left text-center   p-2 min-h-[65%]  flex flex-col justify-between gap-6 text-white">
              <div className="md:text-xl text-3xl font-bold">
                Limited Time Offer
              </div>
              <div className="md:text-4xl text-5xl md:font-bold">
                Special Edition
              </div>
              <p className="md:text-sm leading-8 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="md:text-xl md:font-semibold text-3xl">
                Buy This T-shirt At 20% Discount, Use Code OFF20
              </div>
              <button className="uppercase w-full md:w-[25%]  p-2 bg-white text-black">
                Shop Now
              </button>
            </div>
          </div>
        </div> */}
        {/* Limited time offer section ends here */}
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

   </div>
  )
}
