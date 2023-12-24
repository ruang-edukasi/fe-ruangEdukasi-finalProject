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
      <div className="container">
        <div className="rounded-box grid grid-cols-2 sm:grid-cols-3 lg:flex">
          {category.map((categories) => (
            <CategoryItem
              key={categories.id}
              id={categories?.id}
              imageURL={categories?.imageUrl}
              categoryName={categories?.categoryName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
