import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faBook,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CourseItem({
  id,
  thumbnailCourse,
  courseName,
  instructorName,
  courseCategory,
  courseLevel,
  courseType,
}) {
  return (
    <>
      <Link
        to={`/detail-course/${id}`}
        className="card w-full sm:w-96 bg-base-100 shadow-md flex flex-col"
      >
        <img src={thumbnailCourse} className="rounded-t-lg w-full" />
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="text-primary font-bold">{courseCategory}</h3>
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

          <p className="absolute top-0 left-0 bg-primary text-white p-1 font-bold text-sm rounded-tl-md">
            {courseType}
          </p>
        </div>
      </Link>
    </>
  );
}

CourseItem.propTypes = {
  id: PropType.number.isRequired,
  thumbnailCourse: PropType.string.isRequired,
  courseName: PropType.string.isRequired,
  instructorName: PropType.string.isRequired,
  courseCategory: PropType.string.isRequired,
  courseLevel: PropType.string.isRequired,
  courseType: PropType.string.isRequired,
};

export default CourseItem;
