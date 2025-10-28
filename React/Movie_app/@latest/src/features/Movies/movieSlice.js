import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movieThunk";
const allMovies = JSON.parse(localStorage.getItem("movies"));
const initialState = {
  movies: allMovies,
  allMovies: allMovies,
  singleMovie: null,
  favouriteMovies: [],
  status: null,
  error: null,
};

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
    }
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
  searchedMovie
} = movieSlice.actions;
export default movieSlice.reducer;
