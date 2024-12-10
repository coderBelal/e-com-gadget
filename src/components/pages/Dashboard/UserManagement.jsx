import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const UserManagement = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // Sample user data
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Moderator" },
    ];

    // Filtered users based on search query
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-4">User Management</h1>

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full p-2 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:ring focus:ring-indigo-600"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* User Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-700 text-gray-300">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="p-3 border border-gray-700">ID</th>
                            <th className="p-3 border border-gray-700">Name</th>
                            <th className="p-3 border border-gray-700">Email</th>
                            <th className="p-3 border border-gray-700">Role</th>
                            <th className="p-3 border border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-gray-700 transition duration-150"
                                >
                                    <td className="p-3 border border-gray-700">{user.id}</td>
                                    <td className="p-3 border border-gray-700">{user.name}</td>
                                    <td className="p-3 border border-gray-700">{user.email}</td>
                                    <td className="p-3 border border-gray-700">{user.role}</td>
                                    <td className="p-3 border border-gray-700 flex space-x-2">
                                        <button
                                            className="p-1 rounded bg-indigo-600 text-gray-200 hover:bg-indigo-500"
                                            title="View"
                                        >
                                            <FaEye />
                                        </button>
                                        <button
                                            className="p-1 rounded bg-yellow-600 text-gray-200 hover:bg-yellow-500"
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="p-1 rounded bg-red-600 text-gray-200 hover:bg-red-500"
                                            title="Delete"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center p-3 border border-gray-700"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
