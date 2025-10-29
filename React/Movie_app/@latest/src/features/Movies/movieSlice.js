import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movieThunk";
const allMovies = JSON.parse(localStorage.getItem("movies")) || [];
// const favMovies = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
// const recentlyViewedM = JSON.parse(localStorage.getItem("recentlyViewedmovies")) || [];
const initialState = {
  movies: allMovies,
  allMovies: allMovies,
  singleMovie: null,
  favouriteMovies: [],
  recentlyViewed : [],
  status: null,
  error: null,
};
const maxSize=5;
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getSingleMovie: (state, action) => {
      state.singleMovie = action.payload;
    },
    addFavouriteMovies: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
    filteredMovies: (state, action) => {
      if (action.payload === "All") {
        state.movies = state.allMovies;
      } else {
        state.movies = state.allMovies.filter((movie) =>
          movie.genre.includes(action.payload)
        );
      }
    },
    sortMovies: (state, action) => {
      state.movies = action.payload;
    },
    searchedMovie : (state,action)=>{
      state.movies = action.payload;
    },
    recentlyViewedMovies: (state, action) => {
      const newItem = action.payload;
      state.recentlyViewed.unshift(newItem);
      if(state.recentlyViewed.length>maxSize){
        state.recentlyViewed.pop()
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeded";
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      });
  },
});
export const {
  getSingleMovie,
  addFavouriteMovies,
  filteredMovies,
  sortMovies,
  searchedMovie,
  recentlyViewedMovies
} = movieSlice.actions;
export default movieSlice.reducer;
