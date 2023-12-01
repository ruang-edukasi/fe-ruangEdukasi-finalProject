import axios from "axios";
import { setToken } from "../reducer/authReducer";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/user/login`,
      {
        email,
        password,
      }
    );
    const { response } = data.data;

    const { token } = response;
    dispatch(setToken(token));
    alert("login succesfully");
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
