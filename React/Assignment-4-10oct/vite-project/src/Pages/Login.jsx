import React, { useEffect, useRef, useState } from "react";
import { UserContext } from "../context/User";
// import { AuthContext } from "../context/User";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logOutUser } from "../features/User/userSlice";
import "./Login.css";
export default function Login() {
  const admin = {
    username: "admin",
    password: "1234",
  };
  const navigator = useNavigate();
  // const { state ,dispatch } = useContext(UserContext);
  // console.log("user from local from login", user, "islogin value", isLogin);
  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch();
  const username1 = useRef("");
  const password1 = useRef("");
  const [error, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempError = "";
    if (
      username1.current.value != admin.username ||
      password1.current.value != admin.password
    ) {
      tempError = "username or password is incorrect";
    } else {
      console.log("correct");
      localStorage.setItem("username", username1.current.value);
      localStorage.setItem("password", password1.current.value);
      // setIsLogin(true);
      // dispatch({type:"login",payload:{ username1, password1 }})
      const userName = username1.current.value;
      const passWord = password1.current.value;
      dispatch(loginUser({userName,passWord}));
      navigator("/products");
    }

    setErrors(tempError);
    console.log("user info", username1.current.value, password1.current.value);
  };
  return (
    <div className="login-div">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="login-username">
          <label htmlFor="">Name:</label>
          <input type="text" name="username" ref={username1} />
        </div>
        <div className="login-password">
          <label htmlFor="">Password:</label>

          <input type="text" name="password" ref={password1} />
        </div>
        {error ? <p className="login-error">{error}</p> : null}
        <button type="submit" className="product-submit-btn">
          Log In
        </button>
      </form>
    </div>
  );
}
