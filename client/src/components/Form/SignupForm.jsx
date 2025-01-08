import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../redux/reducers/auth/authActions";
import InputWithLabel from "./InputWithLabel";
import CustomButton from "../CustomButton";

function SignupForm({ setIsLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  function onSignUp() {
    dispatch(signup(userData, navigate)).then((data) => {
      if (data.type === "ERROR") {
        setErrorMessage(data.payload.response.data.error);
      }
    });
  }

  return (
    <div className="">
      <h1 className="text-2xl">Sign Up</h1>
      <p>Enter your details.</p>
      <div className="flex flex-col items-start w-full p-5 my-5 bg-white rounded-lg shadow-2xl">
        <InputWithLabel
          type={"text"}
          label={"Enter your Name"}
          placeholder={"Name"}
          handleChange={handleChange}
          id={"name"}
        />
        <InputWithLabel
          type={"text"}
          label={"Enter your Email"}
          placeholder={"Email"}
          handleChange={handleChange}
          id={"email"}
        />
        <InputWithLabel
          type={"text"}
          label={"Enter your Username"}
          placeholder={"Username"}
          handleChange={handleChange}
          id={"username"}
        />
        <InputWithLabel
          type={"password"}
          label={"Enter your Password"}
          placeholder={"Password"}
          handleChange={handleChange}
          id={"password"}
        />
        {errorMessage && <p className="text-red-700">{errorMessage}</p>}
        <CustomButton
          onPress={onSignUp}
          text={"Sign Up"}
          bgColor={"black"}
          textColor="white"
        />
      </div>
      <h1>
        Already have an account?{" "}
        <span
          className="text-blue-900 cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </span>
      </h1>
    </div>
  );
}

export default SignupForm;
