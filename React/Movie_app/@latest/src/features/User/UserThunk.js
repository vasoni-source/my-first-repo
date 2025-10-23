import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk('users/adduser',async(userObj)=>{
    try {
        const res = await axios.post("http://localhost:5000/users",userObj);
        console.log("res from thunk",res.data)
        return res.data;


    } catch (error) {
        console.log(error)
    }
})