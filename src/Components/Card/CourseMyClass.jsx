import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faStar,
  faBook,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CourseMyClass({
  id,
  thumbnailCourse,
  courseName,
  instructorName,
  percentProgress,
  rating,
  courseCategory,
  courseLevel,
  courseType,
  courseContent,
}) {
  return (
    <>
      <Link
        to={`/detail-course/${id}`}
        className="card w-80 bg-base-100 shadow-md flex hover:-translate-y-2 duration-500"
      >
        <img src={thumbnailCourse} className="rounded-t-lg h-40" />
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
              {courseContent} modul
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faClock} className="text-success mr-1" />
              </span>
              120 Menit
            </p>
          </div>
          <div className="mt-2">
            <progress
              className="progress progress-primary w-36 h-3 self-center relative "
              value={percentProgress}
              max="100"
            ></progress>
          </div>
          <p className="absolute top-0 left-0 bg-primary text-white p-1 font-bold text-sm rounded-tl-md">
            {courseType}
          </p>
        </div>
      </Link>
    </>
  );
}

CourseMyClass.propTypes = {
  id: PropType.number,
  thumbnailCourse: PropType.string,
  courseName: PropType.string,
  instructorName: PropType.string,
  price: PropType.number,
  rating: PropType.number,
  courseCategory: PropType.string,
  courseLevel: PropType.string,
  courseType: PropType.string,
  courseContent: PropType.number,
  percentProgress: PropType.number,
};

export default CourseMyClass;
