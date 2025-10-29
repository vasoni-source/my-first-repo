import React from "react";
import "./User.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import { LogOut, Heart } from "lucide-react";
export default function User() {
  const loginUser = useSelector((state) => state.user.loginUser);
  const favMovies = useSelector((state) => state.movie?.favouriteMovies);
  const recentlyViewedmovies = useSelector(
    (state) => state.movie?.recentlyViewed
  );
  console.log("recently movies from user",recentlyViewedmovies)
  const dispatch = useDispatch();
  const navigator = useNavigate();
  console.log("++++++", loginUser?.email);
  console.log("favmovies", favMovies);
  const handleLogOut = () => {
    dispatch(logout());
    navigator("/login");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
              <p className="text-slate-600 mt-1">{loginUser?.email}</p>
            </div>
            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
            >
              <LogOut size={18} />
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="text-red-500" size={28} fill="currentColor" />
          <h2 className="text-3xl font-bold text-slate-900">
            Favourite Movies
          </h2>
          <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
            {favMovies?.length || 0}
          </span>
        </div>

        {favMovies && favMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden group">
                  <img
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={movie?.poster[0]}
                    alt={movie?.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">
                    {movie?.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {movie?.description}
                  </p>

                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 font-medium">
                    <Heart size={18} fill="currentColor" />
                    Remove From Favourite
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="mx-auto text-slate-300 mb-4" size={64} />
            <p className="text-slate-500 text-lg">No favourite movies yet</p>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h4 className="text-2xl font-bold text-gray-800 mb-6">
          Recently viewed movies
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recentlyViewedmovies?.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={movie.poster[0]}
                  alt={movie.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
