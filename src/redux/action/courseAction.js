import axios from "axios";
import {
  setCategory,
  setCourse,
  setDetail,
  setSearch,
} from "../reducer/courseReducers";

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
    dispatch(setDetail(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
  }
};
