import axios from "axios";
import { setError, setSucces, setToken, setUser } from "../reducer/authReducer";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch(setError(""));
    dispatch(setToken(null));
    const fetch = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/user/login`,
      {
        email,
        password,
      }
    );
    const { response } = fetch.data;
    const { token } = response;
    dispatch(setToken(token));
    alert(fetch.data.message);
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (
        error?.response?.data?.message ===
        "Email is not registered in our system"
      ) {
        dispatch(setError("Alamat email tidak terdaftar!"));
      } else if (error?.response?.data?.message === "Wrong password") {
        dispatch(setError("Maaf, kata sandi salah"));
      }
      return;
    }
    alert(error?.message);
  }
};
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch(setError(""));
    dispatch(setSucces(""));
    const fetch = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/user/reset-password`,
      {
        email,
      }
    );
    const { message } = fetch.data;
    dispatch(setSucces("Tautan reset password terkirim"));

    alert(message);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error?.response?.data?.message === "Email not found") {
        dispatch(setError("Alamat email tidak terdaftar!"));
      }
      return;
    }
    alert(error?.message);
  }
};

export const register =
  (email, full_name, password, phone_number, navigate) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/user/register`,
        {
          full_name,
          email,
          password,
          phone_number,
        }
      );
      const { data } = response;
      const token = data;

      // Save our token
      dispatch(setToken(token));

      // Redirect to home
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }
      alert(error?.message);
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};

export const profile =
  (navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { response } = data.data;

      dispatch(setUser(response));

      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.data.status === 401) {
          dispatch(logout());

          if (navigatePathError) navigate(navigatePathError);
          return;
        }

        alert(error?.data?.response?.message);
        return;
      }

      alert(error?.message);
    }
  };
