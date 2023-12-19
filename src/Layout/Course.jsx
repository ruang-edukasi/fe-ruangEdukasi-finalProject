import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../Components/Card/CourseItem";
import { getPopular } from "../redux/action/courseAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Course() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.course);
  const [sliceCourse, setSliceCourse] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getPopular(setErrors, errors));
  }, [dispatch, errors]);

  useEffect(() => {
    if (popular.length > 0) {
      setSliceCourse(popular.slice(0, itemsPerPage));
    }
  }, [popular, itemsPerPage]);

  const nextSlide = () => {
    const newIndex = (currentIndex + itemsPerPage) % popular.length;
    setSliceCourse(popular.slice(newIndex, newIndex + itemsPerPage));
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (currentIndex - itemsPerPage + popular.length) % popular.length;
    setSliceCourse(popular.slice(newIndex, newIndex + itemsPerPage));
    setCurrentIndex(newIndex);
  };

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (sliceCourse.length === 0) {
    return <div className="skeleton w-32 h-32"></div>;
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="carousel rounded-box py-2 gap-6">
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
      <div className="hidden lg:flex justify-start text-gray-400 hover:text-indigo-800 duration-300 text-4xl">
        <button
          onClick={prevSlide}
          className="prev-button absolute -translate-x-12 -translate-y-40"
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>
      </div>
      <div className="hidden lg:flex justify-end text-gray-400 hover:text-indigo-800 duration-300 text-4xl">
        <button
          onClick={nextSlide}
          className="next-button absolute -translate-y-40 translate-x-6 pt-2"
        >
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      </div>
    </>
  );
}

export default Course;
