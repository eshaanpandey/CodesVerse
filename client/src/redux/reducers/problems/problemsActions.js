import axios from "axios";

import { GET_PROBLEMS_LIST, GET_PROBLEM_BY_ID } from "./problemsTypes";

export const getProblemsList = () => async (dispatch) => {
  try {
    const problems = await axios({
      url: "http://localhost:4000/judge/problems/viewAllProblems",
      method: "GET",
    });

    return dispatch({ type: GET_PROBLEMS_LIST, payload: problems });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getProblemById = (_id) => async (dispatch) => {
  try {
    const problem = await axios({
      url: `http://localhost:4000/judge/problems/viewProblem/${_id}`,
      method: "GET",
    });

    return dispatch({ type: GET_PROBLEM_BY_ID, payload: problem });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};