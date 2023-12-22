import ReactPlayer from "react-player";

function index() {
  return (
    <div className=" min-h-[54vh] rounded-2xl relative my-5 bg-slate-400 overflow-hidden">
      <ReactPlayer
        url={courseContent?.videoLink}
        width="100%"
        height="100%"
        controls={true}
        playing={playVideo}
        onProgress={(progress) => {
          setPlayed(progress.playedSeconds);
        }}
        onDuration={(progress) => {
          setduration(progress - 5);
        }}
        // controls={true}
        className="absolute"
      />
      <div
        className={`${
          playVideo && duration + 3 >= played ? "w-0" : "w-full"
        } h-full bg-black absolute flex flex-col justify-center items-center cursor-pointer duration-500 ease-in `}
        onClick={() => setPlayVideo(!playVideo)}
      >
        <img src={playButton} alt="play buton" />
      </div>

      <div
        className={`absolute space-x-2 ${
          duration >= played ? "right-5 bottom-[-20%]" : "right-5 bottom-8"
        }`}
      >
        <button className=" px-9 py-1.5 text-[#489CFF] font-semibold bg-[#EBF3FC] rounded-3xl right-9">
          Kelas Lainnya
        </button>
        <button className=" px-9 py-1.5 text-white font-semibold  bg-primary rounded-3xl right-9">
          Next
        </button>
      </div>
    </div>
  );
}

export default index;
