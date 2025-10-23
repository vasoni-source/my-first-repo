import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./UserThunk";
const initialState = {
  users: [],
  status: "idle",
  error: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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

export default userSlice.reducer;
