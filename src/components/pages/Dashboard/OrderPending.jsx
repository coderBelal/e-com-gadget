import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrderPending = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Kabita Saha",
      items: "2x Mobile Phone, 1x Charger",
      total: "$450",
      status: "Pending",
    },
    {
      id: 2,
      customer: "John Doe",
      items: "1x Laptop, 1x Mouse",
      total: "$1200",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Jane Smith",
      items: "1x Headphone",
      total: "$50",
      status: "Pending",
    },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl text-white font-semibold">Pending Orders</h1>
      <div className="shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="hover:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Items</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Total</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">Status</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-700 transition-colors duration-200">
                <td className="px-6 py-4 text-sm text-white">{order.id}</td>
                <td className="px-6 py-4 text-sm text-white">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-white">{order.items}</td>
                <td className="px-6 py-4 text-sm text-white">{order.total}</td>
                <td className="px-6 py-4 text-sm text-white">
                  <span
                    className={`py-1 px-3 rounded-lg text-white ${
                      order.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  {order.status === "Pending" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "Completed")}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Mark as Completed
                    </button>
                  )}
                  <Link to={`/dashboard/order-pending/order/${order.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPending;
