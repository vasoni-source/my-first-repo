import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import courseReducer from "./slices/coursesSlice";
import enrollemntReducer from "./slices/enrollemntSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    enrollment:enrollemntReducer
  },
});

export default store;