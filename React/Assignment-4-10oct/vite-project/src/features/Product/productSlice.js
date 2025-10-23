import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allProduct:null,
    singleProduct :null,
}
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        allProduct : (state,action)=>{
            state.allProduct = action.payload
        },
        singleProduct : (state,action)=>{
            state.singleProduct = action.payload
        },
    }
})
export const {allProduct,singleProduct} = productSlice.actions;
export default productSlice.reducer;
