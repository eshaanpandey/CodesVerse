import { GET_LOGGEDIN_USER, GET_LOGGEDIN_USER_ERROR } from "./userTypes";

const initialState = {
  user: null,
  solvedProblems: [],
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOGGEDIN_USER:
      return {
        ...state,
        user: action.payload.user,
        solvedProblems: action.payload.solvedProblems,
        error: null,
      };
    case GET_LOGGEDIN_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        user: null,
        solvedProblems: [],
      };

    default:
      return state;
  }
}
