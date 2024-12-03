import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolled);
    return () => window.removeEventListener('scroll', handleScrolled);
  }, []);

  const links = (
    <>
      <NavLink to="/" className="hover:underline">
        Home
      </NavLink>
      <NavLink to="/about" className="hover:underline">
        About
      </NavLink>
      <NavLink to="/services" className="hover:underline">
        Services
      </NavLink>
      <NavLink to="/contact" className="hover:underline">
        Contact
      </NavLink>
    </>
  );

  return (
    <header
      className={`${
        scrolled ? 'backdrop-blur-sm bg-white/60' : 'bg-green-600'
      } w-full sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>{links}</li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            daisyUI
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
