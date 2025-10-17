import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../context/User';
import "./Navbar.css"
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logOutUser } from "../features/User/userSlice";
export default function Navbar() {
  //  const { state,dispatch} = useContext(UserContext);
  //  console.log("islogin value from login",isLogin)
  const navigator = useNavigate();
  const user = useSelector((state)=>state.user.user)
  const isLogin = useSelector((state)=>state.user.isLogin)
    const dispatch = useDispatch();
  const handleLogout = ()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    // setIsLogin(false);
    // dispatch({type:"logout"})
dispatch(logOutUser());
    // console.log("islogin from logout fn",isLogin)
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
        // state?.isLogin==false ?  (<button onClick={handlelogin}>Login</button>):(<button onClick={handleLogout}>Logout</button>)
        isLogin==false ?  (<button onClick={handlelogin}>Login</button>):(<button onClick={handleLogout}>Logout</button>)

       }
        
      </ul>
      
      
    </div>
  )
}