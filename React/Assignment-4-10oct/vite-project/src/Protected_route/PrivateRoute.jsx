import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
export default function PrivateRoute() {
  // const {state,dispatch}= useContext(UserContext);
   const user = useSelector((state)=>state.user.user)
   const isLogin = useSelector((state)=>state.user.isLogin)
    const dispatch = useDispatch();
  // console.log("login from private route",isLogin)
  if (isLogin==false) {
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
