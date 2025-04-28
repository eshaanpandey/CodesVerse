import axios from "axios";

import { GET_LOGGEDIN_USER } from "./userTypes";

const BaseUrl = process.env.REACT_APP_BASE_URL;

export const getLoggedInUser = () => async (dispatch) => {
  try {
    const user = await axios({
      url: `${BaseUrl}/user`,
      method: "GET",
    });

    return dispatch({ type: GET_LOGGEDIN_USER, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
