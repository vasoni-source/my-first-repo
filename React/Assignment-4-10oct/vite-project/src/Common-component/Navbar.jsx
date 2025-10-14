import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/user';
import "./Navbar.css"
export default function Navbar() {
   const { user, isLogin,setIsLogin } = useContext(UserContext);
   console.log("islogin value from login",isLogin)
  const navigator = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setIsLogin(false);
    console.log("islogin from logout fn",isLogin)
    console.log("removed")
  }
  const handlelogin =()=>{
    navigator("/")
  }
  return (
    <div className='nav'>
      <div className='logo'>
        Shopify
      </div>
      <ul>
        <li><Link to="/products">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
       {
        isLogin==false ?  (<button onClick={handlelogin}>Login</button>):(<button onClick={handleLogout}>Logout</button>)
       }
        
      </ul>
      
      
    </div>
  )
}