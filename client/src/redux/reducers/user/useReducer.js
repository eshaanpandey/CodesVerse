import { GET_LOGGEDIN_USER } from "./userTypes";

const initialState = { user: {} };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGGEDIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};

export default userReducer;