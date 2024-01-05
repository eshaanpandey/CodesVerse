import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import {thunk} from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;