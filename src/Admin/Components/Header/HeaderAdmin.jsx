import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profile } from "../../../redux/action/authAdminAction";

function HeaderAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin, token } = useSelector((state) => state.authAdmin);

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null));
    }
  }, [dispatch, navigate, token]);

  return (
    <header className="bg-blue-100 p-4 flex justify-between items-center">
      <div className="flex pl-16 lg:pl-72">
        {admin ? (
          <>
            <h1 className="font-bold text-2xl lg:text-3xl text-primary">
              Hi, {admin?.fullName}
            </h1>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="hidden justify-between items-center gap-2 py-4 md:flex">
        <form action="search" className="relative">
          <input
            type="text"
            name="search"
            placeholder="Cari"
            autoComplete="off"
            className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-300 rounded-xl border-white px-4 md:py-2 md:w-96"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button className="text-white bg-primary hover:bg-indigo-400 rounded-lg w-8 h-7 transition duration-300">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
        <button className="p-2">
          <FontAwesomeIcon icon={faUser} className="text-primary h-7" />
        </button>
      </div>
    </header>
  );
}

export default HeaderAdmin;
