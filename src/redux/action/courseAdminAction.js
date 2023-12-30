import {
  setMyCourse,
  setCourse,
  setCreateCourse,
  setDeleteCourse,
  setMyOrder,
  setCourseSummary,
  setEditCourse,
  setCreateCourseContent,
} from "../reducer/courseAdminReducer";
import Swal from "sweetalert2";
import axios from "axios";

export const getMyCourse =
  (setErrors, errors) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;
      let allOrders = [];

      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/dashboard/course`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { myCourse } = data.data.response;

      myCourse.map((course) => {
        allOrders = allOrders.concat(course.orders);
      });

      dispatch(setMyCourse(myCourse));
      dispatch(setMyOrder(allOrders));
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

export const getPaymentVerification =
  (orderTrx, setErrors, errors) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const data = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/admin/order/verification/${orderTrx}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { response } = data.data.response;

      dispatch(setMyOrder(response));
      console.log(response);
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

export const getCourseSummary =
  (setErrors, errors) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/dashboard/course/summary`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const courseSummary = data.data.responseCourse;
      dispatch(setCourseSummary(courseSummary));
      // console.log(courseSummary);
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

export const getCourse = (setErrors, errors) => async (dispatch, getState) => {
  try {
    let { token } = getState().auth;

    const data = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/admin/course`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { myCourse } = data.data.response;
    dispatch(setCourse(myCourse));
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

export const editCourse =
  (id, formData, navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const data = await axios.put(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/admin/course/update-course/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { response } = data.data.response;
      dispatch(setEditCourse(response));

      Swal.fire({
        title: "Ubah data berhasil!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/kelolakelas-admin");
        }
      });

      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan saat menambah kelas!",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
        if (navigatePathError) navigate(navigatePathError);
        // alert(error?.response?.data?.message || "An error occurred.");
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat menambah kelas!",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
      // alert(error?.message || "An error occurred.");
    }
  };

export const addCourse =
  (formData, navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/course`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { response } = data.data;
      dispatch(setCreateCourse(response));
      // console.log(response);

      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Tambah kelas berhasil!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/kelolakelas-admin");
        }
      });
      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan saat menambah kelas!",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
        if (navigatePathError) navigate(navigatePathError);
        // alert(error?.response?.data?.message || "An error occurred.");
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat menambah kelas!",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
      // alert(error?.message || "An error occurred.");
    }
  };

export const deleteCourse =
  (id, errors, setErrors) => async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/course/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { data } = response.data;
      dispatch(setDeleteCourse(data));

      Swal.fire("Terhapus!", "Course telah dihapus.", "success");
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

export const addCourseContent =
  (id, formData, navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/course/content/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { response } = data.data;
      dispatch(setCreateCourseContent(response));
      // console.log(response);

      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Tambah konten berhasil!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/kelolakelas-admin");
        }
      });
      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan saat menambah konten!",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
        if (navigatePathError) navigate(navigatePathError);
        // alert(error?.response?.data?.message || "An error occurred.");
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat menambah konten!",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
      // alert(error?.message || "An error occurred.");
    }
  };
