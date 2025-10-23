import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="border-black bg-black text-white flex justify-around items-center p-4 max-h-10">
      <div >Logo</div>
      <div className="flex gap-5">
        <ul className="flex gap-5">
          <Link to="/">
            <li className="text-white">Movies</li>
          </Link>

          <Link to="/about">
            <li className="text-white">About</li>
          </Link>
          <Link to="/contact">
            <li className="text-white">Contact</li>
          </Link>
        </ul>
       <Link to="/signUp">
        <div className="text-white">SignUp</div>
       </Link>
       <Link to="/user">
        <div className="text-white">User</div>
       </Link>
      </div>
    </div>
  );
}
