import "./index.css";

const Hero = () => {
  return (
    <section
      className="relative bg-left bg-no-repeat h-64"
      style={{ backgroundImage: "url('/hero.svg')" }}
    >
      <div className="w-full h-64 bg-purple-gradient absolute top-0 left-0" />
      <div className="container mx-auto h-full flex items-center justify-end relative z-10">
        <div className="p-4 mx-20 text-right text-white">
          <h1 className="text-2xl text-left font-bold mb-2">
            Belajar <br /> <span>dari Praktisi Terbaik!</span>
          </h1>
          <button className="inline-flex items-center justify-center w-64 h-10 gap-2 px-5 text-sm font-bold tracking-wide text-primary transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-white hover:bg-indigo-400 hover:text-white">
            <span>IKUTI KELAS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;