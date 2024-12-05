import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa, visas, setVisas }) => {
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

        {/* Visa Details */}
        <div className="text-gray-700 space-y-2">
          <p>
            <strong>Visa Type:</strong> {visa.visaType}
          </p>
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
          <Link to={`/viewDetails/${visa._id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
              See Details
            </button>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
