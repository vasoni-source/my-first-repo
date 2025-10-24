import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice"
import movieReducer from "../features/Movies/movieSlice"
export const store = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
    }
})
export default store;