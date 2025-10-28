import React from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
export default function PrivateRoute() {
  // const {state,dispatch}= useContext(UserContext);
   const user = useSelector((state)=>state.user.loginUser);
   console.log("%%%%%%%%%%%%%%%%%%%%%");
  if (user) {
    return <Outlet /> ;
  } 
  else {
    return <Navigate to="/login" replace /> ;
  }
}