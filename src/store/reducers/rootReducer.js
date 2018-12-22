import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// stores all reducers that we have
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
