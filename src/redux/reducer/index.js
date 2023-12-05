import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import courseReducers from "./courseReducers";

export default combineReducers({
  auth: authReducer,
  course: courseReducers,
});
