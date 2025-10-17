import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/add/todoSlice"
export const store = configureStore({
    reducer:{
        todo: todoReducer,
    }
})