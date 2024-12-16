import React from 'react';

const AdminSignupForm = () => {
    return (
        <div className="max-w-lg mx-auto rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <form action="#" className="w-full flex flex-col gap-4">
          {/* First Name and Last Name */}
    

          {/* Username */}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="block gradient-text font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-full border border-gray-300 py-2 pl-3 rounded outline-none focus:ring-indigo-600"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block gradient-text font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 py-2 pl-3 rounded outline-none focus:ring-indigo-600"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block gradient-text font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 py-2 pl-3 rounded outline-none focus:ring-indigo-600"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="block gradient-text font-bold mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 py-2 pl-3 rounded outline-none focus:ring-indigo-600"
            />
          </div>

          {/* Submit Button */}
          <button className="cursor-pointer py-2 px-4 block mt-6   gradient-bg text-white font-bold w-full text-center rounded">
            Register
          </button>
        </form>
      </div>
    );
}

export default AdminSignupForm;
