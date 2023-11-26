function Sidebar() {
  return (
    <div className="p-14 border-red-600">
      <form action="">
        <div className="flex flex-col gap-1 pb-3">
          <h3 className="text-xl font-bold">Filter</h3>
          <div className="flex items-center gap-4">
            <input id="palingBaru" type="checkbox" className="w-4 h-4" />
            <label htmlFor="palingBaru">Paling Baru</label>
          </div>
          <div className="flex items-center gap-4">
            <input id="palingPopular" type="checkbox" className="w-4 h-4" />
            <label htmlFor="palingPopular">Paling Popular</label>
          </div>
          <div className="flex items-center gap-4">
            <input id="promo" type="checkbox" className="w-4 h-4" />
            <label htmlFor="promo">Promo</label>
          </div>
        </div>

        <div className="flex flex-col gap-1 pb-3">
          <h3 className="text-xl font-bold">Kategori</h3>
          <div className="flex items-center gap-4">
            <input id="UIUX" type="checkbox" className="w-4 h-4" />
            <label htmlFor="UIUX">UI/UX Design</label>
          </div>
          <div className="flex items-center gap-4">
            <input id="webDevelopment" type="checkbox" className="w-4 h-4" />
            <label htmlFor="webDevelopment">Web Development</label>
          </div>
          <div className="flex items-center gap-4">
            <input
              id="androidDevelopment"
              type="checkbox"
              className="w-4 h-4"
            />
            <label htmlFor="androidDevelopment">Android Development</label>
          </div>
          <div className="flex items-center gap-4">
            <input id="dataScience" type="checkbox" className="w-4 h-4" />
            <label htmlFor="dataScience">Data Science</label>
          </div>
          <div className="flex items-center gap-4">
            <input
              id="businessIntelligence"
              type="checkbox"
              className="w-4 h-4"
            />
            <label htmlFor="businessIntelligence">Business Intelligence</label>
          </div>
        </div>

        <div className="flex flex-col gap-1 pb-3">
          <h3 className="text-xl font-bold">Level Kesulitan</h3>
          <div className="flex items-center gap-4">
            <input id="semuaLevel" type="checkbox" className="w-4 h-4" />
            <label htmlFor="semuaLevel">Semua Level</label>
          </div>
          <div className="flex items-center gap-4">
            <input id="beginnerLevel" type="checkbox" className="w-4 h-4" />
            <label htmlFor="beginnerLevel">Beginner Level</label>
          </div>
          <div className="flex items-center gap-4">
            <input id="intermediateLevel" type="checkbox" className="w-4 h-4" />
            <label htmlFor="intermediateLevel">Intermediate</label>
          </div>
          <div className="flex items-center gap-4">
            <input id="advancedLevel" type="checkbox" className="w-4 h-4" />
            <label htmlFor="advancedLevel">Advanced Level</label>
          </div>
        </div>
        <div className="py-6 px-14">
          <button className="text-red-600">Hapus Filter</button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
