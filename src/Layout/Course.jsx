import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";

function Course() {
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
      setSliceCourse(course.slice(0, 9));
    }
  }, [course]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (sliceCourse.length === 0) {
    return <div className="skeleton w-32 h-32"></div>;
  }

  return (
    <>
      <div className="container flex flex-wrap">
        <div className="carousel rounded-box py-2 gap-5">
          {sliceCourse.map((courses) => (
            <>
              <div className="carousel-item">
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
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
