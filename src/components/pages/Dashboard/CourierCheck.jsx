import { useState } from "react";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";

const CourierCheck = () => {
  const [phone, setPhone] = useState(""); // Phone number state
  const [responseData, setResponseData] = useState(null); // API response state
  const [error, setError] = useState(null); // Error state
  const apiKey = "ktlY9kJCbKJukmakVNtvpgHpZ3Tm83vPBtmAKfHWCDyhn9wlas7G0OUIUXWS"; // Your API key
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = async () => {
    if (!phone.trim()) {
      setError("Please enter a valid phone number.");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://bdcourier.com/api/courier-check?phone=${phone}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setResponseData(response.data); // Set the API response data
      console.log(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err.message);
      setError("Something went wrong. Please try again."); // Set error message
      setResponseData(null); // Clear previous data on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex  justify-center   ">
      <div className="w-full  p-6  rounded-lg">
        <h1 className="text-2xl font-bold   text-gray-600  mb-6">
          Courier Check
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2  bg-gray-700 rounded-md focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600"
          />
        </div>
        <button
          onClick={handleCheck}
          className="w-full flex justify-center font-semibold text-xl items-center gap-3   bg-indigo-600 text-white rounded-md hover:bg-indigo-500   py-2 px-4  transition"
        >
          {isLoading && <ImSpinner9 className="animate-spin" />}
          Check Courier
        </button>

        <div className="mt-6">
          {responseData?.courierData && (
            <div className="  border border-gray-300 p-4 rounded-md">
              <h3 className="font-semibold text-lg text-[#27374D] mb-4">
                Courier Data
              </h3>
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className=" ">
                    <th className="border border-gray-300 px-4 py-2">
                      Courier Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Total Parcels
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Successful Parcels
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Cancelled Parcels
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Success Ratio (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(responseData.courierData).map(
                    ([courier, details]) =>
                      courier !== "summary" ? (
                        <tr key={courier} className="hover:bg-[#DDE6ED]">
                          <td className="border border-gray-300 px-4 py-2 capitalize">
                            {courier}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {details.total_parcel}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {details.success_parcel}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {details.cancelled_parcel}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {details.success_ratio}%
                          </td>
                        </tr>
                      ) : null
                  )}
                </tbody>
              </table>
              <h4 className="font-medium text-[#27374D] mt-4">Summary</h4>
              <p className="text-[#30425a]">
                Total Parcels:{" "}
                <strong>{responseData.courierData.summary.total_parcel}</strong>
                , Successful:{" "}
                <strong>
                  {responseData.courierData.summary.success_parcel}
                </strong>
                ,
                <span className="text-red-600">
                  {" "}
                  Cancelled:{" "}
                  <strong>
                    {responseData.courierData.summary.cancelled_parcel}
                  </strong>
                </span>
                ,{" "}
                <span className="text-green-600">
                  Success Ratio:{" "}
                  <strong>
                    {responseData.courierData.summary.success_ratio}%
                  </strong>
                </span>
              </p>
            </div>
          )}

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CourierCheck;
