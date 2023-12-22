import PropType from "prop-types";
import CourseItem from "./CourseItem";

function index({ courseContent, courseId, setCurrentVideoIndex }) {
  return (
    <>
      <div className=" w-full bg-white shadow-lg rounded-xl p-6 absolute top-[-40%]">
        <div className="flex justify-between mb-3">
          <h1 className="font-bold text-lg">Materi Belajar</h1>
          <progress
            className="progress progress-primary w-36 h-3 self-center relative "
            value={40}
            max="100"
          ></progress>
        </div>
        <h2 className="text-primary font-bold mb-2">Chapter 1 - Pendahuluan</h2>
        <ul className="menu  w-full space-y-2 bg-white mb-4 ">
          {courseContent.map((item, num) => (
            <CourseItem
              key={item.id}
              item={item}
              courseId={courseId}
              setCurrentVideoIndex={setCurrentVideoIndex}
              num={num+1}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

index.prototype = {
  courseContent: PropType.array.isRequired,
  courseId: PropType.number.isRequired,
  setCurrentVideoIndex: PropType.func.isRequired,
};

export default index;
