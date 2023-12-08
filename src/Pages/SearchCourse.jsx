import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchCourse } from "../redux/action/courseAction";
import CourseItem from "../Components/Card/CourseItem";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const SearchCourse = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.course);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getSearchCourse(setErrors, errors, query));
  }, [dispatch, errors, query, searchParams]);

  if (!query || (query && search.length === 0)) {
    return (
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="font-bold text-3xl italic">
          {!query
            ? "Masukkan kata kunci untuk memulai pencarian."
            : `Hasil pencarian tidak ditemukan untuk ${query}`}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section>
        <div className="min-h-screen container mx-auto px-16 pt-7">
          <div className="text-base font-medium leading-tight tracking-tight md:text-2xl italic">
            Hasil pencarian untuk {query}
          </div>
          <div className="flex flex-wrap gap-6 py-7">
            {search.map((searchCourse) => (
              <CourseItem
                key={searchCourse?.id}
                id={searchCourse?.id}
                imageURL={searchCourse?.imageUrl}
                courseName={searchCourse?.courseName}
                instructorName={searchCourse?.instructorName}
                courseDescription={searchCourse?.courseDescription}
                price={searchCourse?.price}
                rating={searchCourse?.rating}
                courseType={searchCourse?.courseType}
                courseCategory={searchCourse?.courseCategory}
                courseLevel={searchCourse?.courseLevel}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchCourse;
