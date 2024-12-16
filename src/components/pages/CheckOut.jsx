import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import TimeSelector from "./TimeSelector";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [selectedDate, setSelectedDate] = useState(null); // For storing the date
  const [selectedTime, setSelectedTime] = useState(null); // For storing the time
  const { productId } = useParams();

  const getCurrentTime = () => {
    const now = new Date();
    return now;
  };

  const getAvailableTimes = () => {
    const now = getCurrentTime();
    const availableTimes = [];
    for (let i = 1; i <= 6; i++) {
      let nextHour = new Date(now.getTime() + i * 60 * 60 * 1000);
      availableTimes.push(nextHour);
    }
    return availableTimes;
  };

  const handleTimeChange = (time) => {
    const date = time.toISOString().split("T")[0]; // Extracting date
    const timeString = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); // Extracting time
    console.log("date",date)
    console.log("timeString",timeString)
    setSelectedDate(date);
    setSelectedTime(timeString);
  };

  const formattedTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  }, [selectedDate, selectedTime]);

  const products = [
    { id: 1, title: 'iPhone 15 Plus', description: 'The latest iPhone with advanced features and a stunning design.', price: 30000, image: 'https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg' },
    // Other products...
  ];

  const product = products.find((p) => p.id === parseInt(productId));
  const availableTimes = getAvailableTimes();
  console.log("Selected Date:", selectedDate);
  console.log("Selected Time:", selectedTime);
  return (
    <div className="min-h-screen p-6 flex flex-col items-center text-white">
      <div className="max-w-4xl mt-24 w-full p-6 rounded-lg shadow-md">
        <p className="bg-yellow-100 text-yellow-800 p-2 text-center rounded-md text-sm mb-4">
          অর্ডার সম্পন্ন করতে সমস্যায় পড়লে কল করুন কাস্টমার সার্ভিস রিপ্রেজেন্টেটিভ এর সাথে - 012467443954
        </p>

        {/* Payment Methods */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <button
              className={`flex items-center space-x-2 p-3 rounded-md border ${paymentMethod === "cod" ? "border-green-500" : "border-gray-300"}`}
              onClick={() => setPaymentMethod("cod")}
            >
              <FaCheckCircle className={`text-lg ${paymentMethod === "cod" ? "text-green-500" : "text-white"}`} />
              <span>Cash on Delivery</span>
            </button>
            <button
              className={`flex items-center space-x-2 p-3 rounded-md border ${paymentMethod === "online" ? "border-green-500" : "border-gray-300"}`}
              onClick={() => setPaymentMethod("online")}
            >
              <FaCheckCircle className={`text-lg ${paymentMethod === "online" ? "text-green-500" : "text-white"}`} />
              <span>Online Payment</span>
            </button>
          </div>
        </div>

        {/* Billing Details */}
        <div className="flex flex-col lg:flex-row space-x-8">
          <div className="flex-1 mb-6">
            <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Phone Number</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded-l-md bg-gray-800 focus:outline-none focus:ring focus:ring-green-200"
                  />
                  <button type="button" className="gradient-bg px-4 rounded-r-md">
                    Verify
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Full Address</label>
                <textarea
                  placeholder="Address"
                  className="w-full p-2 border rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-green-200"
                ></textarea>
              </div>

              <TimeSelector availableTimes={availableTimes} onTimeChange={handleTimeChange} />

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I have read and agree to the{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="flex-1 p-4 rounded-md shadow-md bg-gray-800">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            <div className="flex items-center mb-4">
              <img
                src="https://i.postimg.cc/bYLdy6GT/i-Phone-15-Plus-2-1-6945.jpg"
                alt="iPhone 15 Plus"
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-medium">iPhone 15 Plus</h3>
                <p className="text-sm text-gray-400">The latest iPhone with advanced features and a stunning design.</p>
              </div>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-sm">Price</span>
              <span>30000 TK</span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-sm">Delivery Charge</span>
              <span>Will be added</span>
            </div>

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>BDT 103500</span>
            </div>

            <button className="mt-4 gradient-bg w-full py-2 rounded-md hover:bg-green-600">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
