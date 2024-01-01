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
  setCourseItem,
  setDetailCategory,
  setCourseDashbord,
  setEnrollMessage,
  setAddprogess,
} from "../reducer/courseReducers";
import Swal from "sweetalert2";
import { setToken } from "../reducer/authReducer";

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

export const getPopularCourseCategory =
  (id, errors, setErrors) => async (dispatch) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/popular/${id}`
      );
      const { data } = response.data;
      dispatch(setDetail(data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          ...errors,
          isError: true,
          message: error?.response?.data?.message || error?.message,
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

export const getMyCourse =
  (setErrors, errors) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/user/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { response } = data.data;
      dispatch(setMyCourse(response?.riwayatOrder));
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

export const getDetail =
  (id, currentVideoIndex) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;
      if (token) {
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
        if (currentVideoIndex < content.length) {
          dispatch(setCourseItem(content[currentVideoIndex]));
        }
      } else {
        const detail = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/course/${id}`
        );
        const { response } = detail.data;
        const content = response.courseContent;
        const [contentObject] = content;
        dispatch(setDetail(response));
        dispatch(setCourseContent(content));
        dispatch(setCourseItem(content[contentObject?.id]));

        //get next video
        if (currentVideoIndex < content.length) {
          dispatch(setCourseItem(content[currentVideoIndex]));
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status) {
          dispatch(setToken(""));
        }
        // alert(error?.response?.data?.message);
        return;
      }
    }
  };

export const getCourseDashbord = (filters) => async (dispatch) => {
  try {
    const params = new URLSearchParams();

    if (filters.category && filters.category.length > 0) {
      filters.category.forEach((categoryId) => {
        params.append("catId", categoryId);
      });
    }

    if (filters.level && filters.level.length > 0) {
      filters.level.forEach((levelId) => {
        params.append("levelId", levelId);
      });
    }

    const apiUrl = `${
      import.meta.env.VITE_API_URL
    }/api/v1/search/multi/?${params.toString()}`;

    const data = await axios.get(apiUrl);

    const { response } = data.data;
    console.log("data get from api", response);

    dispatch(setCourseDashbord(response));
  } catch (error) {
    console.error("Error fetching data:", error);

    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
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
        navigate("/waiting-payment");
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
    const { responseCoupon } = response.data;
    dispatch(setCoupon(responseCoupon));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert.error(error);
    }
  }
};

export const getDetailCategory =
  (id, errors, setErrors) => async (dispatch) => {
    try {
      const detail = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/course/category/${id}`
      );
      const { response } = detail.data;
      dispatch(setDetailCategory(response));
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

export const enrollClass = (id, token, navigate) => async (dispatch) => {
  try {
    const enroll = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/user/enroll/course/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { message } = enroll.data;
    dispatch(setEnrollMessage(message));

    Swal.fire({
      title: enroll.data.message,
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/payment-succes");
      }
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error?.response?.data);
    }
  }
};
export const addProgres = (id, contentId) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;
    const progress = await axios.post(
      `${
        import.meta.env.VITE_API_URL
      }/api/v1/progress/course/${id}/content/${contentId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { response } = progress.data;
    dispatch(setAddprogess(response));
    // alert("mantap bang id :", contentId, "  udah kamu kelarin");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error?.response?.data);
    }
  }
};
