import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";


function LockCourse({ item, num }) {
  return (
    <>
      {/* <h2 className="text-primary font-bold mb-2">
        Chapter 2 - Memulai Desain
      </h2> */}
      <ul className="menu w-full space-y-2 bg-white ">
        <li className="items-start border-b-2  border-[#EBF3FC]  cursor-not-allowed">
          <div className="self-start ps-0 w-full cursor-not-allowed">
            <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
              {num + 1}
            </span>
            <div className=" flex justify-between w-full">
              <h5 className="self-center">
                {item.contentTitle}
              </h5>
              <FontAwesomeIcon
                icon={faLock}
                className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
              />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

LockCourse.propTypes = {
  item: PropType.object.isRequired,
  courseId: PropType.number.isRequired,
  setCurrentVideoIndex: PropType.func.isRequired,
  num: PropType.number.isRequired,
};

export default LockCourse;
