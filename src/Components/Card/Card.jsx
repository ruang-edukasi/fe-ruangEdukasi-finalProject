function Card() {
  return (
    <div className="bg-slate-100">
      <img
        src="/category1.svg"
        alt="category1.svg"
        width="323px"
        height="180px"
      />
      <div className="flex justify-between">
        <h3 className="text-primary font-bold">UI/UX Design</h3>
        <p className="font-bold">4.7</p>
      </div>
      <h3 className="font-bold">Belajar Web Designer dengan figma</h3>
      <p className="font-semibold">by Angela Doe</p>
      <div className="flex justify-between">
        <p className="text-primary font-bold">Intermediate Level</p>
        <p>10 Modul</p>
        <p>120 Menit</p>
      </div>
      <button className="w-28 bg-blue-500 text-white font-semibold h-7 rounded-2xl">
        Premium
      </button>
    </div>
  );
}

export default Card;
