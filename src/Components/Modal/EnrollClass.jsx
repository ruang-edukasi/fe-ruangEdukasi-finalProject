import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseItem from "../Card/CourseItem";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropType from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { enrollClass } from "../../redux/action/courseAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function EnrollClass({ course }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);

  // const enrollFreeClass = () => {

  // };
  const enrollFreeClass = async (e) => {
    e.preventDefault();
    try {
      await dispatch(enrollClass(courseId, token, navigate));
      document.getElementById("my_modal_3").close();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (token) {
      dispatch(enrollClass(courseId, navigate));
    }
  }, [dispatch, token, navigate]);

  return (
    <>
      <dialog id="my_modal_3" className="modal w-full content-center">
        <div className="modal-box text-center w-full max-w-xl">
          <form
            method="dialog"
            className="border border-transparent border-none"
          >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm  btn-circle btn-ghost absolute right-2 top-2 border border-transparent">
              ✕
            </button>
          </form>
          {course.courseType == "Premium" ? (
            <h3 className="font-bold text-xl mb-5 block">
              Selangkah lagi
              <div className="font-bold text-xl text-primary">
                menuju kelas premium
              </div>
            </h3>
          ) : (
            <h3 className="font-bold text-xl mb-5 block">
              Selamatt !!
              <div className="font-bold text-xl text-primary">
                Yukk enroll sekarang
              </div>
            </h3>
          )}
          <div className="w-full flex justify-center flex-col items-center gap-10">
            <CourseItem
              key={course?.id}
              id={course.id}
              imageURL={course?.imageUrl}
              courseName={course?.courseName}
              instructorName={course?.instructorName}
              courseDescription={course?.courseDescription}
              price={course?.price}
              rating={course?.rating}
              courseType={course?.courseType}
              courseCategory={course?.courseCategory}
              courseLevel={course?.courseLevel}
            />
            {course.courseType == "Premium" ? (
              <Link
                to={`/payment/${course.id}`}
                className="w-full flex justify-center"
              >
                <button className=" bg-primary text-white py-2.5  rounded-3xl w-7/12 flex gap-2 mb-8 shadow-sm justify-center">
                  Beli Sekarang
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" text-primary inline bg-white rounded-full px-[5px] py-1 self-center"
                  />
                </button>
              </Link>
            ) : (
              <div className="w-full flex justify-center">
                <button
                  className=" bg-primary text-white py-2.5  rounded-3xl w-7/12 flex gap-2 mb-8 shadow-sm justify-center"
                  onClick={enrollFreeClass}
                >
                  Enroll Sekarang
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" text-primary inline bg-white rounded-full px-[5px] py-1 "
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}

EnrollClass.propTypes = {
  course: PropType.object.isRequired,
};

export default EnrollClass;
