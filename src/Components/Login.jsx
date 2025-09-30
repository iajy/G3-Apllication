import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);

  const [password, setPassword] = useState("12345678");
  const [mail, setMail] = useState("reactdev@gmail.com");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://13.210.33.250/api/login", {
        email: mail,
        password: password,
      });

      // login success → you get user + companies + tokens
      const data = res.data;
      console.log("Login Response:", data);

      // save tokens + company id (first company by default)
      localStorage.setItem("token", data.access_token);
      if (data.companies && data.companies.length > 0) {
        localStorage.setItem("company_id", data.companies[0].id);
      }

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mx-15">
      <img src="images.png" alt="" width={100} />
      <div className="flex flex-col gap-4">
        <span className="text-4xl font-medium">Sign In to your Account</span>
        <span className="text-gray-700">
          Welcome back! Please enter your details
        </span>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="relative ">
            <MdOutlineEmail className="absolute top-3.5 left-1 text-gray-500 " />
            <input
              type="email"
              placeholder="Email"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="border rounded border-gray-400 py-2 px-7 w-full focus:outline-1 focus:outline-blue-600"
            />
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute top-3.5 left-1 text-gray-500 " />
            <input
              type={!eye ? "password" : "text"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded border-gray-400 py-2 px-7 w-full focus:outline-1 focus:outline-blue-600"
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
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <span className="text-[#145dd1] cursor-pointer">
              Forgot Password?
            </span>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#145dd1] p-3 rounded text-white focus:bg-blue-900"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
