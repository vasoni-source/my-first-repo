import { createSlice } from "@reduxjs/toolkit";
import { enrollment,myEnrollemnts } from "../thunk/enrollmentThunk";

const enrollementSlice = createSlice({
  name: "enrollement",
  initialState: {
    enrollments:[],
    loading:false
  },
  extraReducers: (builder) => {
    builder.addCase(enrollment.fulfilled, (state, action) => {
      state.enrollments.push(action.payload);
    }),
    builder.addCase(enrollment.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(enrollment.rejected, (state, action) => {
      state.loading = false;
    }),

    builder.addCase(myEnrollemnts.fulfilled, (state, action) => {
      state.enrollments = action.payload;
    }),
    builder.addCase(myEnrollemnts.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(myEnrollemnts.rejected, (state, action) => {
      state.loading = false;
    });
  }
});

export default enrollementSlice.reducer;