import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { login } from "../../../features/User/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // const users = useSelector((state) => state.user.users);
  const [loginUser, setLoginUser] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    const userInfo = localStorage.getItem("useSignupData");
    if (userInfo) {
      setLoginUser(JSON.parse(userInfo));
    }
  }, []);
  const [formData,setFormData] = useState({});
  console.log("loginUserInfo", loginUser);
   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("---",loginUser.email);
    if(formData.email===loginUser.email && formData.password===loginUser.password){
      
      // localStorage.setItem("loginUser",JSON.stringify(formData))
      dispatch(login(formData));
      setError(null);
      alert("successfully loged in ")
      navigator("/")
    }
    
    else{
      setError("email or password is incorrect")
    }
    console.log("formdata from login",formData);
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Sign in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              className="block text-sm/6 font-medium text-black-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                autocomplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm/6 font-medium text-black-100"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
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
                onChange={handleChange}
                value={formData.password}
                required
                autocomplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        {error ? (<p>{error}</p>) : null}
      </div>

    </div>
  );
}
