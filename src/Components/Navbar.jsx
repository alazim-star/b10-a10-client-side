import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to toggle navbar styles
  const handleScrolled = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolled);
    return () => window.removeEventListener('scroll', handleScrolled);
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline ' : 'hover:bg-[#0172b1]'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allVisas"
          className={({ isActive }) =>
            isActive ? 'underline text-green-500' : 'hover:bg-[#0172b1]'
          }
        >
          All visas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addVisa"
          className={({ isActive }) =>
            isActive ? 'underline' : 'hover:bg-[#0172b1]'
          }
        >
         Add Visa
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myAddedVisas"
          className={({ isActive }) =>
            isActive ? 'underline text-green-500' : 'hover:bg-[#0172b1]'
          }
        >
        My added visas
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/visaApplication"
          className={({ isActive }) =>
            isActive ? 'underline text-green-500' : 'hover:bg-[#0172b1]'
          }
        >
     My Visa applications
        </NavLink>
      </li>
    </>
  );

  return (
    <header
      className={`${
        scrolled ? 'backdrop-blur-sm bg-white/60 text-black' : 'bg-green-600 text-white'
      } w-full sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="navbar mx-auto container h-20">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for mobile */}
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
              {links}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="btn btn-ghost text-xl">
            <img
              className="w-64"
              src="https://i.ibb.co.com/6WDnSDM/VISA-NAVIGATOR-12-3-2024-1.png"
              alt=""
            />
          </NavLink>
        </div>

        {/* Navbar Center for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a className="btn bg-green-500 text-white hover:bg-green-600">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
