function Card() {
  return (
    <>
      <div className="flex justify-between">
        <div className="rounded-xl bg-white shadow-md shadow-slate-200 w-96">
          <img
            src="/course.svg"
            alt="course.svg"
            className="rounded-t-lg w-full"
          />
          <div className="p-4">
            <div className="flex justify-between">
              <h3 className="text-primary font-bold">UI/UX Design</h3>
              <p className="font-bold">⭐4.7</p>
            </div>
            <h3 className="font-bold">Belajar Web Designer dengan figma</h3>
            <p>by Angela Doe</p>
            <div className="flex justify-between font-semibold">
              <p className="text-primary">Intermediate Level</p>
              <p>10 Modul</p>
              <p>120 Menit</p>
            </div>
            <button className="inline-flex mt-2 h-7 w-44 px-5 items-center justify-center rounded-2xl bg-blue-500 text-sm font-medium text-white transition duration-300 hover:bg-blue-800">
              <p className="pr-4">💎Beli</p>
              <p>Rp 249.000</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
