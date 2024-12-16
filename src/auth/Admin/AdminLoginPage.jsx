import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminForgotPass from './AdminForgot';
import AdminSignupForm from './AdminSignUp';

const AdminLoginPage = () => {
    const [showLogin, setShowLogin] = useState(false);
      const [isLogin, setIsLogin] = useState(true);
      const [showForgotPassword, setShowForgotPassword] = useState(false);
    
  const handleShowLogin = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowForgotPassword(false);
  };
  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

    return (
        <div >
                <div className="max-w-xl   mt-36 py-8 px-8 h-auto bg-[#0F1012] md:ml-[25%] lg:ml-[35%]  rounded-lg shadow-2xl  z-[500] transition-opacity opacity-100">
        
          <div className="flex justify-between mb-4">
            {/* Tab buttons */}
            <button
              onClick={toggleForm}
              className={`w-1/2 text-center py-2 font-semibold transition-all duration-300 
          ${
            isLogin
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-300 hover:bg-gray-700"
          }`}
            >
              Log In
            </button>
            <button
              onClick={toggleForm}
              className={`w-1/2 text-center py-2 font-semibold transition-all duration-300 
          ${
            !isLogin
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-300 hover:bg-gray-700"
          }`}
            >
              Sign Up
            </button>
          </div>

          {/* Display either Login or Sign Up form */}
          {isLogin && !showForgotPassword ? (
           <AdminLogin handleForgotPassword={handleForgotPassword}></AdminLogin>
          ) : showForgotPassword ? (
          <AdminForgotPass></AdminForgotPass>
          ) : (
          <AdminSignupForm></AdminSignupForm>
          )}
        </div>
        </div>
    );
}

export default AdminLoginPage;
