import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk('movies',async()=>{
    try {
        
     
      const res = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",{
       headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGQ5NDg2YzljYzdhODQyYmM0NTJlNzcyZjE0YzhlMiIsIm5iZiI6MTc2MTI4NTY0NC4wMTUsInN1YiI6IjY4ZmIxNjBjYmU1YzBlM2MyMDVhMzRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ybYEEbhmXmUsJEg7hwbFl-tsAU0MEZhUCKN2OchSBIA`, // ✅ add bearer token here
        Accept: "application/json",
      },
      });
     
      console.log("response from api ",res.data);
      const stringifiedArray = JSON.stringify(res.data);
      localStorage.setItem("movies",stringifiedArray);
     return res.data;
        
      } catch (error) {
        console.log("error",error)
      }
    
})