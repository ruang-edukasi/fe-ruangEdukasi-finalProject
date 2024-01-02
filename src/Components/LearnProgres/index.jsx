import PropType from "prop-types";
import CourseItem from "./CourseItem";
import LockCourse from "./LockCourse";
function index({
  courseContent,
  courseId,
  setCurrentVideoIndex,
  course,
  token,
}) {
  return (
    <>
      <div className=" w-full bg-white shadow-lg rounded-xl p-6 absolute top-[-40%]">
        <div className="flex justify-between mb-3">
          <h1 className="font-bold text-lg">Materi Belajar</h1>
          {course?.alreadyBuy && token ? (
            <div className="space-x-1 relative">
              <progress
                className="progress progress-primary w-40 h-4 self-center  "
                value={course?.progressPercent}
                max="100"
              ></progress>
              <p className="absolute top-0 left-7 text-white font-semibold text-sm">
                {Math.round(course?.progressPercent)}% complete
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <h2 className="text-primary font-bold mb-2">
          Chapter 1 - {course?.courseName}
        </h2>

        {course?.alreadyBuy && course?.alreadyBuy ? (
          <>
            {courseContent
              .filter(
                (filtered) =>
                  filtered.status.includes("Preview") ||
                  filtered.videoLink.includes("http")
              )
              .map((item, num) => (
                <CourseItem
                  key={item.id}
                  item={item}
                  courseId={courseId}
                  setCurrentVideoIndex={setCurrentVideoIndex}
                  num={num + 1}
                />
              ))}
          </>
        ) : (
          <>
            {courseContent
              .filter(
                (filtered) =>
                  filtered.status.includes("Preview") ||
                  filtered.videoLink.includes("https")
              )
              .map((item, num) => (
                <CourseItem
                  key={item.id}
                  item={item}
                  courseId={courseId}
                  setCurrentVideoIndex={setCurrentVideoIndex}
                  num={num + 1}
                />
              ))}
            {courseContent
              .filter(
                (filtered) =>
                  filtered.videoLink.includes("#") &&
                  filtered.infoProgress.includes("Not Started")
              )
              .map((item, num) => (
                <LockCourse
                  key={item.id}
                  item={item}
                  courseId={courseId}
                  setCurrentVideoIndex={setCurrentVideoIndex}
                  num={num}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
}

index.prototype = {
  courseContent: PropType.array.isRequired,
  courseId: PropType.number.isRequired,
  setCurrentVideoIndex: PropType.func.isRequired,
  token: PropType.string.isRequired,
  videoIndex: PropType.number.isRequired,
};

export default index;
