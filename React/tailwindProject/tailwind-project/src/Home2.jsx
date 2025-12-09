import React, { useState, useEffect } from "react";
import { ShoppingCart, UserRound, MoveRight, MoveLeft } from "lucide-react";
import { FaStar } from "react-icons/fa";
export default function Home2() {
  const images = [
    "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png",
    "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png",
    "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png",
    "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png",
    "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png",
    "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png",
    "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png",
  ];
  const cardData = [
    {
      img: "https://thumbs.dreamstime.com/b/photo-charming-positive-girl-wear-tank-top-telling-you-gossips-empty-space-isolated-pink-color-background-photo-charming-326929285.jpg",
      heading: "20% Off On Tank Tops",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    },
    {
      img: "https://img.freepik.com/free-photo/young-guy-white-tshirt-blue-background_185193-162745.jpg",
      heading: "Latest Eyewear For You",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
    },
    {
      img: "https://thenowherenation.com/cdn/shop/products/MiMai-Darcy-red-lifestyle-1.jpg?v=1680487341",
      heading: "Let's Lorem Suit Up!",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
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
      name: "DNK Yellow Shoes",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg",
      category: "Men",
      originalPrice: 150.0,
      currentPrice: 120.0,
    },
    {
      name: "DNK Blue Shoes",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe1-300x300.jpg",
      category: "Men",
      priceRange: [200.0, 240.0],
    },
    {
      name: "Dark Brown Jeans",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1-300x300.jpg",
      category: "Men",
      price: 150.0,
    },
    {
      name: "Blue Denim Jeans",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-300x300.jpg",
      category: "Women",
      price: 150.0,
    },
    {
      name: "Basic Gray Jeans",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg",
      category: "Women",
      price: 150.0,
    },
    {
      name: "Blue Denim Shorts",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-300x300.jpg",
      category: "Women",
      originalPrice: 150.0,
      currentPrice: 130.0,
    },
    {
      name: "Anchor Bracelet",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-300x300.jpg",
      category: "Accessories",
      priceRange: [150.0, 180.0],
    },
    {
      name: "Boho Bangle Bracelet",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg",
      category: "Accessories",
      priceRange: [150.0, 170.0],
    },
    {
      name: "Light Brown Purse",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-300x300.jpg",
      category: "Accessories",
      price: 150.0,
    },
    {
      name: "Bright Red Bag",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3-300x300.jpg",
      category: "Accessories",
      priceRange: [100.0, 140.0],
    },
  ];
  const infoCards = [
    {
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png",
      title: "Worldwide Shipping",
      description:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png",
      title: "Best Quality",
      description:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png",
      title: "Best Offers",
      description:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png",
      title: "Secure Payments",
      description:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <div className="max-w-full h-auto ">
      <div className="max-w-full h-screen bg-fixed bg-[linear-gradient(100deg,rgba(0,132,214,0.8)_0%,rgba(0,0,0,0)_100%),url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')]  bg-cover bg-center">
        {/* navgation starts here */}
        <nav className="h-25  flex items-center justify-around bg-black/20 text-white ">
          {/* <div className='text-4xl font-serif font-bold'>DNK</div> */}
          <img
            className="w-20-h-20"
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png"
            alt=""
          />
          <ul className="md:flex items-center justify-around  w-md text-sm uppercase hidden">
            <li>Everything</li>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
          </ul>
          <ul className="md:flex hidden items-center justify-around w-md text-sm uppercase font-light">
            <li>About</li>
            <li>Contact us</li>
            <li>
              <ShoppingCart />
            </li>
            <li>
              <UserRound />
            </li>
          </ul>
          <div className="md:hidden">
            <a className="text-4xl" href="#">
              &#8801;
            </a>
          </div>
        </nav>
        {/* navigation end here */}
        {/* Hero section starts here */}
        <div className="w-xl  h-[80%] text-white  flex flex-col p-8 gap-5 mt-20  ">
          {/* <div className="text-white border border-black flex flex-col p-6 gap-5 m-10"> */}
          <h1 className="text-6xl leading-20">
            Raining Offers For Hot Summer!
          </h1>
          <p className="text-2xl">25% Off On All Products</p>
          <div className="flex items-center justify-between w-[55%]">
            <button className="py-2 px-5 bg-white text-black uppercase">
              Shop Now
            </button>
            <button className=" border border-white py-2 px-5 uppercase">
              Find More
            </button>
          </div>
          {/* </div> */}
        </div>
        {/* Hero section ends here */}
      </div>
      {/* card and logo section starts here */}
      <div className=" flex flex-col  bg-white py-10">
        {/* logo slider starts here */}
        <div className="flex items-center  justify-center gap-2 md:gap-4 px-4 md:px-0 h-20 mb-10">
          <button
            onClick={handlePrev}
            className="shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
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
              <img src={item.src} alt={`Slide ${item.index + 1}`} />
            </div>
          ))}
          <button
            onClick={handleNext}
            className="shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next"
          >
            <MoveRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        {/* logo slider ends here */}
        {/* card section starts here */}
        <div className=" flex flex-wrap justify-around gap-6 ">
          {cardData.map((item, i) => (
            <div
              style={{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`w-sm h-96  flex flex-col justify-end bg-cover bg-center`}
              key={i}
            >
              {/* <div className="absolute inset-0 bg-black/30"></div> */}
              <div className=" z-10 p-6 m-4 text-white flex flex-col gap-4  ">
                <h3 className="text-2xl">{item.heading}</h3>
                <p>{item.para}</p>
                <button className="uppercase bg-white text-black p-3 w-35">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* card section ends here */}
      </div>
      {/* logo slider and card section ends here  */}

      <div className="w-full h-auto mt-10 bg-[#F5F7F9] flex flex-col items-center">
        {/* Featured products section starts here */}
        <div className="flex flex-col items-center mt-20">
          <div className="text-4xl font-semibold">Featured Products</div>
          <div className="border border-b rounded-md mt-5 border-blue-500 w-25"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly gap-4 mt-10">
          {products.map((product, i) => (
            <div
              className="w-[18%] min-w-[200px] h-full flex flex-col justify-evenly gap-2"
              key={i}
            >
              <img className="w-full h-[80%]" src={product.img} alt="" />
              <div className="text-md font-semibold">{product.name}</div>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <div className="flex ">
                {product.originalPrice ? (
                  <p className="text-gray-500 font-bold line-through text-sm">
                    ${product?.originalPrice.toFixed(2)}
                  </p>
                ) : null}
                {product.currentPrice ? (
                  <p className="text-black font-bold text-sm">
                    ${product?.currentPrice.toFixed(2)}
                  </p>
                ) : null}
                {product.price ? (
                  <p className="text-black font-bold text-sm">
                    ${product?.price.toFixed(2)}
                  </p>
                ) : null}
                {product.priceRange ? (
                  <p className="text-black font-semibold text-sm">
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
        <div className="w-full p-4 h-screen container ">
          <div
            style={{
              background:
                "linear-gradient(100deg, rgba(0, 132, 214, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg')",
              backgroundSize: "cover ,100%",
              backgroundPosition: "fixed",
              backgroundRepeat: "no-repeat,no-repeat",
              backgroundAttachment: "fixed",
              // backgroundPosition:"60% 100%"
            }}
            className="w-full h-[80%] flex items-center "
          >
            <div className="w-md ml-20  p-2 h-[65%] flex flex-col justify-between text-white">
              <div className="text-xl font-bold">Limited Time Offer</div>
              <div className="text-4xl font-bold">Special Edition</div>
              <p className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="text-xl font-bold">
                Buy This T-shirt At 20% Discount, Use Code OFF20
              </div>
              <button className="uppercase w-[25%] p-2 bg-white text-black">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* Limited time offer section ends here */}
        {/* assurance card starts here */}
        <div className=" w-full h-auto  flex flex-col items-center md:justify-around md:flex-row mb-25">
          {infoCards.map((item, i) => (
            <div className="w-[200px]  h-40 flex flex-col text-center justify-between items-center ">
              <img className="w-10 h-10" src={item.img} alt="" />
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {/* assurance card ends here */}
      </div>
      <footer className="bg-neutral-primary-soft p-6">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">

            <div className=" w-full grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-4 text-black">
              <div>
                <h2 className="mb-6 text-lg font-semibold text-heading uppercase">
                  Quick Links
                </h2>
                <ul className="text-body">
                  <li className="mb-4">Home</li>
                  <li className="mb-4">About</li>
                  <li className="mb-4">My Acount</li>
                  <li className="mb-4">Cart</li>
                  <li className="mb-4">Contact</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-lg font-semibold text-heading uppercase">
                  For Her
                </h2>
                <ul className="text-body ">
                  <li className="mb-4">Women Jeans</li>
                  <li className="mb-4">Tops and Shirts</li>
                  <li className="mb-4">Women Jackets</li>
                  <li className="mb-4">Heels and Flats</li>
                  <li className="mb-4">Women Accessories</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-lg font-semibold text-heading uppercase">
                  For Him
                </h2>
                <ul className="text-body ">
                  <li className="mb-4">Men Jeans</li>
                  <li className="mb-4">Men Shirts</li>
                  <li className="mb-4">Men Shoes</li>
                  <li className="mb-4">Men Accessories</li>
                  <li className="mb-4">Men Jackets</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-heading uppercase">
                  For Him
                </h2>
                <div>
                  <img className="w-30 h-10" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-default sm:mx-auto lg:my-8" />

          <div className="sm:flex  sm:items-center sm:justify-between">
            <span className="text-sm text-body sm:text-center">
              Copyright © 2025 Brandstore
            </span>
            <span className="text-sm text-body sm:text-center">
              Powered by Brandstore
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
