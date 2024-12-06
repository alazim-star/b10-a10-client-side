import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const VisaCard = ({ visa }) => {
  const { user } = useContext(AuthContext); // Get the logged-in user info
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    if (user) {
      // User is logged in, navigate to the details page
      navigate(`/viewDetails/${visa._id}`);
    } else {
      // User is not logged in, navigate to the login page
      navigate("/login", { state: `/viewDetails/${visa._id}` }); // Save the intended route
    }
  };

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-200">
      {/* Country Flag */}
      <img
        className="w-full h-48 object-cover"
        src={visa.countryImage}
        alt={visa.countryName}
      />

      {/* Card Content */}
      <div className="p-6">
        {/* Country Name */}
        <h2 className="font-bold text-2xl mb-4 text-center text-gray-800">
          {visa.countryName}
        </h2>

        {/* Visa Type */}
        <div className="flex justify-center mb-4">
          <span className="badge badge-lg bg-green-500 text-white px-4 py-1 rounded-full">
            {visa.visaType}
          </span>
        </div>

        {/* Visa Details */}
        <div className="text-gray-700 space-y-2">
          <p>
            <strong>Processing Time:</strong> {visa.processingTime}
          </p>
          <p>
            <strong>Fee:</strong> ${visa.Fee}
          </p>
          <p>
            <strong>Validity:</strong> {visa.validity}
          </p>
          <p>
            <strong>Application Method:</strong> {visa.applicationMethod}
          </p>
        </div>

        {/* Applied Date (if available) */}
        {visa.appliedDate && (
          <div className="mt-4 text-gray-600">
            <p>
              <strong>Applied Date:</strong> {visa.appliedDate}
            </p>
            <p>
              <strong>Applicant's Name:</strong> {visa.applicantName}
            </p>
            <p>
              <strong>Applicant's Email:</strong> {visa.applicantEmail}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handleSeeDetails}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
