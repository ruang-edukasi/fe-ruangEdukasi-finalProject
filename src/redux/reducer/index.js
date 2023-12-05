import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import authAdminReducer from "./authAdminReducer";
import courseReducers from "./courseReducers";

export default combineReducers({
  auth: authReducer,
  course: courseReducers,
  authAdmin: authAdminReducer,
});
