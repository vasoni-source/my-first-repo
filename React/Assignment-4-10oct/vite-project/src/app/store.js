import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/User/userSlice"
import productReducer from "../features/Product/productSlice"
export const store = configureStore({
    reducer:{
        user:userReducer,
        product:productReducer
    }
})