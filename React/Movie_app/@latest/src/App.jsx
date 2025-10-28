import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Common_component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import User from "./Pages/User/User";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/SignUp/Login/Login";
import MovieDetail from "./Pages/MovieDetail/MovieDetail"
// import PrivateRoute from "./protected_route/PrivateRoute.js";
import PrivateRoute from "./protected_route/PrivateRoute";
import ErrorPage from "./Pages/404Page/ErrorPage";
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<PrivateRoute/>}>
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/error" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
