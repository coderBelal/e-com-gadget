import { useState } from "react";

 

const OrderCancel = () => {
    const [orderId, setOrderId] =  useState('');
    const [reason, setReason] = useState('');
    const [error, setError] = useState('');
  
    const handleCancel = () => {
      if (!orderId || !reason) {
        setError('Please fill in both fields.');
        return;
      }
      // Here you can add API call or other logic to cancel the order
      alert('Order Cancelled Successfully!');
    };
  return (
    <div className="min-h-screen flex items-center justify-center  ">
    <div className="  p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Order Cancellation
      </h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <div className="mb-4">
        <label htmlFor="orderId" className="block  text-white mb-2">Order ID</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter the order ID"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="reason" className="block  text-white mb-2">Reason for Cancellation</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Please provide a reason"
          rows="4"
        ></textarea>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleCancel}
          className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
        >
          Cancel Order
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
          onClick={() => window.history.back()}  
        >
          Back to Dashboard
        </button>
      </div>

      <div className="text-center text-gray-500">
        <p>If you have any issues, please contact support.</p>
      </div>
    </div>
  </div>
  );
};

export default OrderCancel ;
