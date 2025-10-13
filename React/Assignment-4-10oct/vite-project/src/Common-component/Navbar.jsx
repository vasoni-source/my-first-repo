import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"
export default function Navbar() {
  const navigator = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
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
        <button onClick={handlelogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </ul>
      
      
    </div>
  )
}