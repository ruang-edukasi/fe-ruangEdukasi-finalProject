import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCourseDashbord } from "../../redux/action/courseAction";

function Sidebar({ navDashbord }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    handleParamsChange();
  }, [searchParams, dispatch]);

  const handleParamsChange = () => {
    const categoryParams = searchParams.get("catId");
    const levelParams = searchParams.get("levelId");

    const filters = {
      category: categoryParams,
      level: levelParams,
    };

    dispatch(getCourseDashbord(filters));
  };

  const handleChekboxFilter = (paramName, paramValue) => {
    const currentParams = new URLSearchParams(searchParams);
    const paramValues = currentParams.getAll(paramName);

    if (paramValues.includes(paramValue)) {
      paramValues.splice(paramValues.indexOf(paramValue), 1);
    } else {
      paramValues.push(paramValue);
    }

    currentParams.delete(paramName);
    paramValues.forEach((value) => currentParams.append(paramName, value));

    setSearchParams(currentParams);
  };

  const handleRemoveFilter = () => {
    setSearchParams(new URLSearchParams());
  };
  return (
    <div
      className={`bg-slate-100 rounded-xl w-3/4 h-screen p-6 absolute z-30 lg:static lg:w-72 ${
        navDashbord ? "right-[500px]" : "left-[-500px] sm:left-[-1000px]"
      }`}
    >
      {console.log(handleParamsChange)}
      <div className="form-control">
        <div className="flex flex-col pb-3">
          <h3 className="text-lg sm:text-xl font-bold">Filter</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                disabled
              />
              <span className="label-text sm:text-lg">Paling Baru</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                disabled
              />
              <span className="label-text sm:text-lg">Paling Popular</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                disabled
              />
              <span className="label-text sm:text-lg">Promo</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col pb-3">
          <h3 className="text-lg sm:text-xl font-bold">Kategori</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("catId").includes("1")}
                onChange={() => handleChekboxFilter("catId", "1")}
              />
              <span className="label-text sm:text-lg">Backend Development</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("catId").includes("2")}
                onChange={() => handleChekboxFilter("catId", "2")}
              />
              <span className="label-text sm:text-lg">
                Frontend Development
              </span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("catId").includes("3")}
                onChange={() => handleChekboxFilter("catId", "3")}
              />
              <span className="label-text sm:text-lg">UI/UX Design</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("catId").includes("4")}
                onChange={() => handleChekboxFilter("catId", "4")}
              />
              <span className="label-text sm:text-lg">Data Science</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("catId").includes("5")}
                onChange={() => handleChekboxFilter("catId", "5")}
              />
              <span className="label-text sm:text-lg">Quality Asurance</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("catId").includes("6")}
                onChange={() => handleChekboxFilter("catId", "6")}
              />
              <span className="label-text sm:text-lg">Android Development</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col pb-3">
          <h3 className="text-lg sm:text-xl font-bold">Level Kesulitan</h3>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("levelId").includes("1")}
                onChange={() => handleChekboxFilter("levelId", "1")}
              />
              <span className="label-text sm:text-lg">Beginner Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("levelId").includes("2")}
                onChange={() => handleChekboxFilter("levelId", "2")}
              />
              <span className="label-text sm:text-lg">Intermediate Level</span>
            </label>
          </div>
          <div>
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={searchParams.getAll("levelId").includes("3")}
                onChange={() => handleChekboxFilter("levelId", "3")}
              />
              <span className="label-text sm:text-lg">Advance Level</span>
            </label>
          </div>
        </div>
      </div>
      <div className="py-6 px-14">
        <button
          className="text-red-600 hover:text-red-800"
          onClick={handleRemoveFilter}
        >
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
