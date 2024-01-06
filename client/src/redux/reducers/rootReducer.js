import { combineReducers } from "redux";

import problemsReducer from "./problems/problemsReducer.js";
import authReducer from "./auth/authReducer.js";
import userReducer from "./user/useReducer.js";
import solutionsReducer from "./solutions/solutionReducer.js";


const rootReducer = combineReducers({
  authReducer,
  userReducer,
  problemsReducer,
  solutionsReducer,
});

export default rootReducer;