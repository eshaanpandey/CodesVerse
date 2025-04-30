import { GET_LOGGEDIN_USER } from "./userTypes";

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
    default:
      return state;
  }
}
