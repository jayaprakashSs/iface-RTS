import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css"; // Importing animate.css for background animation effects

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const staticMobile = "1234567890";
    const staticOtp = "1234";

    if (mobile === staticMobile && otp === staticOtp) {
      navigate("/dashboard");
    } else {
      alert("Invalid Mobile Number or OTP");
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center animate__animated animate__fadeIn animate__delay-0.5s"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/2120435/pexels-photo-2120435.jpeg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
      }}
    >
      {/* Login Form Container with Zoom-in Animation */}
      <div className="bg-white shadow-xl rounded-lg p-12 w-full max-w-md animate__animated animate__zoomIn animate__delay-0.5s">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800">iface login</h2>
          <p className="text-lg text-gray-600">Please enter your mobile number and OTP to login.</p>
        </div>

        {/* Mobile Number Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2">Mobile Number</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out animate__animated animate__zoomIn animate__delay-1s"
          />
        </div>

        {/* OTP Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out animate__animated animate__zoomIn animate__delay-1s"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out font-semibold animate__animated animate__fadeInUp animate__delay-2s"
        >
          Login
        </button>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <a href="" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;