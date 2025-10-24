import React from "react";
import "./User.css";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../features/User/userSlice";
import { useNavigate } from "react-router-dom";
export default function User() {
  const loginUser = useSelector((state) => state.user.loginUser);
  const dispatch  = useDispatch();
  const navigator = useNavigate();
  console.log("++++++", loginUser?.email);
  const handleLogOut = ()=>{
    dispatch(logout());
    navigator("/login")
  }
  return (
    <div className="flex justify-center items-center h-screen border border-black">
      <div className="border border-black p-5 h-100 w-100 flex  flex-col items-center justify-center gap-5">
        <h3>{loginUser?.email}</h3>
        <button className="btn btn-blue" onClick={handleLogOut}>Log out</button>
      </div>
    </div>
  );
}
