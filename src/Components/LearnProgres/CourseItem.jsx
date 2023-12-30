import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setCourseItem } from "../../redux/reducer/courseReducers";
import { useEffect } from "react";

function CourseItem({ item, courseId, setCurrentVideoIndex, num,  }) {
  const { courseContent } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourseItem(item));
  }, [dispatch]);

  const halndleSetCourseItem = () => {
    setCurrentVideoIndex(courseContent.indexOf(item));
  };
  return (
    <>
      <ul className="menu  w-full space-y-2 bg-white">
        <li
          className={` ${
            courseId == item?.id ? "border-succes" : "border-[#EBF3FC]"
          } items-start border-b-2   after:block after:border-b-2 hover:border-succes  ease-in duration-200`}
          onClick={() => halndleSetCourseItem()}
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
    </>
  );
}
CourseItem.propTypes = {
  item: PropType.object.isRequired,
  courseId: PropType.number.isRequired,
  setCurrentVideoIndex: PropType.func.isRequired,
  num: PropType.number.isRequired,
  indexVideo: PropType.number.isRequired,
};
export default CourseItem;
