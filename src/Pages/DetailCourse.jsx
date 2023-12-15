import {
  faArrowLeft,
  faComments,
  faBook,
  faShieldHeart,
  faUser,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header/Header";
import Modal from "../Components/Modal";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/action/courseAction";
import LearnProgres from "../Components/LearnProgres";
import ReactPlayer from "react-player/youtube";
import EnrollClass from "../Components/Modal/EnrollClass";

function DetailCourse() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { detail, courseContent } = useSelector((state) => state.course);
  const show = () => {
    document.getElementById("my_modal_3").showModal();
  };

  useEffect(() => {
    dispatch(getDetail(courseId));
    console.log(courseContent);
  }, [courseId, dispatch]);

  return (
    <>
      <Header />
      <section className="mb-36">
        <div className=" px-24 content w-full flex flex-col py-8 bg-[#EBF3FC]">
          <Link to={"/"} className="md:w-1/6 sm:2/6 mb-4">
            <div className="text-base font-bold leading-tight tracking-tight text-black md:text-xl">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mr-6 text-black inline"
              />
              Kelas Lainnya
            </div>
          </Link>
          <div className=" ms-5 mb-8 ">
            <h1 className="text-2xl font-bold text-primary">
              {detail?.courseName} <span></span>
            </h1>
            <h1 className="text-2xl font-bold">
              {detail?.courseCategory} <span></span>
            </h1>
            <h3 className="text-base font-bold">
              {detail?.instructorName} <span></span>
            </h3>
            <div className="w-3/12  flex justify-between mb-6">
              <p className="font-semibold text-sm">
                <FontAwesomeIcon
                  icon={faShieldHeart}
                  className=" mr-1 text-succes inline"
                />
                {detail?.courseLevel}
              </p>
              <p className="font-semibold text-sm">
                <FontAwesomeIcon
                  icon={faBook}
                  className=" mr-1 text-succes inline"
                />
                {detail?.contentCount} Modul
              </p>
              <p className="font-semibold text-sm">
                <FontAwesomeIcon
                  icon={faUser}
                  className=" mr-1 text-succes inline"
                />
                {detail?.studentCount} Siswa
              </p>
            </div>
            <a
              className="text-center py-2.5 rounded-3xl bg-succes text-white px-6 me-3"
              href={detail?.telegramLink}
            >
              Join Group Telegram
              <FontAwesomeIcon
                icon={faComments}
                className=" ms-1 text-white inline"
              />
            </a>
            <a
              onClick={show}
              className="text-center py-2.5 rounded-3xl bg-succes text-white px-6 cursor-pointer"
            >
              Gabung ke kelas
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className=" ms-1 text-white inline"
              />
            </a>
          </div>
        </div>
        <div className="sm:px-28 md:px-32 w-full flex gap-14 justify-between p-10 ">
          <div className="flex-1">
            <div className=" min-h-[54vh] rounded-2xl relative my-5 bg-slate-400">
              <ReactPlayer
                url={courseContent?.videoLink}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 0 },
                  },
                }}
                className="absolute rounded-2xl"
              />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold ">
                Tentang kelas <span></span>
              </h1>
              <p className="indent-4 text-justify leading-8">
                {detail?.courseDescription}
              </p>

              <h1 className="text-2xl font-bold mt-8">
                Kelas Ini Ditujukan Untuk <span></span>
              </h1>
              <ul className="list-decimal ms-4 space-y-2">
                {detail?.courseTarget &&
                  detail?.courseTarget.map((item) => (
                    <li key={item.id} className="mt-1">
                      {item.description}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="relative w-4/12">
            <LearnProgres />
          </div>
        </div>
        <EnrollClass show={show} course={detail} />
      </section>
    </>
  );
}

export default DetailCourse;
