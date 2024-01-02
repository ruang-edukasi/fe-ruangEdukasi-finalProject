import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import authAdminReducer from "./authAdminReducer";
import courseReducers from "./courseReducers";
import courseAdminReducer from "./courseAdminReducer";

export default combineReducers({
  auth: authReducer,
  course: courseReducers,
  authAdmin: authAdminReducer,
  courseAdmin: courseAdminReducer,
});
