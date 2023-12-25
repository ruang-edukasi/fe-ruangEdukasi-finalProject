function Sidebar() {
  return (
    <div
      className={`bg-slate-100 rounded-xl w-3/4 left-[-500px] h-screen p-6 absolute z-30 lg:static lg:w-72`}
    >
      <div className="form-control">
        <div className="flex flex-col pb-3">
          <h3 className="text-lg sm:text-xl font-bold">Filter</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Paling Baru</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Paling Popular</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Promo</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col pb-3">
          <h3 className="text-lg sm:text-xl font-bold">Kategori</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Backend Development</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">
                Frontend Development
              </span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">UI/UX Design</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Data Science</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Quality Asurance</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Android Development</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col pb-3">
          <h3 className="text-lg sm:text-xl font-bold">Level Kesulitan</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Semua Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Beginner Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Intermediate Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text sm:text-lg">Advanced Level</span>
            </label>
          </div>
        </div>
      </div>
      <div className="py-6 px-14">
        <button className="text-red-600 hover:text-red-800">
          Hapus Filter
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
