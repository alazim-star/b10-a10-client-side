import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext); 
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/applications`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched applications:', data); 
          setApplications(data);
        })
        .catch((err) => console.error('Error fetching applications:', err));
    }
  }, [user]);

  const handleCancel = (id) => {
    fetch(`http://localhost:5000/applications/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Application cancelled successfully!');
          setApplications((prev) => prev.filter((app) => app._id !== id));
        }
      })
      .catch((err) => console.error('Error cancelling application:', err));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">My Visa Applications</h2>
      {applications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div key={app._id} className="border rounded-lg p-4 shadow-md bg-white">
              <img
                src={app.countryImage} 
                alt={app.countryName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{app.countryName}</h3>
              <p className="text-sm text-gray-600">Visa Type: {app.visaType}</p>
              <p className="text-sm text-gray-600">Processing Time: {app.processingTime}</p>
              <p className="text-sm text-gray-600">Fee: {app.fee}</p>
              <p className="text-sm text-gray-600">Validity: {app.validity}</p>
              <p className="text-sm text-gray-600">Application Method: {app.applicationMethod}</p>
              <p className="text-sm text-gray-600">Applied Date: {app.appliedDate}</p>
              <p className="text-sm text-gray-600">
                Applicant's Name: {app.firstName} {app.lastName}
              </p>
              <p className="text-sm text-gray-600">Applicant's Email: {app.email}</p>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600 transition duration-300"
                onClick={() => handleCancel(app._id)}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default MyVisaApplications;
