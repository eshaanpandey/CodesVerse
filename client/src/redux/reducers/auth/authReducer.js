import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./authTypes";

const initialState = {
  isAuthenticated: !!localStorage.getItem("judgeUser"), 
  user: JSON.parse(localStorage.getItem("judgeUser")) || null, 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true, 
        user: action.payload.data,
      };
    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: true, 
        user: action.payload.data,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false, 
        user: null, 
      };
    default:
      return state;
  }
};

export default authReducer;
