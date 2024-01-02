import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="relative bg-left bg-no-repeat h-64"
      style={{ backgroundImage: "url('/hero.svg')" }}
    >
      <div className="w-full h-64 bg-gradient-to-l from-primary to-transparent via-indigo-500 via-35% 2xl:via-55% xl:via-40% absolute" />
      <div className="container mx-auto h-full flex items-center justify-end relative z-10">
        <div className="p-4 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-24 text-center md:text-left text-white">
          <h1 className="text-xl sm:text-md md:text-xl lg:text-2xl xl:text-2xl font-bold mb-2 text-left">
            Belajar <br /> <span>dari Praktisi Terbaik!</span>
          </h1>
          <Link
            to="allCourse"
            smooth
            duration={500}
            className="inline-flex items-center justify-center w-48 sm:w-64 h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-base font-bold tracking-wide text-primary transition duration-300 rounded-2xl whitespace-nowrap bg-white cursor-pointer hover:bg-indigo-400 hover:text-white"
          >
            <span>IKUTI KELAS</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
