import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
  const visa = useLoaderData(); // Getting the visa details

  return (
    <div className="cursor-pointer h-screen bg-gray-100 flex justify-center items-center">
      <div className=" max-w-3xl p-6 bg-white rounded-xl shadow-xl overflow-hidden flex items-center space-x-6">
        
        {/* Left Section: Country Image & Basic Details */}
        <div className="flex flex-col items-center space-y-4">
          <img
            className="object-cover border-2 border-gray-300 rounded-xl"
            src={visa.countryImage} 
            alt={visa.countryName}
          />
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">{visa.countryName}</h2>
            <p className="text-gray-600 text-sm">{visa.visaType}</p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">
              <strong>Fee:</strong> {visa.Fee}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Validity:</strong> {visa.validity}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Processing Time:</strong> {visa.processingTime}
            </p>
          </div>
        </div>

        {/* Right Section: Additional Information */}
        <div className="flex flex-col justify-between flex-grow space-y-4">
          {/* Visa Details */}
          <div className="text-gray-600 space-y-2">
            <p className="text-lg">
              <strong>Description:</strong> {visa.description}
            </p>
            <p className="text-lg">
              <strong>Age Restriction:</strong> {visa.ageRestriction}
            </p>
            <p className="text-lg">
              <strong>Application Method:</strong> {visa.applicationMethod}
            </p>
          </div>

          {/* Required Documents */}
          <div className="space-y-2">
            <p className="font-semibold text-lg">Required Documents:</p>
            <ul className="list-disc pl-6">
              {visa.requiredDocuments.map((doc, index) => (
                <li key={index} className="text-gray-600">{doc}</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Link to={`/viewDetails/${visa._id}`}>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                See Details
              </button>
            </Link>
            {/* You can add other buttons like edit or delete here */}
          </div>
        </div>
      </div>   
    </div>
  );
};

export default ViewDetails;
