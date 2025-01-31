import axios from "axios";

import { RUN_A_PROGRAM, SUBMIT_A_SOLUTION } from "./solutionTypes";

const runProgram =
  ({ problemData, problemId }) =>
  async (dispatch) => {
    try {
      const solution = await axios({
        url: `https://codesverse.onrender.com/judge/solutions/run/${problemId}`,
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
        url: `https://codesverse.onrender.com/judge/solutions/submit/${problemId}`,
        method: "POST",
        data: problemData,
      });

      return dispatch({ type: SUBMIT_A_SOLUTION, payload: solution });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

export { 
  runProgram, 
  submitSolution 
};