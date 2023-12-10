import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import CustomButton from "../CustomButton";
// import { useDispatch } from "react-redux";
// import { signup } from "../../redux/reducers/auth/authActions";

function SignupForm({ setIsLogin }) {
  function loginHandler() {
    setIsLogin(true);
  }

  const [userData, setUserData] = useState();
  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

//   const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState();

//   function onSignUp() {
//     console.log(userData);
//     dispatch(signup(userData)).then((data) => {
//       if (data.type == "ERROR") {
//         console.log(data.payload.response.data)
//         setErrorMessage(data.payload.response.data.error);
//       }
//     });
//   }

  return (
    <div className="">
      <h1 className="text-2xl">Sign Up</h1>
      <p>Enter your details:</p>
      <div className="flex flex-col items-start w-full p-5 my-5 bg-white rounded-lg shadow-2xl">
        <InputWithLabel
          type={"text"}
          label={"Enter your Name"}
          palceholder={"Name"}
          handleChange={handleChange}
          id={"name"}
        />
        <InputWithLabel
          type={"text"}
          label={"Enter your Email"}
          palceholder={"Email"}
          handleChange={handleChange}
          id={"email"}
        />
        <InputWithLabel
          type={"text"}
          label={"Enter your Username"}
          palceholder={"Username"}
          handleChange={handleChange}
          id={"userName"}
        />
        <InputWithLabel
          type={"password"}
          label={"Enter your Password"}
          palceholder={"Password"}
          handleChange={handleChange}
          id={"password"}
        />
        <div className="flex justify-center w-full mb-4">
          <h1 className="text-blue-600">Forgot Password ?</h1>
        </div>
        {errorMessage && (
          <div className="flex justify-center w-full">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        )}
        <CustomButton
        //   onPress={onSignUp}
          text={"Sign Up"}
          bgColor={"black"}
          textColor="white"
        />
      </div>
      <div className="flex justify-center w-full">
        <h1>
          Already have an account?
          <span className="text-blue-900 cursor-pointer" onClick={loginHandler}>
            {" "}
            Sign In
          </span>
        </h1>
      </div>
    </div>
  );
}

export default SignupForm;