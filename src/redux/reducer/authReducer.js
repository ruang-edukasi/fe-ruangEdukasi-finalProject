import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  errorMessage: "",
  succesMessage: "",
  verifEmail: "",
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
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
    setSucces: (state, action) => {
      state.succesMessage = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setVerifEmail: (state, action) => {
      state.verifEmail = action.payload;
    },
  },
});
export const { setToken, setUser, setError, setSucces, setVerifEmail } =
  authSlice.actions;
export default authSlice.reducer;
