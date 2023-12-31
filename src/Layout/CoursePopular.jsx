import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../Components/Card/CourseItem";
import { getPopular } from "../redux/action/courseAction";
import ButtonCourse from "./ButtonCourse";

function CoursePopular() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.course);

  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredKelas, setFilteredKelas] = useState([...popular]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getPopular(setErrors, errors));
  }, [dispatch, errors]);

  useEffect(() => {
    const filtered = popular.filter((item) => {
      if (activeFilter === "All") {
        return true;
      } else if (activeFilter === "Backend Development") {
        return item.courseCategory === "Backend Development";
      } else if (activeFilter === "Frontend Development") {
        return item.courseCategory === "Frontend Development";
      } else if (activeFilter === "UI/UX Design") {
        return item.courseCategory === "UI/UX Design";
      } else if (activeFilter === "Data Science") {
        return item.courseCategory === "Data Science";
      } else if (activeFilter === "Quality Assurance") {
        return item.courseCategory === "Quality Assurance";
      } else if (activeFilter === "Android Development") {
        return item.courseCategory === "Android Development";
      }
      return true;
    });
    setFilteredKelas(filtered);
  }, [popular, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  return (
    <>
      <ButtonCourse onFilterChange={handleFilterChange} />
      <div className="flex flex-wrap">
        <div className="carousel rounded-box py-2 gap-6">
          {filteredKelas.map((courses) => (
            <>
              <div className="carousel-item">
                <CourseItem
                  key={courses?.id}
                  id={courses?.id}
                  thumbnailCourse={courses?.thumbnailCourse || "/course.jpg"}
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
