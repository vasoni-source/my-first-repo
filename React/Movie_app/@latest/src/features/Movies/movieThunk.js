import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk('movies',async()=>{
    try {
        console.log("+++++++++==")
      const res = await axios.get("http://localhost:3000/results");
      console.log("***********",res.data);
     return res.data;
        
      } catch (error) {
        console.log("error",error)
      }
    
})