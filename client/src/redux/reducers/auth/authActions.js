import axios from "axios";

import { SIGN_IN, SIGN_OUT, SIGN_UP } from "./authTypes";

const BaseUrl = process.env.REACT_APP_BASE_URL;

export const signin = (userData, navigate) => async (dispatch) => {
  try {
    const user = await axios({
      url: `${BaseUrl}/auth/login`,
      method: "POST",
      data: userData,
    });

    localStorage.setItem(
      "judgeUser",
      JSON.stringify({ token: user.data.token })
    );
    navigate("/");

    return dispatch({ type: SIGN_IN, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signup = (userData, navigate) => async (dispatch) => {
  try {
    const user = await axios({
      url: `${BaseUrl}/auth/signup`,
      method: "POST",
      data: userData,
    });

    localStorage.setItem(
      "judgeUser",
      JSON.stringify({ token: user.data.token })
    );

    navigate("/");

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
