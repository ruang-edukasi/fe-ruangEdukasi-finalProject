import { faLock, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";
import { useSelector } from "react-redux";

function LockCourse({ num, item, courseId }) {
  // const dispatch = useDispatch();
  const { courseItem } = useSelector((state) => state.course);
  // console.log("course item id :",courseItem?.id);
  // console.log("course id : ", courseId);
  return (

    <>
    {console.log(courseItem)}
      {/* {courseId === courseItem?.id ? } */}
      {/* <h2 className="text-primary font-bold mb-2">
        Chapter 2 - Memulai Desain
      </h2> */}
      {/* {courseId == courseItem?.id ? (
        <ul className="menu  w-full space-y-2 bg-white">
          <li
            className={` ${
              courseId == item?.id ? "border-succes" : "border-[#EBF3FC]"
            } items-start border-b-2   after:block after:border-b-2 hover:border-succes  ease-in duration-200`}
          >
            <a className="self-start ps-0 w-full hover:bg-[#EBF3FC] ">
              <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                {num}
              </span>
              <div className=" flex justify-between w-full">
                <h5 className="self-center">{item.contentTitle}</h5>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={` ${
                    courseId == item?.id ? "bg-primary" : "bg-succes"
                  }
            } w-3.5 h-3.5 p-1.5 ps-[0.43rem] rounded-full text-white`}
                />
              </div>
            </a>
          </li>
        </ul>
      ) : ( */}
        <ul className="menu w-full space-y-2 bg-white ">
          <li className="items-start border-b-2  border-[#EBF3FC]  cursor-not-allowed">
            <div className="self-start ps-0 w-full cursor-not-allowed">
              <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                {num }
              </span>
              <div className=" flex justify-between w-full">
                <h5 className="self-center">{item.contentTitle}</h5>
                <FontAwesomeIcon
                  icon={faLock}
                  className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                />
              </div>
            </div>
          </li>
        </ul>
      {/* )} */}
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
