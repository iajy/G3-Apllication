import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [eye, setEye] = useState(false);
  const toggleEye = () => {
    setEye(!eye);
  };
  const [password,setPassword] = useState("12345678");
  const [mail,setMail] = useState("reactdev@gmail.com");

  const navigate = useNavigate();

  const handleLogin = () =>{
    
    if (mail ==="reactdev@gmail.com" && password === "12345678") {
      navigate("/dashboard");
      toast.success("Login Successfull");
    }else{
      toast.error("Wrong Credentials")
      console.log("error")
    }
    
  }



  return (
    <div className="flex flex-col mx-15">
      <img src="public\images.png" alt="" width={100} />
      <div className="flex flex-col gap-4">
        <span className="text-4xl font-medium">Sign In to your Account</span>
        <span className="text-gray-700">
          Welcome back! please enter your detail
        </span>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="relative ">
            <MdOutlineEmail className="absolute top-3.5 left-1 text-gray-500 " />
            <input
              type="email"
              name="mail"
              
              placeholder="Email"
              required
              value={mail}
              onChange={(e)=>setMail(e.target.value)}
              className="border rounded border-gray-400 py-2 px-7 w-full focus:outline-1 focus:outline-blue-600"
            />
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute top-3.5 left-1 text-gray-500 " />
            <input
              type={!eye ? "password" : "text"}
              name=""
              placeholder="Password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="border rounded border-gray-400  py-2 px-7 w-full focus:outline-1 focus:outline-blue-600"
            />
            {eye ? (
              <AiOutlineEye
                className="absolute top-3.5 right-3 cursor-pointer text-gray-600"
                onClick={toggleEye}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute top-3.5 right-3 cursor-pointer text-gray-600"
                onClick={toggleEye}
              />
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <div>
              <span className="text-[#145dd1]">Forgot Password?</span>
            </div>
          </div>
          <button type="submit" className="bg-[#145dd1] p-3 rounded text-white focus:bg-blue-900">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
