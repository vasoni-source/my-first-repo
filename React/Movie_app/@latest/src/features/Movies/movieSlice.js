import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./movieThunk";
const initialState = {
  movies: [],
  status:null,
  error:null,
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    
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

export default movieSlice.reducer;
