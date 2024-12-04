import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[600px] relative "
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/zXH3gZq/pexels-andreimike-1271619.jpg)",
      }}
    >
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-lg w-[350px]">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          ✕
        </button>
        {/* Login Form */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form>
          {/* Email Input */}
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full pl-10 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-3.5 left-3 w-6 h-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m0 0a4 4 0 110-8 4 4 0 010 8zm4 0v8"
              />
            </svg>
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full pl-10 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-3.5 left-3 w-6 h-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11v2m0 4h.01M6.938 8h10.124M7 16h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn bg-green-600 w-full">Login</button>

          {/* Register Link */}
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Banner;
