import axios from "axios";

import { GET_LOGGEDIN_USER } from "./userTypes";

export const getLoggedInUser = () => async (dispatch) => {
  try {
    const user = await axios({
      url: "http://localhost:4000/codeslayer/user",
      method: "GET",
    });

    return dispatch({ type: GET_LOGGEDIN_USER, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};