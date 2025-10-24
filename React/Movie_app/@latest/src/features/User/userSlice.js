import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./UserThunk";
const localLogin = JSON.parse(localStorage.getItem("loginUser"))
const initialState = {
  users: [],
  loginUser:localLogin,
  signupUser:null,
  status: "idle",
  error: null,
  isLogin:false
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp :(state,action)=>{
      const formData = action.payload;
      localStorage.setItem('useSignupData', JSON.stringify(formData));
      state.signupUser = formData;
    },
    login:(state,action)=>{
      const userData = action.payload;
      localStorage.setItem('loginUser',JSON.stringify(userData));
      state.loginUser = userData;
      state.isLogin=true;
    },
    logout:(state,action)=>{
      localStorage.removeItem("loginUser");
      state.loginUser = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        (state.status = "loading")
      })
      .addCase(addUser.fulfilled, (state, action) => {
        (state.status = "succeded"), 
        // const newUser = {
        //     const id = Date.now()
        // }
        console.log("users from slice before push",state.users)
         state.users.push(action.payload);
        console.log("users from slice after push",state.users)

        // state.users = action.payload;

      })
      .addCase(addUser.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      });
  },
});
export const  {signUp,login,logout} = userSlice.actions
export default userSlice.reducer;
