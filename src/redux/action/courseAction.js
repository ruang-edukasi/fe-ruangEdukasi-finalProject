import axios from "axios";
import {
  setCategory,
  setCourse,
  setSearch,
  setPopular,
  setMyCourse,
  setDetail,
  setCourseContent,
  setOrderCourse,
  setCoupon,
} from "../reducer/courseReducers";
import Swal from "sweetalert2";

//get catgory course
export const getCategory = (setErrors, errors) => async (dispatch) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/category`
    );
    const { response } = data.data;
    dispatch(setCategory(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.data?.response?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

// get all course
export const getCourse = (setErrors, errors) => async (dispatch) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/course`
    );
    const { response } = data.data;
    dispatch(setCourse(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.data?.response?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getPopular = (setErrors, errors) => async (dispatch) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/Popular`
    );
    const { response } = data.data;
    dispatch(setPopular(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.data?.response?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

export const getMyCourse = (setErrors, errors) => async (dispatch) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/user/dashboard`
    );
    const { response } = data.data;
    dispatch(setMyCourse(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        isError: true,
        message: error?.data?.response?.message || error?.message,
      });
      return;
    }
    alert(error?.message);
    setErrors({
      ...errors,
      isError: true,
      message: error?.message,
    });
  }
};

// search course
export const getSearchCourse =
  (setErrors, errors, query) => async (dispatch) => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/search/?course=${query}`
      );
      const { response } = data.data;

      dispatch(setSearch(response));
      setErrors({ ...errors, isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          ...errors,
          isError: true,
          message: error?.data?.response?.message || error?.message,
        });
      }

      alert(error?.message);
      setErrors({
        ...errors,
        isError: true,
        message: error?.message,
      });
    }
  };

// detail course
export const getDetail = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/course/${id}`
    );
    const { response } = detail.data;
    const [content] = response.courseContent;
    dispatch(setDetail(response));
    dispatch(setCourseContent(content));
    // console.log(detail);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  }
};

export const getOrderCourse = (id, navigate) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;

    const order = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/user/order/course/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { response } = order.data;
    dispatch(setOrderCourse(response));

    Swal.fire({
      title: order.data.message,
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/payment-succes");
      }
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  }
};

export const checkCoupon = (id, coupon_code) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/check/coupon/course/${id}`,
      {
        coupon_code,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    const { responseCoupon } = response.data;
      dispatch(setCoupon(responseCoupon));

   
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert.error(error);
    }
  }
};
