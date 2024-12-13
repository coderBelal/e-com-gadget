import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaEye, FaFilter } from "react-icons/fa";

const ListingsManagement = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All");

    // Sample listings data
    const listings = [
        { id: 1, title: "iPhone 14 Pro Max", price: "$1200", status: "Active" },
        { id: 2, title: "Samsung Galaxy S23 Ultra", price: "$1000", status: "Pending" },
        { id: 3, title: "Google Pixel 7 Pro", price: "$900", status: "Sold" },
    ];

    // Filter and search logic
    const filteredListings = listings.filter(
        (listing) =>
            (filter === "All" || listing.status === filter) &&
            listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-4">Listings Management</h1>

            {/* Search and Filter */}
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search listings..."
                    className="w-2/3 p-2 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:ring focus:ring-indigo-600"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex items-center space-x-2">
                    <FaFilter className="text-gray-300" />
                    <select
                        className="p-2 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Sold">Sold</option>
                    </select>
                </div>
            </div>

            {/* Listings Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-700 text-gray-300">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="p-3 border border-gray-700">ID</th>
                            <th className="p-3 border border-gray-700">Title</th>
                            <th className="p-3 border border-gray-700">Price</th>
                            <th className="p-3 border border-gray-700">Status</th>
                            <th className="p-3 border border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredListings.length > 0 ? (
                            filteredListings.map((listing) => (
                                <tr
                                    key={listing.id}
                                    className="hover:bg-gray-700 transition duration-150"
                                >
                                    <td className="p-3 border border-gray-700">{listing.id}</td>
                                    <td className="p-3 border border-gray-700">{listing.title}</td>
                                    <td className="p-3 border border-gray-700">{listing.price}</td>
                                    <td className="p-3 border border-gray-700">{listing.status}</td>
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
                                    No listings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListingsManagement;
