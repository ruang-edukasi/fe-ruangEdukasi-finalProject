import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import authAdminReducer from "./authAdminReducer";

export default combineReducers({
  auth: authReducer,
  authAdmin: authAdminReducer,
});
