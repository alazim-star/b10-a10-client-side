
import React from "react";
import Marquee from "react-fast-marquee";


const Banner = () => {
  

  return (
    <div>


<div className="carousel h-[550px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/tYh04c4/Poland-Student-Visa-Success-Rate-for-International-Students.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle text-5xl">❮</a>
      <a href="#slide2" className="btn btn-circle text-5xl">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/wr9qBj1/UK-Student-Visa-Success-Rate-for-International-Students.jpg"
      className="lg:w-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle text-5xl">❮</a>
      <a href="#slide3" className="btn btn-circle text-5xl">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/8BQFhGf/1711686509.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle text-5xl">❮</a>
      <a href="#slide4" className="btn btn-circle text-5xl">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/Y7w0VMF/how-to-improve-your-chances-of-getting-a-canadian-student-visa-details.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle text-5xl">❮</a>
      <a href="#slide1" className="btn btn-circle text-5xl">❯</a>
    </div>
  </div>
</div>

      {/* Login Form */}
      <div className="hidden lg:block absolute right-20 top-96 transform -translate-y-1/2 p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-lg w-[350px]">
        <button className="absolute text-3xl top-4 right-4 text-gray-400 hover:text-green-600">
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form>
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
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button className="p-3 bg-green-600 w-full">Login</button>
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
