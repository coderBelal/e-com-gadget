import React from 'react';

const Login = ({handleForgotPassword}) => {
    return (
        <div>
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block gradient-text font-bold  "
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="username"
                    className="w-full border    border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block gradient-text font-bold  "
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="@email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                  <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="   font-semibold hover:underline mt-2 inline-block text-indigo-600"
                  >
                    Forget Password
                  </a>
                </div>
                <button className="cursor-pointer py-2 px-4 block mt-6   gradient-bg text-white font-bold w-full text-center rounded">
                  Login
                </button>
              </form>
            </div>
    );
}

export default Login;
