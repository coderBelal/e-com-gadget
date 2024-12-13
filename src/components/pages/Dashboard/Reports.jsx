import React, { useState } from "react";
import { FaSearch, FaDownload, FaFileAlt, FaFilter } from "react-icons/fa";

const Reports = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All");

    // Sample report data
    const reports = [
        { id: 1, title: "Monthly Transactions Report", type: "Transactions", date: "2024-12-05", status: "Completed" },
        { id: 2, title: "Weekly Listings Report", type: "Listings", date: "2024-12-06", status: "Pending" },
        { id: 3, title: "User Activity Report", type: "Users", date: "2024-12-07", status: "Completed" },
    ];

    // Filter and search logic
    const filteredReports = reports.filter(
        (report) =>
            (filter === "All" || report.status === filter) &&
            (report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                report.type.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-4">Reports Management</h1>

            {/* Search and Filter */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <FaSearch className="text-gray-300" />
                    <input
                        type="text"
                        placeholder="Search reports..."
                        className="w-2/3 p-2 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:ring focus:ring-indigo-600"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <FaFilter className="text-gray-300" />
                    <select
                        className="p-2 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
            </div>

            {/* Reports Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-700 text-gray-300">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="p-3 border border-gray-700">ID</th>
                            <th className="p-3 border border-gray-700">Title</th>
                            <th className="p-3 border border-gray-700">Type</th>
                            <th className="p-3 border border-gray-700">Date</th>
                            <th className="p-3 border border-gray-700">Status</th>
                            <th className="p-3 border border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReports.length > 0 ? (
                            filteredReports.map((report) => (
                                <tr
                                    key={report.id}
                                    className="hover:bg-gray-700 transition duration-150"
                                >
                                    <td className="p-3 border border-gray-700">{report.id}</td>
                                    <td className="p-3 border border-gray-700">{report.title}</td>
                                    <td className="p-3 border border-gray-700">{report.type}</td>
                                    <td className="p-3 border border-gray-700">{report.date}</td>
                                    <td className="p-3 border border-gray-700">{report.status}</td>
                                    <td className="p-3 border border-gray-700 flex space-x-2">
                                        <button
                                            className="p-1 rounded bg-indigo-600 text-gray-200 hover:bg-indigo-500"
                                            title="View Report"
                                        >
                                            <FaFileAlt />
                                        </button>
                                        <button
                                            className="p-1 rounded bg-green-600 text-gray-200 hover:bg-green-500"
                                            title="Download Report"
                                        >
                                            <FaDownload />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center p-3 border border-gray-700"
                                >
                                    No reports found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
