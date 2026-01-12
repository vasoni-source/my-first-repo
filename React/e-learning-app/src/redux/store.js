import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import courseReducer from "./slices/coursesSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});

export default store;