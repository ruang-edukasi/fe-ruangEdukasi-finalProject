import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";

function AllCourse() {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const [sliceCourse, setSliceCourse] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
  }, [dispatch, errors]);

  useEffect(() => {
    if (course.length > 0) {
      setSliceCourse(course.slice(0, 12));
    }
  }, [course]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-5 pt-4">
      {sliceCourse.map((courses) => (
        <CourseItem
          key={courses?.id}
          id={courses?.id}
          imageURL=""
          courseName={courses?.courseName}
          instructorName={courses?.instructorName}
          courseDescription={courses?.courseDescription}
          price={courses?.price}
          rating={courses?.rating}
          courseType={courses?.courseType}
          courseCategory={courses?.courseCategory}
          courseLevel={courses?.courseLevel}
        />
      ))}
    </div>
  );
}

export default AllCourse;
