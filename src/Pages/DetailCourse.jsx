import {
  faArrowLeft,
  faComments,
  faBook,
  faShieldHeart,
  faUser,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import Header from "../Components/Header/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addProgres, getDetail } from "../redux/action/courseAction";
import LearnProgres from "../Components/LearnProgres";
import ReactPlayer from "react-player/youtube";
import EnrollClass from "../Components/Modal/EnrollClass";
import playButton from "../assets/playVideo.svg";
function DetailCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [played, setPlayed] = useState(0);
  const [duration, setduration] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showTentang, setShowTentang] = useState(true);

  const { detail, courseContent, courseItem } = useSelector(
    (state) => state.course
  );

  const { user, token } = useSelector((state) => state.auth);
  const show = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const handleNext = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addProgres(courseId, courseItem?.id));
      setCurrentVideoIndex(currentVideoIndex + 1);
      setLoading(true);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (token) {
      dispatch(addProgres(courseId, courseItem?.id));
    }
  }, [courseId, courseItem?.id, dispatch, token]);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const isLoggedIn = userToken !== null;

    if (!token && !isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan login terlebih dahulu!",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login");
      });
    } else {
      dispatch(getDetail(courseId, currentVideoIndex));
    }
  }, [courseId, dispatch, currentVideoIndex, user, token, navigate]);

  return (
    <>
      <Header />
      <section className="mb-36">
        <div className=" px-6 md:px-24 content w-full flex flex-col py-8 bg-[#EBF3FC]">
          <Link to={"/"} className="md:w-1/3 sm:2/6 mb-4">
            <div className="text-base font-bold leading-tight tracking-tight text-black md:text-lg lg:text-xl">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mr-6 text-black inline"
              />
              Kelas Lainnya
            </div>
          </Link>
          <div className=" ms-5 mb-8 ">
            <h1 className="text-2xl font-bold text-primary w-3/5 flex justify-between ">
              {detail?.courseName}
              <span className="self-center flex text-black"></span>
            </h1>
            <h1 className="text-2xl font-bold ">
              {detail?.courseCategory} <span></span>
            </h1>
            <h3 className="text-base font-bold">
              {detail?.instructorName} <span></span>
            </h3>
            <div className="w-full md:w-5/12 lg:w-3/12 rounded-md flex justify-between mb-6">
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
            <div className="flex flex-col justify-start items-start md:flex-row">
              <a
                className="text-center py-2.5 rounded-3xl bg-succes text-white px-6 mb-4 md:me-3 w-full lg:w-64"
                href={detail?.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Group Telegram
                <FontAwesomeIcon
                  icon={faComments}
                  className=" ms-1 text-white inline"
                />
              </a>
              {detail?.alreadyBuy ? (
                ""
              ) : (
                <a
                  onClick={show}
                  className="text-center py-2.5 rounded-3xl bg-succes text-white px-6 cursor-pointer min-h-fit w-full lg:w-64"
                >
                  Gabung ke kelas
                  <FontAwesomeIcon
                    icon={faChalkboardUser}
                    className=" ms-1 text-white inline"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="sm:px-28 md:px-32 w-full flex gap-14 justify-between p-10 ">
          <div className="flex-1">
            <div className=" min-h-[54vh] rounded-2xl relative my-5 bg-slate-400 overflow-hidden">
              <ReactPlayer
                url={courseItem?.videoLink}
                width="100%"
                height="100%"
                controls={true}
                playing={playVideo}
                onProgress={(progress) => {
                  setPlayed(progress.playedSeconds);
                  setLoading(false);
                }}
                onDuration={(progress) => {
                  setduration(progress - 3);
                }}
                // controls={true}
                className="absolute"
              />
              <div
                className={`${
                  playVideo && duration + 1 >= played ? "w-0" : "w-full"
                } h-full bg-black absolute flex flex-col justify-center items-center cursor-pointer duration-300 ease-linear `}
                onClick={() => setPlayVideo(!playVideo)}
              >
                <img src={playButton} alt="play buton" />
                {loading && playVideo ? (
                  <span className="loading loading-bars loading-sm bg-white"></span>
                ) : (
                  ""
                )}
              </div>

              <div
                className={`absolute space-x-2 ${
                  duration >= played
                    ? "right-5 bottom-[-20%]"
                    : "right-5 bottom-8"
                }`}
              >
                <Link
                  to={"/"}
                  className=" px-9 py-1.5 text-[#489CFF] font-semibold bg-[#EBF3FC] rounded-3xl right-9"
                >
                  Kelas Lainnya
                </Link>
                <button
                  className={`${
                    currentVideoIndex >= courseContent.length - 1 ||
                    !detail?.alreadyBuy
                      ? "hidden"
                      : "inline"
                  } px-9 py-1.5 text-white font-semibold  bg-primary rounded-3xl right-9`}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="flex lg:hidden justify-center">
              <button
                onClick={() => {
                  setShowTentang(true);
                }}
                className="py-5 px-10 bg-blue-100 my-10 text-primary hover:text-white font-semibold hover:bg-primary "
              >
                Tentang
              </button>
              <button
                onClick={() => {
                  setShowTentang(false);
                }}
                className="py-5 px-10 bg-blue-100 my-10 text-primary hover:text-white font-semibold hover:bg-primary "
              >
                Materi Kelas
              </button>
            </div>

            {showTentang ? (
              <div className="">
                <h1 className="text-2xl font-bold ">Tentang kelas</h1>
                <p className=" text-justify leading-8">
                  {detail?.courseDescription}
                </p>

                <h1 className="text-2xl font-bold mt-8">
                  Kelas Ini Ditujukan Untuk <span></span>
                </h1>
                <ul className="list-decimal ms-4 space-y-2">
                  {detail?.courseTarget?.map((item) => (
                    <li key={item.id} className="mt-1">
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="relative w-full">
                <LearnProgres
                  courseContent={courseContent}
                  courseId={courseItem?.id}
                  setCurrentVideoIndex={setCurrentVideoIndex}
                  token={token}
                  indexVideo={currentVideoIndex}
                />
              </div>
            )}
          </div>
          <div className="hidden lg:block md:relative md:w-4/12 ">
            <LearnProgres
              courseContent={courseContent}
              courseId={courseItem?.id}
              course={detail}
              setCurrentVideoIndex={setCurrentVideoIndex}
              token={token}
              indexVideo={currentVideoIndex}
            />
          </div>
        </div>

        <EnrollClass show={show} course={detail} />
      </section>
    </>
  );
}

export default DetailCourse;
