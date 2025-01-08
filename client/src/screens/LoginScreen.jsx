import React, { useState } from "react";
import SignupForm from "../components/Form/SignupForm.jsx";
import LoginForm from "../components/Form/LoginForm.jsx";
import Navbar from "../components/Headers/Navbar/Navbar.jsx";
import { useSelector } from "react-redux";

function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div
      className={`flex flex-col w-full min-h-screen transition duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-cyan-200 text-black"}`}
    >
      <div className="flex h-40">
        <Navbar />
      </div>

      <div className="flex items-center justify-center w-full h-full px-5">
        <div
          className={`w-full lg:w-2/5 p-8 rounded-lg shadow-lg mt-5 lg:mt-4 lg:ml-1 h-fit transition duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          {isLogin ? (
            <LoginForm setIsLogin={setIsLogin} />
          ) : (
            <SignupForm setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
