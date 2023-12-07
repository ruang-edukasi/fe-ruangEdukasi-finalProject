import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faStar,
  faBook,
  faClock,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

function CourseItem({
  id,
  imageUrl,
  courseName,
  instructorName,
  price,
  rating,
  courseCategory,
  courseLevel,
}) {
  return (
    <>
      <div className="card w-80 bg-base-100 shadow-md flex">
        <img src="/course.svg" className="rounded-t-lg w-full" />
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="text-primary font-bold">{courseCategory}</h3>
            <p className="font-bold">
              <span>
                <FontAwesomeIcon icon={faStar} className="text-amber-400" />
              </span>
              4.7{rating}
            </p>
          </div>
          <h3 className="font-bold">{courseName}</h3>
          <p>by {instructorName}</p>
          <div className="flex justify-between font-semibold text-sm">
            <p className="text-primary">
              <span>
                <FontAwesomeIcon
                  icon={faShieldHeart}
                  className="text-success mr-1"
                />
              </span>
              {courseLevel}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faBook} className="text-success mr-1" />
              </span>
              10 Modul
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faClock} className="text-success mr-1" />
              </span>
              120 Menit
            </p>
          </div>
          <button className="inline-flex mt-2 h-7 w-44 px-5 items-center justify-between rounded-2xl bg-blue-500 text-sm font-medium text-white transition duration-300 hover:bg-blue-800">
            <p>
              <span>
                <FontAwesomeIcon icon={faGem} className="text-white mr-1" />
              </span>
              Beli
            </p>
            <p>Rp{price}</p>
          </button>
        </div>
      </div>
    </>
  );
}

CourseItem.propTypes = {
  id: PropType.number.isRequired,
  imageUrl: PropType.string.isRequired,
  courseName: PropType.string.isRequired,
  instructorName: PropType.string.isRequired,
  price: PropType.number.isRequired,
  rating: PropType.number.isRequired,
  courseCategory: PropType.string.isRequired,
  courseLevel: PropType.string.isRequired,
};

export default CourseItem;
