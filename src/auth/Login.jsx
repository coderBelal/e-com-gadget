import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

 

const Login = ({handleForgotPassword}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <div>
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block gradient-text font-bold  "
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="@email"
                    className="w-full border    border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                </div>
                <div className="relative mt-2">
                  <label
                    htmlFor="email"
                    className="block gradient-text font-bold  "
                  >
                     Password:
                  </label>
                  <input
                       type={isVisible ? 'text' : 'password'}
                    name="email"
                    id="email"
                    placeholder="password"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600"
                  />
                    <button
      type="button"
      onClick={toggleVisibility}
      className="absolute right-3 top-1/2 transform -translate-y-1/2"
    >
      {isVisible ? (
        <Eye color="#0B4E38" />
      ) : (
        <EyeOff color="#0B4E38" />
      )}
    </button>
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
