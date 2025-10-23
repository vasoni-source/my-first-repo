import React from 'react'
import { useSelector} from 'react-redux'
export default function Login() {
  const users = useSelector((state) =>state.user.users);
  console.log("users from login");
  return (
    <div>
      <form action="" className='flex flex-col'>
        <input type="text" placeholder='Enter your email id here'/>
        <input type="text" placeholder='Enter your password here'/>
        <button>Login</button>
      </form>
    </div>
  )
}
