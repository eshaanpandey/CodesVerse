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
    <div className="flex flex-col items-center w-full ">
      <h1 className="text-3xl font-bold mb-4 text-center">Sign In</h1>
      <p className="mb-4 text-center">Sign in to your account</p>
      <div className="flex flex-col items-start w-full max-w-md">
        <InputWithLabel
          type={"text"}
          label={"Enter your Email"}
          placeholder={"Email"}
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
        {errorMessage && (
          <p className="text-red-700 text-center mt-2">{errorMessage}</p>
        )}
        <CustomButton
          text={"Sign In"}
          bgColor={"black"}
          textColor="white"
          onPress={onLogin}
        />
      </div>
      <h1 className="text-center mt-4">
        Don't have an account?{" "}
        <span
          className="text-blue-900 dark:text-blue-300 cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </span>
      </h1>
    </div>
  );
}

export default LoginForm;
