import axios from "axios";
import { setToken, setUser } from "../reducer/authReducer";


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
      const {verifId} = response
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
    const { response} = verifresponse.data;
    const {token} = response
   
    dispatch(setToken(token));

   
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }
    alert(error?.message);
  }
};

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
