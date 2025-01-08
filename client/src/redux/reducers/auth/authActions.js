import axios from "axios";

import { SIGN_IN, SIGN_OUT, SIGN_UP } from "./authTypes";

export const signin = (userData, navigate) => async (dispatch) => {
  try {
    const user = await axios({
      // url: "http://localhost:4000/judge/auth/login",
      url: "https://codesverse.onrender.com/judge/auth/login",
      method: "POST",
      data: userData,
    });

    localStorage.setItem("judgeUser", JSON.stringify(user.data.token));
    navigate("/home");

    return dispatch({ type: SIGN_IN, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signup = (userData, navigate) => async (dispatch) => {
  try {
    const user = await axios({
      url: "https://codesverse.onrender.com/judge/auth/signup",
      method: "POST",
      data: userData,
    });

    localStorage.setItem("judgeUser", JSON.stringify(user.data.token));

    navigate("/home");

    return dispatch({ type: SIGN_UP, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signout = () => async (dispatch) => {
  try {
    localStorage.removeItem("judgeUser"); 
    dispatch({ type: SIGN_OUT }); 
  } catch (error) {
    console.log("Error during logout", error); 
    return dispatch({ type: "ERROR", payload: error });
  }
};

