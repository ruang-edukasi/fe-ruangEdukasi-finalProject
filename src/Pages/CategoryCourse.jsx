import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCategory } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useParams } from "react-router";

function CategoryCourse() {
  const dispatch = useDispatch();

  const { courseId } = useParams();

  const { detailCategory } = useSelector((state) => state.course);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getDetailCategory(courseId, errors, setErrors));
  }, [dispatch, errors, setErrors, courseId]);
  return (
    <div className="bg-blue-200">
      <Header />
      <div className="min-h-screen container mx-auto pt-10 px-7 md:pt-4 md:px-0 lg:p-10 xl:p-14 2xl:px-0 mb-20">
        <h2 className="text-3xl font-bold text-center mb-6">{`${detailCategory[0]?.courseCategory} Course`}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 md:p-0 md:pt-5 lg:gap-0 lg:gap-y-5 xl:grid-cols-3 xl:gap-5 2xl:grid-cols-4 2xl:gap-9">
          {detailCategory.map((courses) => (
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
      </div>
      <Footer />
    </div>
  );
}

export default CategoryCourse;
