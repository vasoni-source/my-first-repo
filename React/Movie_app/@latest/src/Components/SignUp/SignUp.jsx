import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../features/User/UserThunk";
import { signUp } from "../../features/User/userSlice";
export default function SignUp() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [formData, setFormData] = useState({});
  console.log("users from signup", users);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata from signup", formData);
    dispatch(addUser(formData));
    dispatch(signUp(formData));
    // localStorage.setItem('useSignupData', JSON.stringify(formData));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    // <div classNameName='flex flex-col justify-center items-center max-h-100'>
    //     <div>
    //     <h1>SignUp</h1>
    //     <h4>Already have account? <Link to="/login">Login here</Link></h4>
    //     <form action="" classNameName='flex-col gap-y-5 w-xl ' onSubmit={handleSubmit}>
    //         <div classNameName='flex justify-between items-center'>
    //             <label htmlFor="">Name</label>
    //             <input name='name' value={formData.name} onChange={handleChange} type="text" placeholder='Enter your name here'classNameName='border border-black rounded-lg'/>
    //         </div>
    //         <div classNameName='flex justify-between items-center'>
    //             <label htmlFor="">Email id</label>
    //             <input name='email' value={formData.email} onChange={handleChange} type="text" placeholder='Enter your email id here'classNameName='border border-black rounded-lg'/>
    //         </div>
    //         <div classNameName='flex justify-between items-center'>
    //             <label htmlFor="">Password</label>
    //             <input name='password' value={formData.password} onChange={handleChange} type="text" placeholder='Enter your password here'classNameName='border border-black rounded-lg'/>
    //         </div>
    //     </form>
    //     <button >SignUp</button>
    //     </div>

    // </div>

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
          className="mx-auto h-10 w-auto dark:hidden"
        />
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          className="mx-auto h-10 w-auto not-dark:hidden"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
            //   for="name"
              className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                // autocomplete="name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <label
            //   for="email"
              className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                // autocomplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                // for="password"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                // autocomplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
          Already have an acount?
          <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
