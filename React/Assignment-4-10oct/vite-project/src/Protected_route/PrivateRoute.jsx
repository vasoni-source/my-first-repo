import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
export default function PrivateRoute() {
  const {state,dispatch}= useContext(UserContext);
  // console.log("login from private route",isLogin)
  if (state.isLogin==false) {
    return <Navigate to="/" replace />;
  } 
  else {
    return <Outlet />;
  }

//   return (
//     <div>
//       <Routes>
//         <Route>{!isLogin ? <Navigate to="/" /> : <Outlet/>}</Route>
//       </Routes>
//     </div>
//   );
}
