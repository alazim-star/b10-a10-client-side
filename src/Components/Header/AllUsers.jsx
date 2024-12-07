import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllUsers = () => {
    const loadedClients = useLoaderData(); 
    const [clients,setClients] = useState(loadedClients);

    
    const formatDate = (date) => {
        if (!date) return "N/A"; 
        return new Date(date).toLocaleString(); 
    };

    // Delete User Handler
    const handleUserDelete = (id) => {
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
                fetch(`http://localhost:5000/clients/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "User has been deleted.", "success");
                            const remainingClients = clients.filter((client) => client._id !== id);
                            setClients(remainingClients);
                        } else {
                            Swal.fire("Error!", "Could not delete the user.", "error");
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            }
        });
    };

    return (

        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Users: {clients.length}</h2>
            {clients.length === 0 ? (
                <p className="text-center text-gray-500">No clients found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last SignIn Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={client._id}>
                                    <th>{index + 1}</th>
                                    <td>{client.name}</td>
                                    <td>{client.email}</td>
                                    <td>{formatDate(client.createdAt)}</td>
                                    <td>{formatDate(client.lastSignInTime)}</td>
                                    <td>
                                       
                                        <button
                                            onClick={() => handleUserDelete(client._id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllUsers;
