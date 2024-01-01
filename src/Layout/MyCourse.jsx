import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";

function MyCourse() {
  const dispatch = useDispatch();
  const { myCourse } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    if (token) {
      dispatch(getMyCourse(errors, setErrors));
    }
  }, [dispatch, errors, token]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  return (
    <>
      {myCourse?.myCourse?.map((courses) => (
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
      {/* {console.log(myCourse)} */}
    </>
  );
}

export default MyCourse;
