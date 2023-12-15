import { faPlay, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function index() {
  return (
    <>
      <div className=" w-full bg-white shadow-lg rounded-xl p-6 absolute top-[-40%]">
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
        <h2 className="text-primary font-bold mb-2">Chapter 1 - Pendahuluan</h2>
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
    </>
  );
}

export default index;
