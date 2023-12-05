import { setToken, setAdmin } from "../reducer/authAdminReducer";
import axios from "axios";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/admin/login`,
      {
        email,
        password,
      }
    );
    const { response } = data.data;
    const { token } = response;
    console.log(response);

    // Save our token
    dispatch(setToken(token));
    alert("login succesfully");
    //* Redirect to home or reload the home
    navigate("/dashbord-admin");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.data?.response?.message);
      return;
    }
    alert(error?.message);
  }
};

export const profile =
  (navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().authAdmin;
      if (!token) return;

      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { response } = data.data;

      // Set the user state from API data
      dispatch(setAdmin(response));

      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.data.status === 401) {
          localStorage.removeItem("token");

          if (navigatePathError) navigate(navigatePathError);
          return;
        }

        alert(error?.data?.response?.message);
        return;
      }

      alert(error?.message);
    }
  };
