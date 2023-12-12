import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const CardThree = () => {
  return (
    <div className="card bg-primary text-white shadow-md p-4 flex items-center justify-center h-24 w-auto rounded-2xl">
      <div className="flex items-center gap-4 ">
        <span className="text-2xl">
          <FontAwesomeIcon icon={faUserGroup} />
        </span>
        <div className="text-left">
          <h2 className="card-title font-normal text-xl">20</h2>
          <h2 className="card-title">Premium Class</h2>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
