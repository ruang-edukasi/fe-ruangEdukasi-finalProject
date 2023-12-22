import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/action/courseAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CategoryItem from "../Components/Card/CategoryItem";

function Category() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.course);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCategory(setErrors, errors));
  }, [dispatch, errors]);

  const nextSlide = () => {
    const lastIndex = category.length - itemsPerPage;
    setCurrentIndex((prevIndex) =>
      prevIndex === lastIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    const lastIndex = category.length - itemsPerPage;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex : prevIndex - 1
    );
  };

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (category.length === 0) {
    return <div className="skeleton w-32 h-32"></div>;
  }

  return (
    <>
      <div className="container flex flex-wrap">
        <div className="carousel rounded-box">
          {category
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((categories) => (
              <>
                <div className="carousel-item">
                  <CategoryItem
                    key={categories.id}
                    id={categories?.id}
                    imageURL={categories?.imageUrl}
                    categoryName={categories?.categoryName}
                  />
                </div>
              </>
            ))}
        </div>
      </div>
      <div className="hidden lg:flex justify-start text-gray-400 hover:text-indigo-800 duration-300 text-4xl">
        <button
          onClick={prevSlide}
          className="prev-button absolute -translate-x-12 -translate-y-32"
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>
      </div>
      <div className="hidden lg:flex justify-end text-gray-400 hover:text-indigo-800 duration-300 text-4xl">
        <button
          onClick={nextSlide}
          className="next-button absolute translate-x-11 -translate-y-32"
        >
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      </div>
    </>
  );
}

export default Category;
