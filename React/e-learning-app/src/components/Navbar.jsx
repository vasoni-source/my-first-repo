import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserRound } from "lucide-react";
import { useSelector } from "react-redux";
export default function Navbar() {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
console.log("islogin",isLogin);
  return (
    <div>
      <nav className=" h-25  p-4 flex flex-shrink-0 items-center justify-between md:justify-around bg-gray-950 text-white ">
        {/* <div className='text-4xl font-serif font-bold'>DNK</div> */}
        <img
          className="w-20-h-20"
          src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img.png"
          alt=""
        />
        <ul className="md:flex items-center justify-around  w-md text-sm uppercase hidden">
          <li className="cursor-pointer hover:text-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200"><Link to="/courses">Courses</Link></li>
          <li className="cursor-pointer hover:text-gray-200">Categories</li>
          <li className="cursor-pointer hover:text-gray-200">My Learning</li>
        </ul>
        <ul className="md:flex hidden items-center justify-around w-md text-sm uppercase font-light">
          <li className="cursor-pointer hover:text-gray-200">About</li>
          <li className="cursor-pointer hover:text-gray-200">Contact us</li>
          {/* <li className="cursor-pointer hover:text-gray-200">
            <UserRound />
          </li> */}
          {isLogin ? (
            <li className="cursor-pointer hover:text-gray-200 flex items-center
              gap-2">
              
              
              <UserRound />
              <span>{user.name}</span>
            </li>
          ) : (
            <li>

              <Link to="/auth">Login</Link>
            </li>
          )}
        </ul>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </div>
  );
}
