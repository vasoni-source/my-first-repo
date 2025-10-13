import React, { useEffect, useRef, useState } from "react";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const admin = {
    username: "admin",
    password: "1234",
  };
  const navigator = useNavigate();
  const { user, isLogin } = useContext(UserContext);
  console.log("user from local from login", user, "islogin value", isLogin);
  const username1 = useRef("");
  const password1 = useRef("");
  const [error, setErrors] = useState("");
  //   const [isLogin,setIsLogin] = useState(false);
  //   useEffect(() => {
  //     const storedUserName = localStorage.getItem("username");
  //     const storedPassword = localStorage.getItem("password");
  //     // console.log("local data", storedUserName,storedPassword);
  //     if(storedUserName && storedPassword){
  //         console.log("User is Logged in ")
  //         setIsLogin(true);
  //     }
  //   }, []);

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
      navigator("/products")
    }

    setErrors(tempError);
    console.log("user info", username1.current.value, password1.current.value);
    
  };
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" ref={username1} />
        <input type="text" name="password" ref={password1} />
        {error ? <p className="login-error">{error}</p> : null}
        <button type="submit" className="product-submit-btn">
          Log In
        </button>
      </form>
    </div>
  );
}
