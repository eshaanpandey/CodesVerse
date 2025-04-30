import axios from "axios";
import { GET_LOGGEDIN_USER } from "./userTypes";

const BaseUrl = process.env.REACT_APP_BASE_URL;

export const getLoggedInUser = () => async (dispatch) => {
  try {
    const { data } = await axios({
      url: `${BaseUrl}/user/profile`,
      method: "GET",
    });

    return dispatch({
      type: GET_LOGGEDIN_USER,
      payload: { user: data.user, solvedProblems: data.solvedProblems },
    });
  } catch (error) {
    return dispatch({
      payload: error.response?.data || error.message,
    });
  }
};
