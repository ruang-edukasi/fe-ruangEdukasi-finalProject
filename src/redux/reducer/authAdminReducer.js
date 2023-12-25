import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  admin: null,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
export const { setToken, setAdmin, setError } = authSlice.actions;
export default authSlice.reducer;
