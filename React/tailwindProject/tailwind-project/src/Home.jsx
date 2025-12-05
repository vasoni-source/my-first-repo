import React from "react";
export default function Home() {
  const data = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/8832/8832880.png",
      count: 600,
      para: "Different Courses",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5850/5850276.png",
      count: 700000,
      para: "Students Enrolled",
    },
    {
      img: "https://img.icons8.com/dusk/1200/keyboard.jpg",
      count: 10000,
      para: "Successful Transition",
    },
  ];
  const products = [
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/016/159/594/small/monitor-computer-lab-icon-flat-research-laboratory-vector.jpg",
      heading: "Pw Skills lab",
      para: "Supercharge your project development with our robust lab.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/8101/8101319.png",
      heading: "Job Portal",
      para: "Use exceptional templates for a stand-out resume minus the sign up process.",
    },
    {
      img: "https://www.shutterstock.com/image-vector/education-briefcase-icon-on-white-260nw-2587155261.jpg",
      heading: "Experience portal",
      para: "PW Skills's self-paced experience portal priorities hands-on training with 570+ internship projects.",
    },
    {
      img: "https://www.shutterstock.com/image-vector/circular-diagram-black-white-featuring-600nw-2661327493.jpg",
      heading: "affiliate",
      para: "Explore aflliate marketing opportunities with PW Skills and attain financial freedom.",
    },
    {
      img: "https://media.istockphoto.com/id/670022558/vector/gold-star-quality-badge.jpg?s=612x612&w=0&k=20&c=9-y08w95JKVK-Zu_cmXOJH3QQ7oxB3iRG2Jpvry90To=",
      heading: "Hall of fame",
      para: "Our student placements and 100k+ career transitions speak volumes about out courses.",
    },
  ];
  return (
    // <div className=" grid  place-content-center border border-black h-screen">
    //   {/* <h1 className="text-red-300 bg-slate-500">Hello world!</h1> */}
    //   <div className="">
    //     <div className="p-6 max-w-sm mx-auto flex items-center bg-white rounded-xl shadow-lg  space-x-4         ">
    //       <div>
    //         <img
    //           className="h-12 w-12"
    //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/500px-Physics_wallah_logo.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div>
    //         <div className="text-2xl font-medium text-black">
    //           Tailwind Css
    //           <p className="text-slate-500 text-base">By vaibhavi Soni</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <button className=" bg-sky-500  mt-2 text-white p-2 rounded-xl max-w-sm mx-auto">
    //     Buy Now
    //   </button>
    //   <div className="text-white md:text-green-500 sm:text-red-500 max-w-sm mx-auto">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, laborum
    //     temporibus. Ullam vel perspiciatis, ex in odit quasi corporis temporibus
    //     nemo provident, velit accusantium fugiat, nostrum quia quam perferendis
    //     voluptatum.
    //   </div>
    //   <div className="mt-2">
    //     <div className=" md:max-w-4xl  max-w-sm  md:max-w-lg md:h-full bg-white text-black  rounded-xl overflow-hidden mx-auto">
    //        <div className=" md:flex ">
    //          <div className="">
    //             <img  className="w-full h-48  object-cover md:hight-full md:w-70" src="https://images.pexels.com/photos/33895805/pexels-photo-33895805.jpeg" alt="" />
    //         </div>
    //         <div className="p-3">
    //             <h2 className="text-blue-600 font-bold uppercase hover:text-red-300 hover:cursor-pointer">An Awesome card</h2>
    //             <div className="text-lg font-bold">Tailwind css is amazing once you understand <span className="bg-yellow-500 p-[5px]">power </span>of it</div>
    //             <p className="text-md text-slate-500">Lorem ipsum dolor sit  veniam ducimus autem expedita minima placeat quidem, modi labore ea sapiente nostrum exercitationem ut neque veritatis.</p>
    //         </div>
    //        </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-slate-950 max-w-full h-auto">
      <nav className="bg-slate-400 flex justify-between items-center px-2 py-2 h-14">
        <div className="text-indigo-900 font-bold">PW Skills</div>
        <div>
          <ul className="md:flex hidden">
            <li className="m-2 text-indigo-900">Home</li>
            <li className="m-2 text-indigo-900">About Us</li>
            <li className="m-2 text-indigo-900">Contact</li>
          </ul>
        </div>
        <div className="bg-indigo-900 text-white p-2 rounded md:block hidden">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      <header>
        <img
          className="w-full hidden md:block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIjk_iFw4_JKWRfOoK14quOSTETFwY471WHumrO8czlAF-0T0gwqGmOkErF2sf1vmhfE&usqp=CAU"
          alt=""
        />
        <img
          className="w-full md:hidden "
          src="https://assets.telegraphindia.com/telegraph/2022/May/1653810732_shutterstock_1766708726-1.jpg"
          alt=""
        />
      </header>
      <div className="flex items-center justify-center w-full h-auto flex-wrap flex-col">
        <div className="flex items-center justify-center w-full h-auto flex-wrap flex-col">
          <p className="text-indigo-700 mt-4">"Pure Hardwork, No Shortcuts!"</p>
          <div className=" border-b-4 border-yellow-500 rounded-2xl w-36 md:mt-4  mt-2 mb-12"></div>
        </div>
        <div className="flex items-center justify-around w-full h-auto flex-wrap flex-col md:flex-row">
          {data.map((item, i) => (
            <div className="flex flex-col items-center mb-12" key={i}>
              <img
                src={item.img}
                alt="img"
                className="w-20 h-20 rounded-full"
              />
              <h4>{item.count}+</h4>
              <p className="text-gray-500">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-auto flex-wrap flex-col">
        <div className="flex items-center justify-center w-full h-auto flex-wrap flex-col">
          <p className="text-indigo-700">"Our Products"</p>
          <div className=" border-b-4 border-yellow-500 rounded-2xl w-36 md:mt-4  mt-2 mb-12"></div>
        </div>
        <div className="flex items-center justify-around w-[90%] h-auto flex-wrap flex-col md:flex-row">
          {products.map((item, i) => (
            <div className={`p-4 w-50 flex flex-col items-center  justify-center mb-12 ${i===0 ? "border-white border-2 rounded-lg": ""} `} key={i}>
              <img
                src={item.img}
                alt="img"
                className="w-30 h-30 rounded-full"
              />
              <p className="text-xl mt-4">{item?.heading}</p>
              <p className="text-[14px] text-gray-500 m-auto">{item.para}</p>
            </div>
          ))}
        </div>
        <footer className="w-full flex flex-col bg-gray-900 md:flex-row px-4 text-white pt-8 flex-wrap justify-between md:px-12">
          <div >
            <div className=" w-[10%] flex justify-between">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/500px-Physics_wallah_logo.jpg" className="w-5 h-5 rounded-full" alt="" />
              <p>Skills</p>
            </div>
            <p className="my-4">Email us: support@pwskills.com</p>
            <img className="w-20 h-20 rounded-full" src="https://img.lovepik.com/element/45016/7396.png_860.png" alt="" />
          </div>
          <div className="flex flex-col ">
            <p>PW Skills</p>
                      <div className=" border-b-4 border-yellow-500 rounded-2xl w-25 "></div>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy policy</p>
          </div>
          <div className="flex flex-col ">
            <p>Products</p>
                      <div className=" border-b-4 border-yellow-500 rounded-2xl w-25 "></div>
            <p>PW Skills Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an affalte</p>
            <p>Hall of fame</p>

          </div>
          <div className="flex flex-col ">
            <p>Links</p>
                      <div className=" border-b-4 border-yellow-500 rounded-2xl w-25 "></div>
            <p>Discard Channel</p>
            <p>PW Youtube</p>
            <p>Careers</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
