import axios from "axios";
import Swal from "sweetalert2";
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

    Swal.fire({
      title: fetch.data.message,
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
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
export const reset =
  (resetId, password, confirm_password) => async (dispatch) => {
    try {
      const fetch = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/auth/user/set-password/${resetId}`,
        {
          password,
          confirm_password,
        }
      );

      const { message } = fetch.data;
      dispatch(setSucces(message));
      alert(message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(resetId, password, confirm_password);
        alert(error?.response?.data?.message);
        return;
      }
      alert(error?.message);
    }
  };

export const register =
  (email, full_name, password, phone_number, navigate) => async (dispatch) => {
    try {
      // Langkah 1: Registrasi pengguna dan mendapatkan verifId
      const registrationResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/user/register`,
        {
          full_name,
          email,
          password,
          phone_number,
        }
      );
      const { response } = registrationResponse.data;
      const { verifId } = response;
      console.log(verifId);

      navigate(`/otp/${verifId}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }
      alert(error?.message);
    }
  };

export const verificationOTP = (otp, verifId, navigate) => async (dispatch) => {
  try {
    const verifresponse = await axios.post(
      `${
        import.meta.env.VITE_API_URL
      }/api/v1/auth/user/otp?verification=${verifId}`,
      {
        otp,
      }
    );
    const { response } = verifresponse.data;
    const { token } = response;
    dispatch(setToken(token));

    // Mengganti alert dengan SweetAlert2
    Swal.fire({
      title: verifresponse.data.message,
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
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
