import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { FaUsers, FaList, FaDollarSign, FaChartBar } from "react-icons/fa";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
    const [data, setData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Total Listings",
                data: [15, 30, 50, 40, 60, 80, 90, 100, 120, 140, 160, 180],
                fill: false,
                borderColor: "#4A90E2",
                tension: 0.1,
            },
            {
                label: "Total Sales",
                data: [10, 20, 30, 25, 35, 45, 50, 60, 75, 85, 100, 120],
                fill: false,
                borderColor: "#F4B400",
                tension: 0.1,
            },
        ],
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-6">Analytics Dashboard</h1>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div className="text-gray-300">
                        <h2 className="text-xl">Total Users</h2>
                        <p className="text-2xl font-bold">2,430</p>
                    </div>
                    <FaUsers className="text-indigo-600 text-4xl" />
                </div>

                <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div className="text-gray-300">
                        <h2 className="text-xl">Total Listings</h2>
                        <p className="text-2xl font-bold">1,200</p>
                    </div>
                    <FaList className="text-indigo-600 text-4xl" />
                </div>

                <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div className="text-gray-300">
                        <h2 className="text-xl">Total Sales</h2>
                        <p className="text-2xl font-bold">850</p>
                    </div>
                    <FaDollarSign className="text-indigo-600 text-4xl" />
                </div>

                <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div className="text-gray-300">
                        <h2 className="text-xl">Revenue</h2>
                        <p className="text-2xl font-bold">$30,500</p>
                    </div>
                    <FaChartBar className="text-indigo-600 text-4xl" />
                </div>
            </div>

            {/* Charts */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl text-gray-300 mb-4">Monthly Trends</h2>
                <Line data={data} options={{ responsive: true }} />
            </div>
        </div>
    );
};

export default Analytics;
