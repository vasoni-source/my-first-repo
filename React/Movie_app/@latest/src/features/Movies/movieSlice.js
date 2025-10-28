import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movieThunk";
const initialState = {
  movies: [],
  singleMovie : null,
  status:null,
  error:null,
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getSingleMovie : (state,action)=>{
      state.singleMovie = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        (state.status = "loading")
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        (state.status = "succeded") 
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      });
  },
});
export const {getSingleMovie} = movieSlice.actions;
export default movieSlice.reducer;
