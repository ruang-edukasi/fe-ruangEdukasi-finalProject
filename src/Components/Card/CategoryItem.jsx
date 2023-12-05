import { Link } from "react-router-dom";
import PropType from "prop-types";

const CategoryItem = ({ imageURL, categoryName }) => {
  return (
    <Link>
      <div className="card w-52 shadow-m px-2 py-2">
        <figure>
          <img
            src="/category1.svg"
            className="m-auto max-h-full w-full max-w-full transition duration-300 cursor-pointer text-no-underline hover:scale-105"
          />
        </figure>
        <div className="text-center font-semibold">
          <p>{categoryName}</p>
        </div>
      </div>
    </Link>
  );
};

CategoryItem.propTypes = {
  imageURL: PropType.string.isRequired,
  categoryName: PropType.string.isRequired,
};

export default CategoryItem;
