import axios from "axios";

import { RUN_A_PROGRAM, SUBMIT_A_SOLUTION } from "./solutionTypes";

const BaseUrl = process.env.REACT_APP_BASE_URL;

const runProgram =
  ({ problemData, problemId }) =>
  async (dispatch) => {
    try {
      const solution = await axios({
        url: `${BaseUrl}/solutions/run/${problemId}`,
        method: "POST",
        data: problemData,
      });

      return dispatch({ type: RUN_A_PROGRAM, payload: solution });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

const submitSolution =
  ({ problemData, problemId }) =>
  async (dispatch) => {
    try {
      const solution = await axios({
        url: `${BaseUrl}/solutions/submit/${problemId}`,
        method: "POST",
        data: problemData,
      });

      return dispatch({ type: SUBMIT_A_SOLUTION, payload: solution });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

export { runProgram, submitSolution };
