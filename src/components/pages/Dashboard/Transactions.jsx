import React, { useState } from "react";
import { FaSearch, FaEye, FaTrashAlt, FaFilter } from "react-icons/fa";

const Transactions = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All");

    // Sample transaction data
    const transactions = [
        { id: 1, user: "John Doe", amount: "$1200", status: "Completed", date: "2024-12-05" },
        { id: 2, user: "Jane Smith", amount: "$450", status: "Pending", date: "2024-12-06" },
        { id: 3, user: "Alice Johnson", amount: "$300", status: "Failed", date: "2024-12-07" },
    ];

    // Filter and search logic
    const filteredTransactions = transactions.filter(
        (transaction) =>
            (filter === "All" || transaction.status === filter) &&
            (transaction.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                transaction.amount.includes(searchQuery))
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-4">Transactions Management</h1>

            {/* Search and Filter */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <FaSearch className="text-gray-300" />
                    <input
                        type="text"
                        placeholder="Search transactions..."
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
                        <option value="Failed">Failed</option>
                    </select>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-700 text-gray-300">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="p-3 border border-gray-700">ID</th>
                            <th className="p-3 border border-gray-700">User</th>
                            <th className="p-3 border border-gray-700">Amount</th>
                            <th className="p-3 border border-gray-700">Status</th>
                            <th className="p-3 border border-gray-700">Date</th>
                            <th className="p-3 border border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((transaction) => (
                                <tr
                                    key={transaction.id}
                                    className="hover:bg-gray-700 transition duration-150"
                                >
                                    <td className="p-3 border border-gray-700">{transaction.id}</td>
                                    <td className="p-3 border border-gray-700">{transaction.user}</td>
                                    <td className="p-3 border border-gray-700">{transaction.amount}</td>
                                    <td className="p-3 border border-gray-700">{transaction.status}</td>
                                    <td className="p-3 border border-gray-700">{transaction.date}</td>
                                    <td className="p-3 border border-gray-700 flex space-x-2">
                                        <button
                                            className="p-1 rounded bg-indigo-600 text-gray-200 hover:bg-indigo-500"
                                            title="View"
                                        >
                                            <FaEye />
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
                                    colSpan="6"
                                    className="text-center p-3 border border-gray-700"
                                >
                                    No transactions found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
