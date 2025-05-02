import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./authTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
};

// On module load, hydrate if present:
const stored = localStorage.getItem("judgeUser");
if (stored) {
  try {
    const { token } = JSON.parse(stored);
    initialState.isAuthenticated = true;
    initialState.user = { token };
  } catch {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: { token: action.payload.data.token },
      };
    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        user: { token: action.payload.data.token },
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
