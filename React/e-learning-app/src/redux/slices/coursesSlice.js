import { createSlice } from "@reduxjs/toolkit";
import {fetchCourses,fetchCourseDetail} from "../thunk/coursesThunk.js";
const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    courseDetail:{},
    loading: false,
    error: null,
  },
//   reducers: {
//     fetchCoursesStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchCoursesSuccess(state, action) {
//       state.loading = false;
//       state.courses = action.payload;
//     },
//     fetchCoursesFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCourseDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.courseDetail = action.payload;
      })
      .addCase(fetchCourseDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export default coursesSlice.reducer;