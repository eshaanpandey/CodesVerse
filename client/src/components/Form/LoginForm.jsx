import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../redux/reducers/auth/authActions";
import InputWithLabel from "./InputWithLabel";
import CustomButton from "../CustomButton";

function LoginForm({ setIsLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const [errorMessage, setErrorMessage] = useState();

  function onLogin() {
    dispatch(signin(userData, navigate)).then((data) => {
      if (data.type === "ERROR") {
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
          placeholder={"Email or Username"}
          id={"EmailorUsername"}
          handleChange={handleChange}
        />
        <InputWithLabel
          type={"password"}
          label={"Enter your Password"}
          placeholder={"Password"}
          id={"Password"}
          handleChange={handleChange}
        />
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
        <CustomButton
          text={"Sign In"}
          bgColor={"black"}
          textColor="white"
          onPress={onLogin}
        />
      </div>
      <h1>
        Don't have an account?{" "}
        <span
          className="text-blue-900 cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </span>
      </h1>
    </div>
  );
}

export default LoginForm;
