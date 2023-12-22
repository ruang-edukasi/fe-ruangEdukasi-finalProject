import { Link } from "react-router-dom";
import PropType from "prop-types";

const CategoryItem = ({ id, imageURL, categoryName }) => {
  return (
    <Link to={`/detail-category-course/${id}`}>
      <div className="card shadow-m mx-3 py-2">
        <img
          src={imageURL}
          className="rounded-3xl w-52 m-auto transition duration-300 cursor-pointer text-no-underline hover:scale-105"
        />
        <div className="text-center font-semibold">
          <p>{categoryName}</p>
        </div>
      </div>
    </Link>
  );
};

CategoryItem.propTypes = {
  id: PropType.number.isRequired,
  imageURL: PropType.string.isRequired,
  categoryName: PropType.string.isRequired,
};

export default CategoryItem;
