import React from "react";
import { createContext, useState, useEffect, useReducer } from "react";

export const UserContext = createContext();
export function User({ children }) {
  // const [isLogin, setIsLogin] = useState(false);
  // const [user, setUser] = useState({
  //   username: "",
  //   password: "",
  // });
  const initialState = {
    user: null,
    isLogin: false,
    allProduct: null,
    singleProduct:null,
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.payload,
          isLogin: true,
        };
      case "logout":
        return {
          ...state,
          isLogin: false,
        };
      case "fetchAllProduct":
          return {
            ...state,
            allProduct: action.payload
          };
       case "fetchSingleProduct":
          return {
            ...state,
            singleProduct: action.payload
          }   
        default:
        return state;  
    }
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    // setUser({ username, password });
    dispatch({ type: "login", payload: { username, password } });
    // console.log("user from app :", user);
    if (username && password && username !== "" && password !== "") {
      // setUser({ username, password });
      // setIsLogin(true);
      dispatch({ type: "login", payload: { username, password } });
      console.log("logged in user");
    } else {
      // setIsLogin(false);
      dispatch({ type: "logout" });
    }
    if (state?.isLogin == true) {
      console.log("logged in user");
    }
  }, [state?.isLogin]);
  

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}
// import { createContext, useEffect, useReducer, useState } from "react";

// export const AuthContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "login":
//       return {
//         ...state,
//         user : action.payload,
//         isAuthenticated: true,
//       };
//     case "logout":
//       return {
//         ...state,
//         isAuthenticated: false,
//       };
//   }
// };

// const initialState = {
//   isAuthenticated: false,
//   user : {},

// };

// export const AuthProvider = ({ children }) => {
//   //   const [user, setUser] = useState(null);
//   // const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");

//     if (storedUsername === "admin" && storedPassword === "1234") {
//       //   setUser({ username: storedUsername, password: storedPassword });
//       // setIsAuthenticated(true);
//       dispatch({ type: "store" });
//     }
//   }, []);

//   const login = (username, password) => {
//     if (username === "admin" && password === "1234") {
//       localStorage.setItem("username", username);
//       localStorage.setItem("password", password);
//       // setIsAuthenticated(true);

//       dispatch({ type: "login",payload:{username,password} });
//       return true;
//     }
//     return false;
//   };
//   const logout = () => {
//     localStorage.removeItem("username");
//     localStorage.removeItem("password");
//     // setIsAuthenticated(false);
//     dispatch({ type: "logout" });
//   };
//   return (
//     <AuthContext.Provider value={{ state, dispatch, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
