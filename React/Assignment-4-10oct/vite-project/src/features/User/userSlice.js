import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLogin: false,
};
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers :{
        loginUser:(state,action)=>{
            state.user = action.payload;
            state.isLogin = true;
        },
        logOutUser :(state)=>{
            state.isLogin = false
        },  
    }
});
export const {loginUser,logOutUser} = userSlice.actions;
export default userSlice.reducer;
