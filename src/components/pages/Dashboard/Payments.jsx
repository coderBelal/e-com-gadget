import React, { useState } from "react";
import {   FaSearch, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Payments = () => {
    // Dummy data for payments
    const payments = [
        { id: 1, user: "John Doe", amount: 120, status: "Completed", date: "2024-12-01" },
        { id: 2, user: "Jane Smith", amount: 450, status: "Pending", date: "2024-12-03" },
        { id: 3, user: "Sam Green", amount: 320, status: "Failed", date: "2024-12-05" },
        { id: 4, user: "Anna Brown", amount: 250, status: "Completed", date: "2024-12-07" },
        { id: 5, user: "Paul White", amount: 600, status: "Pending", date: "2024-12-09" },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredPayments = payments.filter(
        (payment) =>
            payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-6">Payments</h1>

            {/* Search */}
            <div className="mb-6 flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg w-80 focus:outline-none"
                        placeholder="Search by user or status"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute top-3 right-3 text-gray-500" />
                </div>
            </div>

            {/* Payments Table */}
            <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg">
                <table className="min-w-full table-auto">
                    <thead className="text-left text-gray-300">
                        <tr>
                            <th className="px-4 py-2">User</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        {filteredPayments.map((payment) => (
                            <tr key={payment.id} className="hover:bg-gray-700">
                                <td className="px-4 py-2">{payment.user}</td>
                                <td className="px-4 py-2">${payment.amount}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-sm ${
                                            payment.status === "Completed"
                                                ? "bg-green-500 text-white"
                                                : payment.status === "Pending"
                                                ? "bg-yellow-500 text-white"
                                                : "bg-red-500 text-white"
                                        }`}
                                    >
                                        {payment.status === "Completed" && <FaCheckCircle className="mr-1" />}
                                        {payment.status === "Pending" && <FaTimesCircle className="mr-1" />}
                                        {payment.status === "Failed" && <FaTimesCircle className="mr-1" />}
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2">{payment.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Payments;
