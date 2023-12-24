const Team = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 ">
        <div className="card sm:w-64 md:w-56 lg:w-56 xl:w-64 2xl:w-80 bg-base-100 border shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer text-no-underline hover:scale-105">
          <figure>
            <img src="/barizi.svg" alt="barizi" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Ahmad Barizi</h2>
            <p>Front End JS Development</p>
          </div>
        </div>
        <div className="card sm:w-64 md:w-56 lg:w-56 xl:w-64 2xl:w-80 bg-base-100 border shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer text-no-underline hover:scale-105">
          <figure>
            <img src="/ariantika.svg" alt="ariantika" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Ariantika Putri Maharani</h2>
            <p>UI/UX Design</p>
          </div>
        </div>
        <div className="card sm:w-64 md:w-56 lg:w-56 xl:w-64 2xl:w-80 bg-base-100 border shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer text-no-underline hover:scale-105">
          <figure>
            <img src="/ilham.svg" alt="ilham" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Ilham Praditya</h2>
            <p>Data Science</p>
          </div>
        </div>
        <div className="card sm:w-64 md:w-56 lg:w-56 xl:w-64 2xl:w-80 bg-base-100 border shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer text-no-underline hover:scale-105">
          <figure>
            <img src="/rizky.svg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">M. Rizky Ramdhani</h2>
            <p>Front End JS Development</p>
          </div>
        </div>
        <div className="card sm:w-64 md:w-56 lg:w-56 xl:w-64 2xl:w-80 bg-base-100 border shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer text-no-underline hover:scale-105">
          <figure>
            <img src="/thufail.svg" alt="thufail" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">M. Rafi Thufail</h2>
            <p>Android Development</p>
          </div>
        </div>
        <div className="card sm:w-64 md:w-56 lg:w-56 xl:w-64 2xl:w-80 bg-base-100 border shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer text-no-underline hover:scale-105">
          <figure>
            <img src="/taufik.svg" alt="taufik" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Taufik Faturokhman</h2>
            <p>Quality Assurance</p>
          </div>
        </div>
        <div className="card sm:w-64 md:w-56 lg:w-56 xl:w-64 2xl:w-80 bg-base-100 border shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer text-no-underline hover:scale-105">
          <figure>
            <img src="/wahyu.svg" alt="wahyu" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Wahyu Widodo</h2>
            <p>Back End JS Development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
