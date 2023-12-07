import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function AllCourse() {
  const dispatch = useDispatch();

  const { course } = useSelector((state) => state.course);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
  }, [dispatch, errors]);
  return (
    <div className="bg-blue-200">
      <Header />
      <div className="min-h-screen container mx-auto pt-10 px-7 md:pt-4 md:px-0 lg:p-10 xl:p-14 2xl:px-0">
        <h2 className="text-3xl font-bold text-center">All Course</h2>
        <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 md:gap-5 md:p-0 md:pt-5 lg:gap-0 lg:gap-y-5 xl:grid-cols-3 xl:gap-5 2xl:grid-cols-4 2xl:gap-9">
          {course.map((courses) => (
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
          <CourseItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllCourse;
