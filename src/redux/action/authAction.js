import axios from "axios";
import Swal from "sweetalert2";
import {
  setError,
  setSucces,
  setToken,
  setUser,
  setVerifEmail,
} from "../reducer/authReducer";

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
      dispatch(setSucces(""));
      dispatch(setError(error?.response?.data?.message));
      // if (
      //   error?.response?.data?.message ===
      //   "Email is not registered in our system"
      // ) {
      //   // dispatch(setSucces(""));
      // } else if (error?.response?.data?.message === "Wrong password") {
      //   dispatch(setError("Maaf, kata sandi salah"));
      //   // dispatch(setSucces(""));
      // }
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
    Swal.fire({
      title: fetch.data.message,
      icon: "success",
    });
    dispatch(setSucces(fetch.data.message));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(setSucces(""));
      dispatch(setError(error?.response?.data?.message));
      // if (error?.response?.data?.message === "Email not found") {
      // }
      return;
    }
    alert(error?.message);
  }
};
export const reset =
  (resetId, password, confirm_password, navigate) => async (dispatch) => {
    try {
      dispatch(setError(""));
      dispatch(setSucces(""));
      const fetch = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/auth/user/set-password/${resetId}`,
        {
          password,
          confirm_password,
        }
      );

      dispatch(setSucces("Reset Password berhasil!"));
      Swal.fire({
        title: fetch.data.message,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
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
      const { verifId, verifEmail } = response;

      dispatch(setVerifEmail(verifEmail));

      navigate(`/otp/${verifId}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 409) {
          // Customize the alert message for email already registered
          alert(
            "Email has already been registered. Please use a different email."
          );
        } else {
          // Handle other errors
          console.error("Registration error:", error);
          alert("An error occurred during registration. Please try again.");
        }
        return;
      }
     Swal.fire({
       icon: "error",
       title: "Registration Error",
       text: "Email sudah terdaftar. Silakan gunakan email lain.",
     });
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

export const renewOTP = (verifId) => async () => {
  try {
    const renewResponse = await axios.post(
      `${
        import.meta.env.VITE_API_URL
      }/api/v1/auth/user/renew-otp?verification=${verifId}`
    );

    Swal.fire({
      title: renewResponse.data.message,
      icon: "success",
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

export const updateProfile =
  (
    full_name,
    phone_number,
    city,
    country,
    photo,
    navigate,
    navigatePathSuccess,
    navigatePathError
  ) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const formData = new FormData();
      formData.append("full_name", full_name);
      formData.append("phone_number", phone_number);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("photo", photo);

      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/user/profile/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { response } = data.data;
      dispatch(setUser(response));

      Swal.fire({
        title: data.data.message,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/profile-akun");
        }
      });

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

export const changePassword =
  (
    old_password,
    new_password,
    confirm_password,
    navigate,
    navigatePathSuccess,
    navigatePathError
  ) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/user/profile/change-password`,
        {
          old_password,
          new_password,
          confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { response } = data.data;

      dispatch(setUser(response));

      Swal.fire({
        title: data.data.message,
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/ubah-password");
        }
      });

      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          dispatch(logout());

          if (navigatePathError) navigate(navigatePathError);
          return;
        }

        alert(error?.response?.data?.message);
        return;
      }

      alert(error?.message);
    }
  };
