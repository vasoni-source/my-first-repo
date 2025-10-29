import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../features/Movies/movieThunk";
import {
  sortMovies,
  recentlyViewedMovies,
} from "../../features/Movies/movieSlice";
import {
  addFavouriteMovies,
  filteredMovies,
} from "../../features/Movies/movieSlice";
export default function Home() {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const movies = useSelector((state) => state.movie?.movies);
  const allMovies = useSelector((state) => state.movie?.allMovies);
  console.log("movies from home", movies.results);

  useEffect(() => {
    if (!allMovies?.length) {
      dispatch(getMovies());
    }
  }, [dispatch, allMovies]);
  const handleNavigate = (movie) => {
    navigator(`/movie/${movie.id}`);
    // localStorage.setItem("recentlyViewedmovies",JSON.stringify(movie))
    dispatch(recentlyViewedMovies(movie));
  };
  const handleFav = (movie) => {
    dispatch(addFavouriteMovies(movie));
    //  localStorage.setItem("favouriteMovies",JSON.stringify(movie));
  };

  const allOptions = [
    { id: 1, label: "Action" },
    { id: 2, label: "Sci-Fi" },
    { id: 3, label: "Drama" },
    { id: 4, label: "Thriller" },
    { id: 5, label: "Romance" },
    { id: 6, label: "Crime" },
    { id: 7, label: "Horror" },
    { id: 8, label: "Mystery" },
    { id: 9, label: "Comedy" },
    { id: 10, label: "Fantasy" },
    { id: 11, label: "Adventure" },
    { id: 12, label: "Heist" },
    { id: 13, label: "Musical" },
  ];
  const [selectedValue, setSelectedValue] = useState("All");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    dispatch(filteredMovies(selectedValue));
  }, [selectedValue, dispatch]);
  console.log("selected value", selectedValue);
  const [sortBy, setSortBy] = useState("title");
  const sortedMovies = useMemo(() => {
    const sortedArray = [...movies.results].sort((a, b) => {
      if (sortBy == "year" || sortBy == "rating") {
        return b[sortBy] - a[sortBy];
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    return sortedArray;
  }, [sortBy, movies]);
  console.log("sorted Movies", sortedMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(sortedMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = sortedMovies.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  console.log("current movies",currentMovies)

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="w-full sm:w-auto">
            <select
              value={selectedValue}
              onChange={handleSelectChange}
              className="w-full sm:w-64 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer hover:border-gray-400 transition-colors"
            >
              <option value="All">All Categories</option>
              {allOptions.map((option) => (
                <option key={option.id} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label
              htmlFor="sort-select"
              className="text-sm font-medium text-gray-700 whitespace-nowrap"
            >
              Sort by:
            </label>
            <select
              id="sort-select"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
              className="flex-1 sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer hover:border-gray-400 transition-colors"
            >
              <option value="title">Title (A-Z)</option>
              <option value="year">Year (Newest)</option>
              <option value="rating">Rating (Highest)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {currentMovies?.map((movie) => (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
            key={movie.id}
          >
            <div className="aspect-[2/3]">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1 text-gray-900 line-clamp-1">
                {movie.title}
              </h3>
              <p
                className="text-gray-600 text-xs line-clamp-2"
                onClick={() => handleNavigate(movie)}
              >
                {movie.overview}
              </p>
            </div>
            <button
              onClick={() => handleFav(movie)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add to Favourite
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 py-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
