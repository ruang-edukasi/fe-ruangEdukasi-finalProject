import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faStar,
  faBook,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HistoryOrder({ courses }) {
  return (
    <>
      <Link
        to={`/detail-course/${courses?.id}`}
        className="card w-80 bg-base-100 shadow-md flex hover:-translate-y-2 duration-500"
      >
        <img src="/course.svg" className="rounded-t-lg w-full" />
        <div className="p-4">
          <div className="flex justify-between">
            {/* <h3 className="text-primary font-bold">{courses?.id}</h3> */}
            <p className="font-bold">
              <span>
                <FontAwesomeIcon icon={faStar} className="text-amber-400" />
              </span>
              {/* 4.7{rating} */}
            </p>
          </div>
          {/* <h3 className="font-bold">{courseName}</h3> */}
          {/* <p>by {instructorName}</p> */}
          <div className="flex justify-between font-semibold text-sm">
            <p className="text-primary">
              <span>
                <FontAwesomeIcon
                  icon={faShieldHeart}
                  className="text-success mr-1"
                />
              </span>
              {/* {courseLevel} */}
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
          <div className="flex justify-between items-center">
            <p className="text-md font-semibold pt-1 text-red-500">
              {/* {courseType === "Premium" ? `Rp${price}` : "Mulai Kelas"} */}
            </p>
          </div>
          <p className="absolute top-0 left-0 bg-primary text-white p-1 font-bold text-sm rounded-tl-md">
            {/* {courseType} */}
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
