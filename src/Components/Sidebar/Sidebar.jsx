function Sidebar() {
  return (
    <div className="bg-slate-100 rounded-xl w-72 h-screen p-6">
      <div className="form-control">
        <div className="flex flex-col pb-3">
          <h3 className="text-xl font-bold">Filter</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Remember me</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Paling Popular</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Promo</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col pb-3">
          <h3 className="text-xl font-bold">Kategori</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">UI/UX Design</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Frontend Development</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Backend Development</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Android Development</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Data Science</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Quality Asurance</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col pb-3">
          <h3 className="text-xl font-bold">Level Kesulitan</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Semua Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Beginner Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Intermediate Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary"
              />
              <span className="label-text text-lg">Advanced Level</span>
            </label>
          </div>
        </div>
        <div className="py-6 px-14">
          <button className="text-red-600 hover:text-red-800">
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
