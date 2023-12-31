import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const CardOnes = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="card bg-sky-500 text-white shadow-md p-4 flex items-center justify-center h-24 w-auto rounded-2xl">
          <div className="flex items-center gap-4">
            <span className="text-2xl">
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <div className="text-left">
              <h2 className="card-title font-normal text-xl">
                {item?.totalCourse}
              </h2>
              <h2 className="card-title">Total Kelas</h2>
            </div>
          </div>
        </div>
        <div className="card bg-success text-white shadow-md p-4 flex items-center justify-center h-24 w-auto rounded-2xl">
          <div className="flex items-center gap-4">
            <span className="text-2xl">
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <div className="text-left">
              <h2 className="card-title font-normal text-xl">
                {item?.freeCourse}
              </h2>
              <h2 className="card-title">Kelas Gratis</h2>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-white shadow-md p-4 flex items-center justify-center h-24 w-auto rounded-2xl">
          <div className="flex items-center gap-4 ">
            <span className="text-2xl">
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <div className="text-left">
              <h2 className="card-title font-normal text-xl">
                {item?.premiumCourse}
              </h2>
              <h2 className="card-title">Kelas Premium</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardOnes.propTypes = {
  item: PropType.object.isRequired,
};

export default CardOnes;
