import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { addUser } from '../../features/User/UserThunk';
export default function SignUp() {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.user.users);
    const [formData,setFormData] = useState({});
    console.log("users from signup",users);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("formdata from signup",formData)
        dispatch(addUser(formData))
    }
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
        
    }
  return (
    <div>
        <h1>SignUp</h1>
        <h4>Already have account? <Link to="/login">Login here</Link></h4>
        <form action="" className='flex-col gap-y-5 w-xl '>
            <div className='flex justify-between items-center'>
                <label htmlFor="">Name</label>
                <input name='name' value={formData.name} onChange={handleChange} type="text" placeholder='Enter your name here'className='border border-black rounded-lg'/>
            </div>
            <div className='flex justify-between items-center'>
                <label htmlFor="">Email id</label>
                <input name='email' value={formData.email} onChange={handleChange} type="text" placeholder='Enter your email id here'className='border border-black rounded-lg'/>
            </div>
            <div className='flex justify-between items-center'>
                <label htmlFor="">Password</label>
                <input name='password' value={formData.password} onChange={handleChange} type="text" placeholder='Enter your password here'className='border border-black rounded-lg'/>
            </div>
        </form>
        <button onClick={handleSubmit}>SignUp</button>
       
    </div>
  )
}
