import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, profile } from "../../../redux/action/authAdminAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPenToSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const onLogout = () => {
    Swal.fire({
      title: "Logout Confirmation",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6148FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());

        Swal.fire({
          title: "Logged Out",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/login-admin");
        }, 2000);
      }
    });
  };

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null));
    }
  }, [dispatch, navigate, token]);

  return (
    <>
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-64 flex-col border-r border-r-slate-200 bg-primary transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="flex justify-center py-10">
          <Link to="/dashbord-admin">
            <img src="/logo.svg" alt="logo" className="w-24" />
          </Link>
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div className="font-semibold">
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link
                  to="/dashbord-admin"
                  className="flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-indigo-800 aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <FontAwesomeIcon icon={faHouse} />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  to="/kelolakelas-admin"
                  className="flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-indigo-800 aria-[current=page]:text-white"
                  aria-current="page"
                >
                  <div className="flex items-center self-center ">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Kelola Kelas
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <button
                  onClick={onLogout}
                  className="flex items-center gap-3 rounded p-3 text-white transition-colors w-full hover:bg-indigo-800 aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center ">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Keluar
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
};

export default Sidebar;
