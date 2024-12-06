import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [visaCategories, setVisaCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign out successful"))
      .catch((error) => console.error("Error:", error.message));
  };

  // Fetch visa categories on mount
  useEffect(() => {
    fetch('http://localhost:5000/visa')  // Replace this with your API endpoint
      .then(res => res.json())
      .then(data => {
        setVisaCategories(data);
      })
      .catch(err => console.error("Error fetching visas:", err));
  }, []);

  const handleScrolled = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // Navigate to the filtered visas page
    navigate(`/allVisas?category=${event.target.value}`);
  };

  const links = (
    <>
      <a className="mr-3" >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'lg:bg-yellow-500 lg:p-3 p-5 underline text-black ' :  'lg:hover:bg-blue-500 p-3 '
          }
        >
          Home
        </NavLink>
      </a>
      <a className="mr-3" >
        <NavLink
          to="/allVisas"
          className={({ isActive }) =>
            isActive ? 'lg:bg-yellow-500 lg:p-3 p-5 underline text-black ' :  'lg:hover:bg-blue-500 p-3 '
          }
        >
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="bg-green-600 outline-none "
          >
            <option value="All" disabled={selectedCategory === "All"}>All visas</option>
            <option value="Tourist">Tourist</option>
            <option value="Student">Student</option>
            <option value="Official">Official</option>
            <option value="Working">Working</option>
          </select>
        </NavLink>
      </a>
      <a className="mr-3" >
        <NavLink
          to="/addVisa"
          className={({ isActive }) =>
            isActive ? 'lg:bg-yellow-500 lg:p-3 p-5 underline text-black ' :  'lg:hover:bg-blue-500 p-3 '
          }
        >
          Add Visa
        </NavLink>
      </a>
     
      <a className="mr-3" >
        <NavLink
          to="/visaApplication"
          className={({ isActive }) =>
            isActive ? 'lg:bg-yellow-500 lg:p-3 p-5 underline text-black ' :  'lg:hover:bg-blue-500 p-3 '
          }
        >
          My Visa applications
        </NavLink>
      </a>
      <a className="mr-3" >
        <NavLink
          to="/visaCard"
          className={({ isActive }) =>
            isActive ? 'lg:bg-yellow-500 lg:p-3 p-5 underline text-black ' :  'lg:hover:bg-blue-500 p-3 '
          }
        >
          My Added Visas 
        </NavLink>
      </a>
     




      {user && (
        <>
        <a>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive ? 'lg:bg-yellow-500 lg:p-3 p-5 underline text-black ' :  'lg:hover:bg-blue-500 p-3 '
          }
        >
         All Users
        </NavLink>
      </a>
        </>
      )}


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
        <div className="navbar-start ">
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
              className=" menu menu-sm dropdown-content bg-green-600  z-[50] mt-3  w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <NavLink to="/" className=" text-xl">
            <img
              className="lg:w-64 w-36"
              src="https://i.ibb.co.com/6WDnSDM/VISA-NAVIGATOR-12-3-2024-1.png"
              alt="Visa Navigator Logo"
            />
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center mr-10">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : user ? (
            <div className="flex items-center space-x-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className= " w-10 h-10 rounded-full border border-white"
                />
              )}
              <p className="text-sm lg:text-md text-white">
                Welcome, <span className=" font-bold">{user.email}</span>
              </p>
              <button
                onClick={handleSignOut}
                className="btn bg-blue-500 rounded-md text-white"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-blue-500 rounded-md text-white "
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
