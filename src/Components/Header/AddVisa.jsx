import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AddVisa = () => {
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  // Handle Checkbox Selection
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedDocuments((prev) =>
      checked ? [...prev, value] : prev.filter((doc) => doc !== value)
    );
  };

  // Log state updates for debugging
  useEffect(() => {
    console.log("Updated Selected Documents:", selectedDocuments);
  }, [selectedDocuments]);

  const handleAddVisa = (event) => {
    event.preventDefault();

    const form = event.target;
    const countryImage = form.photo.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const validity = form.validity.value;
    const Fee = form.Fee.value;
    const applicationMethod = form.applicationMethod.value;

    const newVisa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      description,
      ageRestriction,
      validity,
      Fee,
      applicationMethod,
      requiredDocuments: selectedDocuments, // Include selected documents
    };

    console.log("Submitted Visa Data:", newVisa);

    // Send data to the server
    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Visa Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          setSelectedDocuments([]); // Clear checkboxes
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Failed to add visa. Please try again later.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add Visa
        </h2>
        <form onSubmit={handleAddVisa}>
          {/* General Inputs */}
          <div className="grid grid-cols-2 gap-5">
            <div className="relative mb-4">
              <h2>Country Image</h2>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="relative mb-4">
              <h2>Country Name</h2>
              <input
                name="countryName"
                type="text"
                placeholder="Country Name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="relative mb-4">
              <h2>Visa Type</h2>
              <select name="visaType" className="select select-info w-full" required>
                <option value="" disabled selected>
                  Select Visa Type
                </option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Official Visa">Official Visa</option>
              </select>
            </div>
            <div className="relative mb-4">
              <h2>Processing Time</h2>
              <select
                name="processingTime"
                className="select select-info w-full"
                required
              >
                <option value="" disabled selected>
                  Select Processing Time
                </option>
                <option value="3 days">3 days</option>
                <option value="7 days">7 days</option>
                <option value="15 days">15 days</option>
                <option value="20 days">20 days</option>
              </select>
            </div>
          </div>

          {/* Required Documents Checkboxes */}
          <div className="mb-4">
            <h2>Required Documents</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Valid Passport",
                "Visa Application Form",
                "Recent Passport-Sized Photograph",
                "Travel Insurance",
                "Proof of Accommodation",
                "Flight Itinerary",
              ].map((doc, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={doc}
                    onChange={handleCheckboxChange}
                    checked={selectedDocuments.includes(doc)} // Controlled checkbox
                  />
                  <span>{doc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Inputs */}
          <div className="relative mb-4">
            <h2>Description</h2>
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative mb-4">
              <h2>Age Restriction</h2>
              <input
                name="ageRestriction"
                type="text"
                placeholder="Age Restriction"
                className="input input-bordered w-full"
              />
            </div>
            <div className="relative mb-4">
              <h2>Fee</h2>
              <select name="Fee" className="select select-info w-full" required>
                <option value="" disabled selected>
                  Select Fee
                </option>
                <option value="$500">$500</option>
                <option value="$1000">$1000</option>
                <option value="$2000">$2000</option>
                <option value="$3000">$3000</option>
              </select>
            </div>
          </div>
          <div className="relative mb-4">
            <h2>Validity</h2>
            <input
              name="validity"
              type="text"
              placeholder="Validity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="relative mb-4">
            <h2>Application Method</h2>
            <input
              name="applicationMethod"
              type="text"
              placeholder="Application Method"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-600 w-full text-white hover:bg-green-700"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
