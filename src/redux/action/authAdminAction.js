import { setToken, setAdmin, setError } from "../reducer/authAdminReducer";
import axios from "axios";
import Swal from "sweetalert2";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch(setError(""));
    dispatch(setToken(null));
    const data = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/admin/login`,
      {
        email,
        password,
      }
    );
    const { response } = data.data;
    const { token } = response;
    // console.log(response);
    dispatch(setToken(token));
    Swal.fire({
      title: data.data.message,
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashbord-admin");
      }
    });
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

export const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setAdmin(null));
};
