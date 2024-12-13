import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardOverview = () => {
  // Data for the chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Listings",
        data: [10, 20, 15, 25, 30, 45],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Transactions",
        data: [5, 15, 10, 20, 25, 40],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#D1D5DB", // Light gray text for legend
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#D1D5DB" }, // Light gray text for X-axis
      },
      y: {
        ticks: { color: "#D1D5DB" }, // Light gray text for Y-axis
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-300 mb-6">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">Total Listings</h2>
          <p className="text-2xl font-bold text-gray-300">120</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">Active Users</h2>
          <p className="text-2xl font-bold text-gray-300">45</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">Transactions</h2>
          <p className="text-2xl font-bold text-gray-300">75</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">Reports</h2>
          <p className="text-2xl font-bold text-gray-300">8</p>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-300 mb-4">Activity Overview</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DashboardOverview;
