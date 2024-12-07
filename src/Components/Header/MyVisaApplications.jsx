import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/applications/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
          setFilteredApplications(data); 
        })
        .catch((err) => console.error("Error fetching applications:", err));
    }
  }, [user]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/applications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your application has been deleted.", "success");
              setApplications((prev) => prev.filter((app) => app._id !== id));
              setFilteredApplications((prev) =>
                prev.filter((app) => app._id !== id)
              );
            }
          })
          .catch((err) => console.error("Error cancelling application:", err));
      }
    });
  };

  const handleSearch = () => {
    const filtered = applications.filter((app) =>
      app.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  const handleReset = () => {
    setFilteredApplications(applications); 
    setSearchTerm(""); 
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="lg:text-2xl font-semibold">My Visa Applications</h2>
        <div className="flex gap-2">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Search by country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn bg-green-600 text-white" onClick={handleSearch}>
            Search
          </button>
          <button className="btn  bg-green-600 text-white" onClick={handleReset}>
            Previous
          </button>
        </div>
      </div>

      {filteredApplications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApplications.map((app) => (
            <div
              key={app._id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <img
                src={app.countryImage}
                alt={app.countryName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{app.countryName}</h3>
              <p className="text-sm text-gray-600">Visa Type: {app.visaType}</p>
              <p className="text-sm text-gray-600">
                Processing Time: {app.processingTime}
              </p>
              <p className="text-sm text-gray-600">Fee: {app.fee}</p>
              <p className="text-sm text-gray-600">Validity: {app.validity}</p>
              <p className="text-sm text-gray-600">
                Application Method: {app.applicationMethod}
              </p>
              <p className="text-sm text-gray-600">
                Applied Date: {app.appliedDate}
              </p>
              <p className="text-sm text-gray-600">
                Applicant's Name: {app.firstName} {app.lastName}
              </p>
              <p className="text-sm text-gray-600">
                Applicant's Email: {app.email}
              </p>
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
        <p>No applications found for your search.</p>
      )}
    </div>
  );
};

export default MyVisaApplications;
