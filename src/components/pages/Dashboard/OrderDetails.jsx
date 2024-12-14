import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { OrderId } = useParams();
  const data = [
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
  ];
  const order = data.find((p) => p.id === parseInt(OrderId));

  if (!order) {
    return <div className="min-h-screen p-6">Order not found</div>;
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl text-white font-semibold">Order Details</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-white text-lg">Order ID: {order.id}</h2>
        <p className="text-white">Customer: {order.customer}</p>
        <p className="text-white">Items: {order.items}</p>
        <p className="text-white">Total: {order.total}</p>
        <p className="text-white">Status: {order.status}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
