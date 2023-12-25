import { setAdmin } from "../reducer/authAdminReducer";
import { setCourse, setCreateCourse } from "../reducer/courseAdminReducer";
import Swal from "sweetalert2";
import axios from "axios";

export const getCourse = (setErrors, errors) => async (dispatch) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/course`
    );
    const { response } = data.data;
    dispatch(setCourse(response));
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

export const updateCourse =
  (
    id,
    newCategoryName,
    newImageUrl,
    categoryName,
    imageUrl,
    navigate,
    navigatePathSuccess,
    errors,
    setErrors
  ) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const formData = new FormData();
      formData.append("categoryName", newCategoryName);
      formData.append("imageUrl", newImageUrl);

      const data = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/admin/course/update-category/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { response } = data.data;
      dispatch(setAdmin(response));

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

export const addCourse =
  (instructorName, courseName, courseDescription, price) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/course`,
        {
          instructorName,
          courseName,
          courseDescription,
          price,
        }
      );
      const { data } = response.data;
      dispatch(setCreateCourse(data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }
      alert(error?.message);
    }
  };
