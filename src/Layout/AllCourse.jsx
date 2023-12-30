import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";
import ButtonCourse from "./ButtonCourse";

function AllCourse() {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);

  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredKelas, setFilteredKelas] = useState([...course]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
  }, [dispatch, errors]);

  useEffect(() => {
    const filtered = course.filter((item) => {
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
  }, [course, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }
  return (
    <div>
      <ButtonCourse onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2  sm:gap-y-10 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredKelas.slice(0, 12).map((courses) => (
          <div key={courses?.id} className="flex justify-center">
           
            <CourseItem
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
        ))}
      </div>
    </div>
  );
}

export default AllCourse;
