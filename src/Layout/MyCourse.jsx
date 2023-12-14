import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";

function MyCourse() {
  const dispatch = useDispatch();
  const { myCourse } = useSelector((state) => state.course);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getMyCourse(setErrors, errors));
    console.log(myCourse);
  }, [dispatch, errors, myCourse]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }
  return (
    <div>
      {myCourse.myCourse.map((courses) => (
        <CourseItem
          key={courses?.id}
          id={courses?.id}
          imageURL=""
          courseName={courses?.courseName}
          instructorName={courses?.instructorName}
          courseType={courses?.courseType}
          courseCategory={courses?.courseCategory}
          courseLevel={courses?.courseLevel}
        />
      ))}
    </div>
  );
}

export default MyCourse;
