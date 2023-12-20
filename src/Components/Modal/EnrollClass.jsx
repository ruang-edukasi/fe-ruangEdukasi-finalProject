import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CaourseItem from "../Card/CourseItem";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropType from "prop-types";
import { Link } from "react-router-dom";
function EnrollClass({ course }) {
  return (
    <>
      <dialog id="my_modal_3" className="modal w-full content-center">
        <div className="modal-box text-center w-8/12 max-w-xl">
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
                meuju kelas premium
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
            <CaourseItem
              key={course?.id}
              id={course.id}
              imageURL=""
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
              <Link
                to={`/detail-course/${course.id}`}
                className="w-full flex justify-center"
              >
                <button className=" bg-primary text-white py-2.5  rounded-3xl w-7/12 flex gap-2 mb-8 shadow-sm justify-center">
                  Enroll Sekarang
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" text-primary inline bg-white rounded-full px-[5px] py-1 "
                  />
                </button>
              </Link>
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
