import PropType from "prop-types";
import CourseItem from "./CourseItem";
import LockCourse from "./LockCourse";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <div className="space-x-1">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 self-center border border-dashed rounded-full h-[17px]  "
              />
              <progress
                className="progress progress-primary w-36 h-4 self-center relative "
                value={course?.progressPercent}
                max="100"
              >
                <p className="absolute top-10 z-1 text-white">30% done</p>
              </progress>
            </div>
          ) : (
            ""
          )}
        </div>
        <h2 className="text-primary font-bold mb-2">Chapter 1 - Pendahuluan</h2>
        {/* {courseContent.map((item, num) => (
          <CourseItem
            key={item.id}
            item={item}
            courseId={courseId}
            setCurrentVideoIndex={setCurrentVideoIndex}
            // indexVideo = {indexVideo}
            num={num + 1}
          />
        ))} */}

        {course?.alreadyBuy && course?.alreadyBuy ? (
          <>
            {courseContent
              .filter(
                (filtered) =>
                  filtered.status.includes("Preview") ||
                  filtered.infoProgress.includes("Done") ||
                  filtered.videoLink.includes("https://youtu.be")
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

            {/* {courseContent
              .filter(
                (filtered) =>
                  filtered.videoLink.includes("#") ||
                  filtered.infoProgress.includes("Not Started")
              )
              .map((item, num) => (
                <LockCourse
                  key={item.id}
                  item={item}
                  courseId={courseId}
                  setCurrentVideoIndex={setCurrentVideoIndex}
                  num={num + 1}
                />
              ))} */}
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
                  filtered.videoLink.includes("#") ||
                  filtered.infoProgress.includes("Not Started")
              )
              .map((item, num) => (
                <LockCourse
                  key={item.id}
                  item={item}
                  courseId={courseId}
                  setCurrentVideoIndex={setCurrentVideoIndex}
                  num={num + 1}
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
