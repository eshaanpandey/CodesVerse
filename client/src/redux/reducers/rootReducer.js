import { combineReducers } from "redux";

import problemsReducer from "./problems/problemsReducer.js";

const rootReducer = combineReducers({
  problemsReducer,
});

export default rootReducer;