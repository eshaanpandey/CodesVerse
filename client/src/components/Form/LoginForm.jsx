import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import CustomButton from "../CustomButton";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/reducers/auth/authActions";

function LoginForm({ setIsLogin }) {
  function isLoginHandler() {
    setIsLogin(false);
  }

  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "EmailorUsername") {
      if (/\S+@\S+\.\S+/.test(e.target.value)) {
        setUserData((prev) => ({
          ...prev,
          email: e.target.value,
          userName: "",
        }));
      } else {
        setUserData((prev) => ({
          ...prev,
          userName: e.target.value,
          email: "",
        }));
      }
    } else {
      setUserData((prev) => ({ ...prev, password: e.target.value }));
    }
  };

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState();

  function onLogin() {
    dispatch(signin(userData)).then((data) => {
      console.log(data);
      if (data.type == "ERROR") {
        setErrorMessage(data.payload.response.data.error);
      }
    });
  }

  return (
    <div className="">
      <h1 className="text-2xl">Sign In</h1>
      <p>Sign in to your account</p>
      <div className="flex flex-col items-start w-full p-5 my-5 bg-white rounded-lg shadow-2xl">
        <InputWithLabel
          type={"text"}
          label={"Enter your Email or Username"}
          palceholder={"Email or Username"}
          id={"EmailorUsername"}
          handleChange={handleChange}
        />
        <InputWithLabel
          type={"password"}
          label={"Enter your Password"}
          palceholder={"Password"}
          id={"Password"}
          handleChange={handleChange}
        />
        <div className="flex justify-center w-full mb-4">
          <h1 className="text-blue-600">Forgot Password ?</h1>
        </div>
        {errorMessage && <div className="flex justify-center w-full"><p className="text-red-700">{errorMessage}</p></div>}
        <CustomButton
          text={"Sign In"}
          bgColor={"black"}
          textColor="white"
          onPress={onLogin}
        />
      </div>
      <div className="flex justify-center w-full">
        <h1>
          Don't have an account?
          <span
            className="text-blue-900 cursor-pointer"
            onClick={isLoginHandler}
          >
            {" "}
            Sign Up
          </span>
        </h1>
      </div>
    </div>
  );
}

export default LoginForm;
