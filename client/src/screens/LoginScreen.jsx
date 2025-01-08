import React, { useState } from "react";

import SignupForm from "../components/Form/SignupForm.jsx";
import LoginForm from "../components/Form/LoginForm.jsx";
// import LogoHeaderArea from "../components/Headers/LogoHeaderArea.jsx";
import Navbar from "../components/Headers/Navbar/Navbar.jsx";

// import { useSelector } from "react-redux";

function LoginScreen() {
    const [isLogin, setIsLogin] = useState(true);
    return (
      <div
        className="flex flex-col w-full min-h-screen bg-cyan-100"
        // style={{ fontFamily: "cursive"}}
      >
        <div className="flex h-40">
          {/* <LogoHeaderArea /> */}
          <Navbar/>
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