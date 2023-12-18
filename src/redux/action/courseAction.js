import axios from "axios";
import {
  setCategory,
  setCourse,
  setSearch,
  setPopular,
  setMyCourse,
  setDetail,
  setCourseContent,
  setCourseItem,
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
export const getDetail =
  (id, currentVideoIndex) => async (dispatch, getState) => {
    try {
      

      let { token } = getState().auth;
      const detail = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/course/read/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { response } = detail.data;
      const content = response.courseContent;
      const [contentObject] = content;
      dispatch(setDetail(response));
      dispatch(setCourseContent(content));
      dispatch(setCourseItem(content[contentObject?.id]));

      //get next video
      if (currentVideoIndex < content.length - 1) {
        dispatch(setCourseItem(content[currentVideoIndex]));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }
    }
  };
