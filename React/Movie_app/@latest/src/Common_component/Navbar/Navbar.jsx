import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchedMovie } from "../../features/Movies/movieSlice";
import "./Navbar.css";
import { toggleTheme } from "../../features/Theme/themeSlice";
export default function Navbar() {
  const loginUser = useSelector((state) => state.user.loginUser);
  const movies = useSelector((state) => state.movie?.movies);
  const theme = useSelector((state) => state.theme.mode);
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    const filteredMovies = movies.filter((movie)=>movie.title.toLowerCase().includes(searchMovie.toLowerCase()))
    dispatch(searchedMovie(filteredMovies));
  };
  const handelChange = (e) => {
    setSearchMovie(e.target.value);
  };
  return (
  <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* Left section - Logo and Search */}
      <div className="flex items-center gap-6 flex-1">
        <Link to="/" className="flex-shrink-0">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all cursor-pointer">
            MovieBuzz
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
          <input
            type="text"
            className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Search movies..."
            onChange={handelChange}
          />
          <button 
            onClick={handleSearch}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 whitespace-nowrap shadow-sm"
          >
            Search
          </button>
        </div>
      </div>

      {/* Right section - Navigation Links */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link><button onClick={() => dispatch(toggleTheme())}>{theme==='light'?'Dark':'Light'}</button></Link>
          </li>
        </ul>
        
        {loginUser ? (
          <Link to="/user">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              User
            </div>
          </Link>
        ) : (
          <Link to="/signUp">
            <div className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
              Sign Up
            </div>
          </Link>
        )}
      </div>
    </div>

    {/* Mobile Search Bar */}
    <div className="md:hidden pb-4 flex items-center gap-2">
      <input
        type="text"
        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search movies..."
        onChange={handelChange}
      />
      <button 
        onClick={handleSearch}
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-sm"
      >
        Search
      </button>
    </div>
  </div>
</nav>
    // <div className="border-black bg-black text-white flex justify-around items-center p-4 max-h-10">
    //   <div className="flex justify-between gap-4">
    //     <div>MovieBuzz</div>
    //     <input
    //       type="text"
    //       className="border boder-white"
    //       placeholder="Search movies"
    //       onChange={handelChange}
    //     />
    //     <button onClick={handleSearch}>Search</button>
    //   </div>
    //   <div className="flex gap-5">
    //     <ul className="flex gap-5">
    //       <Link to="/">
    //         <li className="text-white">Movies</li>
    //       </Link>

    //       <Link to="/about">
    //         <li className="text-white">About</li>
    //       </Link>
    //       <Link to="/contact">
    //         <li className="text-white">Contact</li>
    //       </Link>
    //     </ul>
    //     {loginUser ? (
    //       <Link to="/user">
    //         <div className="text-white">User</div>
    //       </Link>
    //     ) : (
    //       <Link to="/signUp">
    //         <div className="text-white">SignUp</div>
    //       </Link>
    //     )}
    //   </div>
    // </div>
  );
}
