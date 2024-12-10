import React, { useState } from "react";
import { FaSearch, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Support = () => {
    // Dummy data for support tickets
    const supportTickets = [
        { id: 1, user: "John Doe", issue: "App not loading", status: "Open", date: "2024-12-01" },
        { id: 2, user: "Jane Smith", issue: "Payment issue", status: "Closed", date: "2024-12-02" },
        { id: 3, user: "Sam Green", issue: "Bug in listing", status: "Open", date: "2024-12-05" },
        { id: 4, user: "Anna Brown", issue: "Unable to login", status: "Closed", date: "2024-12-07" },
        { id: 5, user: "Paul White", issue: "Payment not processed", status: "Open", date: "2024-12-09" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredTickets = supportTickets.filter(
        (ticket) =>
            ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ticket.issue.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-6">Support</h1>

            {/* Search */}
            <div className="mb-6 flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg w-80 focus:outline-none"
                        placeholder="Search by user or issue"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute top-3 right-3 text-gray-500" />
                </div>
            </div>

            {/* Tickets Table */}
            <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg">
                <table className="min-w-full table-auto">
                    <thead className="text-left text-gray-300">
                        <tr>
                            <th className="px-4 py-2">User</th>
                            <th className="px-4 py-2">Issue</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        {filteredTickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-700">
                                <td className="px-4 py-2">{ticket.user}</td>
                                <td className="px-4 py-2">{ticket.issue}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-sm ${
                                            ticket.status === "Open"
                                                ? "bg-blue-500 text-white"
                                                : "bg-green-500 text-white"
                                        }`}
                                    >
                                        {ticket.status === "Open" && <FaTimesCircle className="mr-1" />}
                                        {ticket.status === "Closed" && <FaCheckCircle className="mr-1" />}
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2">{ticket.date}</td>
                                <td className="px-4 py-2">
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => alert(`Marking ticket #${ticket.id} as resolved`)}
                                    >
                                        Mark as Resolved
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Support;
