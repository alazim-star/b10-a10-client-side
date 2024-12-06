import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="bg-green-600 text-white">
        <div className="footer container mx-auto p-10">
          <nav>
            <h6 className="footer-title text-xl">Services</h6>
            <a className="link link-hover hover:text-blue-300">Apply for a visa</a>
            <a className="link link-hover hover:text-blue-300">Apply for Passport</a>
            <a className="link link-hover hover:text-blue-300">Check visa requirements</a>
            <a className="link link-hover hover:text-blue-300">Customs Information</a>
            <a className="link link-hover hover:text-blue-300">Embassies and Consulates</a>
            <a className="link link-hover hover:text-blue-300">Privacy Statement</a>
            <a className="link link-hover hover:text-blue-300">Terms of Service</a>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Company</h6>
            <a className="link link-hover hover:text-blue-300">About us</a>
            <a className="link link-hover hover:text-blue-300">Finish an Application</a>
            <a className="link link-hover hover:text-blue-300">Manage My Applicants</a>
            <a className="link link-hover hover:text-blue-300">Manage My Orders</a>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <img src="https://i.ibb.co.com/KFjvFWJ/Instagram.png" alt="" />
              </a>
              <a>
                <img className="h-16" src="https://i.ibb.co.com/sspsgk6/Facebook.png" alt="" />
              </a>
              <a>
                <img src="https://i.ibb.co.com/ngCN4vr/Twitter.png" alt="" />
              </a>
              <a>
                <img src="https://i.ibb.co.com/N7hB9FM/Linkedin.png" alt="" />
              </a>
            </div>
            <div className="lg:flex gap-10">
              <img src="https://i.ibb.co.com/DCns0KG/google-play-store.png" alt="" />
              <label className="input input-bordered flex items-center gap-2 my-5">
                <input type="text" className="grow" placeholder="Search" />
                <img className="h-10" src="https://i.ibb.co.com/XF1PkBV/5613.jpg" alt="" />
              </label>
            </div>
          </nav>
        </div>
        <hr />
        <Link to="/" onClick={handleScrollToTop}>
          <div className="lg:flex container mx-auto justify-between lg:mb-2">
            <img
              className="lg:w-64"
              src="https://i.ibb.co.com/6WDnSDM/VISA-NAVIGATOR-12-3-2024-1.png"
              alt=""
            />
            <p>© 2003-2024 Visa_Navigator.com, Inc. All Rights Reserved.</p>
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
