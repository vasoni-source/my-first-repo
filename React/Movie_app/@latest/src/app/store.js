import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice"
import movieReducer from "../features/Movies/movieSlice"
import themeReducer from "../features/Theme/themeSlice"
export const store = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        theme:themeReducer,
    }
})
export default store;