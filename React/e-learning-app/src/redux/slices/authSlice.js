import { createSlice } from "@reduxjs/toolkit";
import { login ,register } from "../thunk/authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false
  },
  reducers: {
    // login: (state, action) => {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    }),
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    });

    // -----------------------------
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    }),
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(register.rejected, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    });
  }
});

export const {  logout } = authSlice.actions;
export default authSlice.reducer;
