import { Link } from "react-router-dom";

function HeroTwo() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-l from-primary to-indigo-900">
        <div className="hero-content flex-col text-white lg:flex-row-reverse">
          <img
            src="/premium.jpg"
            className="w-auto rounded-lg shadow-2xl md:w-96"
          />
          <div className="md:pr-24 text-center md:text-start">
            <h1 className="text-xl font-bold md:text-3xl">
              Butuh Kursus Dengan Kontent Eksklusif?
            </h1>
            <h1 className="text-xl font-bold md:text-3xl">
              Coba Kursus Premium!
            </h1>
            <p className="py-6 text-sm md:text-lg">
              Kursus premium menyediakan konten eksklusif dan penjelasannya
              lebih detail!
            </p>
            <Link
              to=""
              smooth
              duration={500}
              className="inline-flex items-center justify-center w-48 sm:w-64 h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-base font-bold tracking-wide text-primary transition duration-300 rounded-2xl whitespace-nowrap bg-white cursor-pointer hover:bg-indigo-400 hover:text-white"
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
