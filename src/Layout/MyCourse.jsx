import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";
import Swal from "sweetalert2";

function MyCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const { myCourse } = useSelector((state) => state.course);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const isLoggedIn = userToken !== null;

    if (!token && !isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan login terlebih dahulu!",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login");
      });
    } else {
      dispatch(getMyCourse(setErrors, errors));
    }
  }, [dispatch, errors, myCourse, navigate, token, user]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  return (
    <>
      {myCourse.map((courses) => (
        <CourseItem
          key={courses?.id}
          id={courses?.id}
          thumbnailCourse={courses?.thumbnailCourse || "/course.jpg"}
          courseName={courses?.courseName}
          instructorName={courses?.instructorName}
          courseType={courses?.courseType}
          courseCategory={courses?.courseCategory}
          courseLevel={courses?.courseLevel}
        />
      ))}
    </>
  );
}

export default MyCourse;
