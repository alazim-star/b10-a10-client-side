import { FaRocketchat } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

const VisaNavigator = () => {
  return (
    <div className="relative py-10 mt-5">
      {/* Image with reduced brightness */}
      <img
        className="relative w-full h-56 object-cover brightness-50"
        src="https://i.ibb.co/TwP5M80/dubai-marina-skyline-2c8f1708f2a1.jpg"
        alt=""
      />

      {/* Country Selection Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="flex flex-wrap gap-4 bg-white bg-opacity-20 p-4 rounded-md shadow-md w-full max-w-screen-md">
          {/* Citizen Dropdown */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2">
            <label htmlFor="citizen" className="text-white">
              For citizens of
            </label>
            <select
              id="citizen"
              className="select select-bordered w-full sm:w-64"
            >
              <option>United States of America</option>
              <option>Canada</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Destination Dropdown */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2">
            <label htmlFor="destination " className="text-white" >
              Traveling to
            </label>
            <select
              id="destination"
              className="select select-bordered w-full sm:w-64"
            >
              <option>Which country?</option>
              <option>Canada</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>

         
        </div>
      </div>

      {/* Contact Section */}
      <div className="hidden absolute lg:mb-10 bottom-4 left-0 right-0 lg:flex flex-col sm:flex-row justify-center items-center gap-4 text-white text-center">
        <p>Need help?</p>
        <a
          href=""
          className="text-green-600 flex items-center gap-2 lg:text-3xl lg:font-bold"
        >
          <FaRocketchat /> Chat with us
        </a>
        <p className="">Call us 7 days a week</p>
        <a
          href="#"
          className="text-green-600 flex items-center  gap-2 lg:text-3xl lg:font-bold"
        >
    <MdAddIcCall /> +9-800-205-5540
        </a>
      </div>
    </div>
  );
};

export default VisaNavigator;
