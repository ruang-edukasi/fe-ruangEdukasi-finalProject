import {
  faArrowLeft,
  faComments,
  faPlay,
  faLock,
  faBook,
  faShieldHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header/Header";
import Modal from "../Components/Modal";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/action/courseAction";

function DetailCourse() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { detail } = useSelector((state) => state.course);

  const show = () => {
    document.getElementById("my_modal_3").showModal();
  };

  useEffect(() => {
    dispatch(getDetail(courseId));
  }, [courseId]);

  return (
    <>
      <Header />
      <section className="mb-20">
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
              UI UX Design <span></span>
            </h1>
            <h1 className="text-2xl font-bold">
              Intro to Basic of User Interaction Design <span></span>
            </h1>
            <h3 className="text-base font-bold">
              by Simon Doe <span></span>
            </h3>
            <div className="w-4/12  flex justify-between mb-6">
              <p className="font-semibold text-sm">
                <FontAwesomeIcon
                  icon={faShieldHeart}
                  className=" mr-1 text-succes inline"
                />
                Beginner Level
              </p>
              <p className="font-semibold text-sm">
                <FontAwesomeIcon
                  icon={faBook}
                  className=" mr-1 text-succes inline"
                />
                5 Modul
              </p>
              <p className="font-semibold text-sm">
                <FontAwesomeIcon
                  icon={faClock}
                  className=" mr-1 text-succes inline"
                />
                45 Menit
              </p>
            </div>
            <a
              href="#"
              className="text-center py-2.5 rounded-3xl bg-succes text-white px-6 me-3"
              target="_blank"
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
              target="_blank"
            >
              Gabung ke kelas
            </a>
          </div>
        </div>
        <div className="sm:px-28 md:px-32 w-full flex gap-14 justify-between p-10 border">
          <div className="flex-1">
            <div className=" min-h-[54vh] rounded-2xl relative my-5">
              <iframe
                className="absolute rounded-2xl"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/c3WSziz_u_o?si=86tswsAue5iJkxgP"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="">
              <h1 className="text-2xl font-bold ">
                Tentang kelas <span></span>
              </h1>
              <p className="indent-4 text-justify leading-8">
                Design system adalah kumpulan komponen design, code, ataupun
                dokumentasi yang dapat digunakan sebagai panduan utama yang
                memunginkan designer serta developer memiliki lebih banyak
                kontrol atas berbagai platform. Dengan hadirnya design system,
                dapat menjaga konsistensi tampilan user interface dan
                meningkatkan user experience menjadi lebih baik. Disisi bisnis,
                design system sangat berguna dalam menghemat waktu dan biaya
                ketika mengembangkan suatu produk.
              </p>
              <p className="indent-4 text-justify leading-8">
                Bersama mentor XXX, kita akan mempelajari design system dari
                mulai manfaat, alur kerja pembuatannya, tools yang digunakan,
                hingga pada akhirnya, kita akan membuat MVP dari design system.
                Selain itu, mentor juga akan menjelaskan berbagai resource yang
                dibutuhkan untuk mencari inspirasi mengenai design system.
              </p>
              <p className="indent-4 text-justify leading-8">
                Kelas ini sesuai untuk Anda yang ingin memahami apa itu design
                system. Tidak hanya ditujukan untuk UI/UX Designer ataupun
                Developer, kelas ini sangat sesuai untuk stakeholder lain agar
                dapat memudahkan tim dalam bekerja sama. Yuk segera daftar dan
                kami tunggu di kelas ya
              </p>

              <h1 className="text-2xl font-bold mt-8">
                Kelas Ini Ditujukan Untuk <span></span>
              </h1>
              <ul className="list-decimal ms-4 space-y-2">
                <li>Anda yang ingin memahami poin penting design system</li>
                <li>
                  Anda yang ingin membantu perusahaan lebih optimal dalam
                  membuat design produk
                </li>
                <li>Anda yang ingin latihan membangun design system</li>
                <li>Anda yang ingin latihan membangun design system</li>
              </ul>
            </div>
          </div>
          <div className="relative w-4/12">
            <div className=" w-full bg-white shadow-lg rounded-xl p-6 absolute top-[-27%]">
              <div className="flex justify-between mb-3">
                <h1 className="font-bold text-lg">Materi Belajar</h1>
                <progress
                  className="progress progress-primary w-36 h-3 self-center relative "
                  value={40}
                  max="100"
                >
                  <span className="absolute top-5">10% complete</span>
                </progress>
              </div>
              <h2 className="text-primary font-bold mb-2">
                Chapter 1 - Pendahuluan
              </h2>
              <ul className="menu  w-full space-y-2 bg-white mb-4 ">
                <li className="items-start border-b-2  border-[#EBF3FC] after:block after:border-b-2 hover:border-succes  ease-in duration-200">
                  <a className="self-start ps-0 w-full hover:bg-[#EBF3FC] ">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      1
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faPlay}
                        className=" w-3.5 h-3.5 p-1.5 ps-[0.43rem] rounded-full text-white  bg-succes"
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      2
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faPlay}
                        className=" w-3.5 h-3.5 p-1.5 ps-[0.43rem] rounded-full text-white  bg-succes"
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      3
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faPlay}
                        className=" w-3.5 h-3.5 p-1.5 ps-[0.43rem] rounded-full text-white  bg-primary"
                      />
                    </div>
                  </a>
                </li>
              </ul>
              <h2 className="text-primary font-bold mb-2">
                Chapter 2 - Memulai Desain
              </h2>
              <ul className="menu w-full space-y-2 bg-white">
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      4
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      5
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      6
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      7
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      8
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      9
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      10
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
                <li className="items-start border-b-2  border-[#EBF3FC]">
                  <a className="self-start ps-0 w-full">
                    <span className="px-3.5 py-2 font-semibold bg-[#EBF3FC] rounded-full inline me-2 ">
                      11
                    </span>
                    <div className=" flex justify-between w-full">
                      <h5 className="self-center">
                        Tujuan Mengikuti Kelas Design System
                      </h5>
                      <FontAwesomeIcon
                        icon={faLock}
                        className=" w-4.5 h-5 rounded-full text-[#D9D9D9]  "
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal show={show} />
      </section>
    </>
  );
}

export default DetailCourse;
