import React, { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

import Swal from "sweetalert2";
import { AuthContext } from './AuthProvider';

const ViewDetails = () => {
  const visa = useLoaderData(); 
  const { user } = useContext(AuthContext); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Current date
  const currentDate = new Date().toLocaleDateString();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationData = {
      email: user?.email || '',
      firstName: formData.firstName,
      lastName: formData.lastName,
      appliedDate: currentDate,
      fee: visa.Fee,
      visaType: visa.visaType,
      countryImage: visa.countryImage,
      countryName: visa.countryName,
      validity: visa.validity,
      applicationMethod: visa.applicationMethod,
    };

    setIsSubmitting(true); 

    fetch('http://localhost:5000/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Visa Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          setIsModalOpen(false); 
          setFormData({ firstName: '', lastName: '' }); 
          navigate('/visaApplication'); 
        } else {
          alert('Failed to submit the application. Please try again.');
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error('Error submitting application:', err);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <div className="cursor-pointer bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="max-w-3xl p-6 bg-white rounded-xl shadow-xl overflow-hidden flex items-center space-x-6">
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
          <div className="space-y-2">
            <p className="text-gray-600 text-sm"><strong>Fee:</strong> {visa.Fee}</p>
            <p className="text-gray-600 text-sm"><strong>Validity:</strong> {visa.validity}</p>
            <p className="text-gray-600 text-sm"><strong>Processing Time:</strong> {visa.processingTime}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between flex-grow space-y-4">
          <div className="text-gray-600 space-y-2">
            <p className="text-lg"><strong>Description:</strong> {visa.description}</p>
            <p className="text-lg"><strong>Age Restriction:</strong> {visa.ageRestriction}</p>
            <p className="text-lg"><strong>Application Method:</strong> {visa.applicationMethod}</p>
          </div>
          <div className="flex justify-end space-x-4">
            <Link to='/allVisas'>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              See All Visas
              </button>
            </Link>
            <button
              className="bg-green-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              Apply for the visa
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visa Application</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Applied Date</label>
                <input
                  type="text"
                  value={currentDate}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fee</label>
                <input
                  type="text"
                  value={visa.Fee}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`py-2 px-6 rounded-md shadow-md ${
                    isSubmitting ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Apply'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
