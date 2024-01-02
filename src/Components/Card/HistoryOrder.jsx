import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faStar,
  faBook,
  faClock,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HistoryOrder({ courses }) {
  return (
    <>
      <Link
        to={`/detail-course/${courses?.id}`}
        className="card w-80 bg-base-100 shadow-md flex hover:-translate-y-2 duration-500"
      >
        <img
          src={courses?.thumbnailCourse || "/course.jpg"}
          className="rounded-t-lg w-full"
        />
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="text-primary font-bold">
              {courses?.courseCategory}
            </h3>
            <p className="font-bold">
              <span>
                <FontAwesomeIcon icon={faStar} className="text-amber-400" />
              </span>
              4.7
            </p>
          </div>
          <h3 className="text-start font-bold">{courses?.courseName}</h3>
          <p className="text-start">by {courses?.instructorName}</p>
          <div className="flex justify-between font-semibold text-sm">
            <p className="text-primary">
              <span>
                <FontAwesomeIcon
                  icon={faShieldHeart}
                  className="text-success mr-1"
                />
              </span>
              {courses?.courseLevel}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faBook} className="text-success mr-1" />
              </span>
              {courses?.courseContent} Modul
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faClock} className="text-success mr-1" />
              </span>
              120 Menit
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p
              className={`${
                courses?.status === "Paid" ? "bg-succes" : "bg-red-600"
              } text-md pt-1 text-white rounded-full px-6 text-xs py-1 mt-3 font-bold`}
            >
              <FontAwesomeIcon icon={faGem} className="text-white mr-1" />
              {courses?.status}
            </p>
          </div>
          <p className="absolute top-0 left-0 bg-primary text-white p-1 font-bold text-sm rounded-tl-md">
            {courses?.courseType}
          </p>
        </div>
      </Link>
    </>
  );
}

HistoryOrder.propTypes = {
  courses: PropType.object.isRequired,
};

export default HistoryOrder;
