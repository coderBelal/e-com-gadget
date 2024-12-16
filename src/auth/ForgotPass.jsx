import React from 'react';

const ForgotPass = () => {
    return (
        <div>
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block gradient-text font-bold"
                  >
                    Enter your email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <button className="cursor-pointer py-2 px-4 block mt-6 gradient-bg text-white font-bold w-full text-center rounded">
                  Reset Password
                </button>
              </form>
            </div>
    );
}

export default ForgotPass;
