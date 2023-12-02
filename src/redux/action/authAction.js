import axios from "axios";
import { setToken } from "../reducer/authReducer";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
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
      console.error("errror :", error);
      alert(error?.data?.response?.message);
      return;
    }
    console.error("errror :", error);
    alert(error?.message);
  }
};
