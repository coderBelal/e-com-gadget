import React, { useState } from 'react';
import { FaUser, FaBell, FaCog, FaSave, FaCamera } from 'react-icons/fa';

const Settings = () => {
    // State to manage form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [notification, setNotification] = useState(true);
    const [theme, setTheme] = useState('light');
    const [profilePic, setProfilePic] = useState(null);

    // Handle profile picture upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file)); // Show the uploaded image
        }
    };

    // Handle form submit (mock function for demonstration)
    const handleSave = () => {
        alert('Settings saved successfully!');
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-300 mb-6">Settings</h1>

            {/* Profile Settings */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h2 className="text-xl text-gray-300 mb-4">Profile Settings</h2>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        {/* Profile Picture Upload */}
                        <div className="relative">
                            <img
                                src={profilePic || '/default-avatar.png'} // Use a default avatar if no picture is uploaded
                                alt="Profile"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <label htmlFor="profilePic" className="absolute bottom-0 right-0 bg-gray-700 text-gray-300 p-2 rounded-full cursor-pointer">
                                <FaCamera />
                            </label>
                            <input
                                id="profilePic"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>

                        <div>
                            <label className="text-gray-300" htmlFor="username">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                className="bg-gray-700 text-gray-300 p-3 rounded-lg w-full focus:outline-none"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-300" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="bg-gray-700 text-gray-300 p-3 rounded-lg w-full focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h2 className="text-xl text-gray-300 mb-4">Notification Settings</h2>
                <div className="flex items-center space-x-4">
                    <FaBell className="text-gray-300" />
                    <label className="text-gray-300">Receive notifications</label>
                    <input
                        type="checkbox"
                        className="bg-gray-700 text-blue-500"
                        checked={notification}
                        onChange={(e) => setNotification(e.target.checked)}
                    />
                </div>
            </div>

            {/* General Settings */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h2 className="text-xl text-gray-300 mb-4">General Settings</h2>
                <div className="flex items-center space-x-4">
                    <FaCog className="text-gray-300" />
                    <div>
                        <label className="text-gray-300" htmlFor="theme">
                            Theme
                        </label>
                        <select
                            id="theme"
                            className="bg-gray-700 text-gray-300 p-3 rounded-lg w-full mt-2"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Save Settings Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600"
                >
                    <FaSave />
                    <span>Save Settings</span>
                </button>
            </div>
        </div>
    );
};

export default Settings;
