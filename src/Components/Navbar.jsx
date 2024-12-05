import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, signOutUser, loading,visa } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);

















  
  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign out successful"))
      .catch((error) => console.error("Error:", error.message));
  };

  const handleScrolled = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
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
          to="/clients"
          className={({ isActive }) =>
            isActive ? 'underline text-green-500' : 'hover:bg-[#0172b1]'
          }
        >
        My added visas
        </NavLink>
      </li>
      <li>
        <NavLink
       to='/visaApplication'
          className={({ isActive }) =>
            isActive ? 'underline text-green-500' : 'hover:bg-[#0172b1]'
          }
        >
     My Visa applications
        </NavLink>
      </li>
      <li>
        <NavLink
       to='/visaCard'
          className={({ isActive }) =>
            isActive ? 'underline text-green-500' : 'hover:bg-[#0172b1]'
          }
        >
     My Added visa card
        </NavLink>
      </li>
    </>
  );

  return (
    <header
      className={`${
        scrolled
          ? "backdrop-blur-sm bg-white/60 text-black"
          : "bg-green-600 text-white"
      } w-full sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="navbar mx-auto container h-20">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              title="Open menu"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <NavLink to="/" className="btn btn-ghost text-xl">
            <img
              className="w-64"
              src="https://i.ibb.co.com/6WDnSDM/VISA-NAVIGATOR-12-3-2024-1.png"
              alt="Visa Navigator Logo"
            />
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : user ? (
            <div className="flex items-center space-x-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border border-white"
                />
              )}
              <p className="text-sm lg:text-md text-white">
                Welcome, <span className="font-bold">{user.email}</span>
              </p>
              <button
                onClick={handleSignOut}
                className="btn bg-blue-500  rounded-md text-white"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-blue-500   rounded-md text-white"
            >
              Login
            </Link>
          )}
        </div>



  





      </div>
    </header>
  );
};

export default Navbar;
