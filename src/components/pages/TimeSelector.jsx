import React, { useState, useEffect } from 'react';

const TimeSelector = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [currentBangladeshTime, setCurrentBangladeshTime] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Get the current time in Bangladesh (GMT+6)
    const date = new Date();
    const bangladeshTime = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));

    // Get Bangladesh time
    let hours = bangladeshTime.getHours();
    const minutes = bangladeshTime.getMinutes().toString().padStart(2, '0');

    // Determine AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12; // Convert 0 hours to 12 for AM
    const inputFormattedTime = `${String(hours).padStart(2, '0')}:${minutes} ${period}`;

    // Set the current Bangladesh time in 12-hour format
    setCurrentBangladeshTime(inputFormattedTime); // 12-hour format for display
    setTime(`${String(hours).padStart(2, '0')}:${minutes}`); // 24-hour format for input

    // Set current date in YYYY-MM-DD format for Bangladesh time zone
    const currentDate = new Date(bangladeshTime.getFullYear(), bangladeshTime.getMonth(), bangladeshTime.getDate());
    const currentDateStr = currentDate.toLocaleDateString('en-CA'); // Use the local date format (YYYY-MM-DD)
    setDate(currentDateStr); // Set date as current date in Bangladesh time zone
  }, []);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const validateTime = () => {
    if (!time || !date) {
      setError('Please select both date and time.');
      setSuccess('');
      return;
    }

    // Get the current time in Bangladesh
    const dateNow = new Date();
    const bangladeshTime = new Date(dateNow.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));
    const currentDateTime = bangladeshTime.getTime();

    // Construct the selected date and time as a Date object
    const selectedDateTime = new Date(`${date}T${time}:00`);
    const selectedTime = selectedDateTime.getTime();

    // Validate if the selected time is at least 6 hours ahead
    if (selectedTime - currentDateTime < 6 * 60 * 60 * 1000) {
      setError('দয়া করে অন্তত ৬ ঘণ্টা পরের সময় নির্বাচন করুন');
      setSuccess('');
    } else {
      setError('');
      setSuccess('নির্বাচিত সময়টি গ্রহণযোগ্য!');
    }
  };

  return (
    <div className="flex flex-col space-y-4 mb-4">
      <label className="font-semibold mb-2">Select Date and Time</label>
      <label className="block text-[13px] !mt-[-1px] md:mb-2 text-gray-400">Select a delivery time (within the next 6 hours):</label>
      <div className="flex items-center gap-1">
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="border border-gray-300 text-black p-2 rounded-md"
        />
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="border border-gray-300 text-black p-2 rounded-md"
        />
        <button
          type="button" // Make sure it's not a submit button
          onClick={validateTime}
          className="gradient-bg hidden md:grid text-white py-[9.5px] px-2 rounded-md"
        >
          Check Time
        </button>
      </div>
      <button
          type="button" // Make sure it's not a submit button
          onClick={validateTime}
          className="gradient-bg md:hidden text-white py-[9.5px] px-2 rounded-md"
        >
          Check Time
        </button>
      <p className="text-sm text-gray-500">Current Bangladesh Time: {currentBangladeshTime}</p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
    </div>
  );
};

export default TimeSelector;
