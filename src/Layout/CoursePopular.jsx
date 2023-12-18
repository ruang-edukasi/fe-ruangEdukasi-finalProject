import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../Components/Card/CourseItem";
import { getPopular } from "../redux/action/courseAction";

function CoursePopular() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.course);
  const [sliceCourse, setSliceCourse] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getPopular(setErrors, errors));
  }, [dispatch, errors]);

  useEffect(() => {
    if (popular.length > 0) {
      setSliceCourse(popular.slice(0, 9));
    }
  }, [popular]);

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

export default CoursePopular;
