import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa,visas,setVisas}) => {
  return (
   <div >
     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
      {/* Country Image */}
      <img className="w-full h-48 object-cover" src={visa.countryImage}
       alt={visa.countryName} />

      <div className="px-6 py-4">
        {/* Country Name */}
        <h2 className="font-bold text-xl mb-2">{visa.countryName}</h2>

        {/* Visa Type */}
        <p className="text-gray-700 text-base mb-1">
          <strong>Visa Type:</strong> {visa.visaType}
        </p>

        {/* Processing Time */}
        <p className="text-gray-700 text-base mb-1">
          <strong>Processing Time:</strong> {visa.processingTime}
        </p>

        {/* Fee */}
        <p className="text-gray-700 text-base mb-1">
          <strong>Fee:</strong> {visa.Fee}
        </p>

        {/* Validity */}
        <p className="text-gray-700 text-base mb-1">
          <strong>Validity:</strong> {visa.validity}
        </p>

        {/* Application Method */}
        <p className="text-gray-700 text-base mb-4">
          <strong>Application Method:</strong> {visa.applicationMethod}
        </p>
      </div>

      {/* See Details Button */}
      <div className="px-6 py-2">
  <Link to={`/viewDetails/${visa._id}`}>
    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
      See Details
    </button>
  </Link>
</div>

    </div>
   </div>  

  );
};

export default VisaCard;
