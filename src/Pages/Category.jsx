import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/action/courseAction";
import CategoryItem from "../Components/Card/CategoryItem";

function Category() {
  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.course);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCategory(setErrors, errors));
  }, [dispatch, errors]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (category.length === 0) {
    return <div className="skeleton w-32 h-32"></div>;
  }

  return (
    <>
      <div className="carousel rounded-box">
        {category.map((categories) => (
          <>
            <div className="carousel-item">
              <CategoryItem
                key={categories.id}
                id={categories?.id}
                imageURL=""
                categoryName={categories?.categoryName}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Category;
