import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
     credentials: "include",
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  const data = await response.json();
  const token = data.token;
  localStorage.setItem("token", token);
  return data;
});
export const register = createAsyncThunk(
  "auth/register",
  async (userInfo) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
       credentials: "include",
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      throw new Error("Registration failed");
    }
    const data = await response.json();
    return data;
  }
);
