import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function HeroTwo() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-l from-primary to-indigo-900">
        <div className="hero-content flex-col text-white lg:flex-row-reverse">
          <button
            className="absolute translate-x-2 -translate-y-20 text-6xl text-primary lg:translate-x-96 lg:-translate-y-2"
            onClick={() => document.getElementById("modals").showModal()}
          >
            <FontAwesomeIcon icon={faCirclePlay} beat />
          </button>
          <dialog id="modals" className="modal bg-black/60">
            <div className="flex justify-center relative">
              <form method="dialog">
                <button className="btn btn-md btn-circle btn-ghost absolute -top-7 -right-7 text-xl hover:bg-alert">
                  ✕
                </button>
              </form>
              <iframe
                width="900"
                height="500"
                src="https://www.youtube.com/embed/tsgy7OsDARU?si=oWEt0nP3R7KYUEbD"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </dialog>
          <img
            src="/person.svg"
            className="w-auto rounded-lg shadow-2xl md:w-auto"
          />
          <div className="text-center px-4">
            <h1 className="text-xl font-bold md:text-4xl">
              Butuh Kursus Dengan Kontent Eksklusif? Coba Kursus Premium!
            </h1>

            <p className="py-6 text-sm md:text-lg">
              Kursus premium menyediakan konten eksklusif dan penjelasannya
              lebih detail!
            </p>
            <Link
              to=""
              smooth
              duration={500}
              className="inline-flex items-center justify-center w-48 sm:w-60 h-10 sm:h-14 px-4 sm:px-5 text-sm sm:text-lg font-bold tracking-wide text-primary transition duration-300 rounded-2xl whitespace-nowrap bg-white cursor-pointer hover:bg-indigo-400 hover:text-white"
            >
              <span>COBA SEKARANG</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroTwo;
