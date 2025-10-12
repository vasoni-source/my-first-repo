import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className='nav'>
      <div className='logo'>
        Shopify
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        
      </ul>
      
      
    </div>
  )
}