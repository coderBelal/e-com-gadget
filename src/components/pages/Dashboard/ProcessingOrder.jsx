import React, { useState } from 'react';

const ProcessingOrder  = () => {
  const [orderStatus, setOrderStatus] = useState('Processing');
  const [orderId, setOrderId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('2-3 business days');

  const handleStatusChange = (status) => {
    setOrderStatus(status);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Processing Order
        </h2>

        {/* Order Details */}
        <div className="mb-6">
          <p className="text-white"><strong>Order ID:</strong> {orderId || 'Not Available'}</p>
          <p className="text-white"><strong>Customer Name:</strong> {customerName || 'Not Available'}</p>
          <p className="text-white"><strong>Shipping Address:</strong> {shippingAddress || 'Not Available'}</p>
          <p className="text-white"><strong>Estimated Delivery Time:</strong> {estimatedTime}</p>
        </div>

        {/* Order Items */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">Order Items</h3>
          <ul className="list-disc pl-5 space-y-2">
            {orderItems.length === 0 ? (
              <li className="text-gray-500">No items in this order.</li>
            ) : (
              orderItems.map((item, index) => (
                <li key={index} className="text-white">{item}</li>
              ))
            )}
          </ul>
        </div>

        {/* Status Update */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">Update Order Status</h3>
          <div className="flex space-x-4">
            <button
              className={`py-2 px-6 rounded-md ${
                orderStatus === 'Processing' ? 'bg-blue-500' : 'bg-blue-300'
              } text-white`}
              onClick={() => handleStatusChange('Processing')}
            >
              Processing
            </button>
            <button
              className={`py-2 px-6 rounded-md ${
                orderStatus === 'Shipped' ? 'bg-green-500' : 'bg-green-300'
              } text-white`}
              onClick={() => handleStatusChange('Shipped')}
            >
              Shipped
            </button>
            <button
              className={`py-2 px-6 rounded-md ${
                orderStatus === 'Delivered' ? 'bg-yellow-500' : 'bg-yellow-300'
              } text-white`}
              onClick={() => handleStatusChange('Delivered')}
            >
              Delivered
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
            onClick={() => alert('Order has been marked for cancellation.')}
          >
            Cancel Order
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
            onClick={() => window.history.back()} // Goes back to previous page
          >
            Back to Dashboard
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500">
          <p>If you have any issues, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingOrder ;
