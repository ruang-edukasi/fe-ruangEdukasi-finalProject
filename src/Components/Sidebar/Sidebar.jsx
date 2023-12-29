import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Sidebar({ navDashbord }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const level = [
    {
      id: 1,
      name: "Beginner Level",
      levelId: 1,
    },
    {
      id: 2,
      name: "Advanced Level",
      levelId: 2,
    },
    {
      id: 3,
      name: "Intermediate Level",
      levelId: 3,
    },
  ];

  useEffect(() => {
    handleParamsChange();
  }, [searchParams]);

  const handleParamsChange = () => {
    const categoryParams = searchParams.get("catId");
    const levelParams = searchParams.get("levelId");
  };

  const handleLevelFilter = (e, levelParams) => {
    const currentParams = new URLSearchParams(searchParams);
    const existingLevels = new Set(currentParams.get("levelId").split(""));

    if (e.target.checked) {
      existingLevels.add(levelParams);
    } else {
      existingLevels.delete(levelParams);
    }

    const updateLevels = [...existingLevels].join("");

    const finalLevels = updateLevels.startsWith(",")
      ? updateLevels.substring(1)
      : updateLevels;

    currentParams.set("levelId", finalLevels);

    setSearchParams(currentParams);
  };

  return (
    <div
      className={`bg-slate-100 rounded-xl w-3/4 h-screen p-6 absolute z-30 lg:static lg:w-72 ${
        navDashbord ? "right-[500px]" : "left-[-500px] sm:left-[-1000px]"
      }`}
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
            {level.map((level) => (
              <label
                key={level.id}
                className="label cursor-pointer flex justify-start gap-2"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={searchParams
                    .get("levelId")
                    ?.split(",")
                    .includes(level.levelId)}
                  onChange={(e) => handleLevelFilter(e, level.levelId)}
                />
                <span className="label-text sm:text-lg">{level.name}</span>
              </label>
            ))}
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

Sidebar.propTypes = {
  navDashbord: PropTypes.bool,
};

export default Sidebar;
