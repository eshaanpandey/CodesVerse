import React, { useState } from "react";

import SignupForm from "../components/Form/SignupForm.jsx";
import LoginForm from "../components/Form/LoginForm.jsx";
import LogoHeaderArea from "../components/Headers/LogoHeaderArea.jsx";

import { useSelector } from "react-redux";

function LoginScreen() {
    const [isLogin, setIsLogin] = useState(true);
    return (
      <div
        className="flex flex-col w-full min-h-screen"
        style={{ fontFamily: "cursive", backgroundColor: "#8D8FAF" }}
      >
        <div className="flex h-40">
          <LogoHeaderArea />
        </div>
        <div className="flex items-center justify-center w-full h-full p-5">
          {isLogin ? (
            <LoginForm setIsLogin={setIsLogin} />
          ) : (
            <SignupForm setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    );
  }
  
  export default LoginScreen;