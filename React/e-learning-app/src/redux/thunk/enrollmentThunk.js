import { createAsyncThunk } from "@reduxjs/toolkit";

export const enrollment = createAsyncThunk(
  "enrollment/enroll",
  async (courseId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/enrollments/${courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message);
      }

      return data.enrollment;
    } catch (err) {
      return rejectWithValue("Enrollment failed");
    }
  }
);


export const myEnrollemnts = createAsyncThunk(
  "enrollment/myEnrollments",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/enrollments/my-courses",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch enrollments");
    }
  }
);
