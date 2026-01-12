import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
 try {
   const response = await fetch("http://localhost:5000/api/courses");
   const data = await response.json();
   return data;
 } catch (error) {
   throw new Error("Failed to fetch courses");
 }
});
export const fetchCourseDetail = createAsyncThunk("courses/fetchCourseDetail",async(id)=>{
    try {
        const response = await fetch(`http://localhost:5000/api/courses/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Failed to fetch course detail");
    }
})
