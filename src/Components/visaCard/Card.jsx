import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ visa, visas, setVisas }) => {
  const {
    _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    Fee,
    validity,
    applicationMethod,
  } = visa;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UpdatedVisa, setUpdatedVisa] = useState({
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments: requiredDocuments || [],
    description,
    ageRestriction,
    Fee,
    validity,
    applicationMethod,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setUpdatedVisa((prevData) => ({
        ...prevData,
        requiredDocuments: checked
          ? [...prevData.requiredDocuments, value]
          : prevData.requiredDocuments.filter((item) => item !== value),
      }));
    } else {
      setUpdatedVisa((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleVisaUpdate = () => {
    fetch(`http://localhost:5000/visa/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UpdatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success',
            text: 'Visa updated successfully!',
            icon: 'success',
            confirmButtonText: 'Back',
          });

          // Update local state
          const updatedVisas = visas.map((v) =>
            v._id === _id ? { ...v, ...UpdatedVisa } : v
          );
          setVisas(updatedVisas);

          setIsModalOpen(false); // Close the modal after update
        }
      })
      .catch((error) => {
        console.error('Error updating visa:', error);
        Swal.fire('Error', 'Could not update the visa.', 'error');
      });
  };

  const handleVisaDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visa/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Visa has been deleted.', 'success');
              const updatedVisas = visas.filter((v) => v._id !== id);
              setVisas(updatedVisas);
            } else {
              Swal.fire('Error!', 'Could not delete the visa.', 'error');
            }
          })
          .catch((error) => {
            console.error('Error deleting visa:', error);
            Swal.fire('Error!', 'Something went wrong.', 'error');
          });
      }
    });
  };

  const allDocuments = [
    'Valid passport',
    'Visa application form',
    'Recent passport-sized photograph',
  ];

  return (
    <div className="  p-5  rounded-3xl overflow-hidden shadow-2xl">
      <img className="object-cover rounded-3xl w-full h-48" src={visa.countryImage} alt={visa.countryName} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{visa.countryName}</h2>
        <p><strong>Visa Type:</strong> {visa.visaType}</p>
        <p><strong>Processing Time:</strong> {visa.processingTime}</p>
        <p><strong>Fee:</strong>{visa.Fee}</p>
        <p><strong>Validity:</strong> {visa.validity}</p>
        <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
      </div>
      <div className="px-6 py-2 flex space-x-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-10 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Update
        </button>
        <button
          onClick={() => handleVisaDelete(visa._id)}
          className="bg-red-500 text-white px-10 py-2 rounded-full hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>



      {/* modal  */}
      {isModalOpen && (
  <div
    className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
    role="dialog"
    aria-labelledby="modal-title"
    aria-modal="true"
  >
    <div className="bg-white p-6 rounded-lg w-1/2 h-[650px] overflow-y-auto">
      <h2 id="modal-title" className="text-xl text-center font-bold mb-4">
        Update Visa
      </h2>
      <div>
        <input
          type="text"
          name="countryImage"
          value={UpdatedVisa.countryImage}
          onChange={handleInputChange}
          placeholder="Enter country image URL"
          className="border p-2 w-full mb-4"
        />

        <div className="flex gap-3">
          <label className="w-1/2">
            <span className="text-sm">Country Name</span>
            <input
              type="text"
              name="countryName"
              value={UpdatedVisa.countryName}
              onChange={handleInputChange}
              placeholder="Enter country name"
              className="border p-2 w-full mb-4"
            />
          </label>

          <label className="w-1/2">
            <span className="text-sm">Visa Type</span>
            <select
              name="visaType"
              value={UpdatedVisa.visaType}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            >
              <option value="Tourist visa">Tourist Visa</option>
              <option value="Student visa">Student Visa</option>
              <option value="Official visa">Official Visa</option>
            </select>
          </label>
        </div>

        <div className="flex gap-3">
          <label className="w-1/2">
            <span className="text-sm">Processing Time</span>
            <select
              name="processingTime"
              value={UpdatedVisa.processingTime}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            >
              <option value="">Select Time</option>
              <option value="2 weeks">2 weeks</option>
              <option value="3 weeks">3 weeks</option>
              <option value="20 days">20 days</option>
              <option value="30 days">30 days</option>
            </select>
          </label>

          <label className="w-1/2">
            <span className="text-sm">Fee</span>
            <select
              name="Fee"
              value={UpdatedVisa.fee}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            >
              <option value="">Select Fee</option>
              <option value="$500">$500</option>
              <option value="$1000">$1000</option>
              <option value="$2000">$2000</option>
              <option value="$3000">$3000</option>
            </select>
          </label>
        </div>

        <div className="mb-4">
          <p>Required Documents</p>
          {allDocuments.map((doc) => (
            <label key={doc} className="block">
              <input
                type="checkbox"
                value={doc}
                checked={UpdatedVisa.requiredDocuments.includes(doc)}
                onChange={(e) => handleCheckboxChange(e, doc)}
              />
              {doc}
            </label>
          ))}
        </div>

        <textarea
          name="description"
          value={UpdatedVisa.description}
          onChange={handleInputChange}
          placeholder="Enter description"
          className="border p-2 w-full mb-4"
        />

        <div className="flex gap-3">
          <label className="w-1/2">
            <span className="text-sm">Age Restriction</span>
            <select
              name="ageRestriction"
              value={UpdatedVisa.ageRestriction}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            >
              <option value="">Select Age Range</option>
              <option value="18-25">18-25</option>
              <option value="25-40">25-40</option>
              <option value="40-50">40-50</option>
              <option value="50-65">50-65</option>
            </select>
          </label>

          <label className="w-1/2">
            <span className="text-sm">Validity</span>
            <select
              name="validity"
              value={UpdatedVisa.validity}
              onChange={handleInputChange}
              className="border p-2 w-full mb-4"
            >
              <option value="">Select Validity</option>
              <option value="30 days">30 days</option>
              <option value="60 days">60 days</option>
              <option value="90 days">90 days</option>
              <option value="120 days">
                120 days (extendable upon request and justification)
              </option>
            </select>
          </label>
        </div>

        <input
          type="text"
          name="applicationMethod"
          value={UpdatedVisa.applicationMethod}
          onChange={handleInputChange}
          placeholder="Enter application method"
          className="border p-2 w-full mb-4"
        />

        <div className="flex gap-4">
          <button
            onClick={handleVisaUpdate}
            className="bg-green-500 text-white px-10 py-2 rounded-full hover:bg-green-600 transition"
          >
            Update Visa
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-500 text-white px-10 py-2 rounded-full hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Card;
