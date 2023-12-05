import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile, logout } from "../../redux/action/authAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faMagnifyingGlass,
  faBars,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const onlogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  return (
    <header className="sticky top-0 z-20 px-5 w-full bg-primary shadow-lg shadow-slate-700/20">
      <div className="relative px-4 lg:px-16">
        <nav className="flex h-24 items-stretch justify-between font-medium text-slate-700">
          <div className="flex items-center gap-6 py-4">
            <Link to="/">
              <img src="/logo.svg" alt="logo" className="h-16" />
            </Link>
            <div className="flex items-center gap-2 py-4 px-6">
              <form action="search" className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Cari Kursus terbaik..."
                  autoComplete="off"
                  className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-300 rounded-xl border-white px-4 md:py-2 md:w-96"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button className="text-white bg-primary hover:bg-indigo-400 rounded-lg w-8 h-7 transition duration-300">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            role="menubar"
            aria-label="Select page"
            className={`absolute top-0 left-0 z-[-1] h-96 w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
          >
            {user ? (
              <>
                <li role="none" className="flex items-stretch">
                  <div className="flex items-center gap-2 py-4">
                    <Link
                      to="/kelas-saya"
                      className="inline-flex items-center justify-center h-8 w-28 gap-2 px-5 text-sm font-bold tracking-wide text-white transition duration-300 rounded-xl whitespace-nowrap bg-sky-500 hover:bg-sky-600 hover:text-white"
                    >
                      <span>
                        <FontAwesomeIcon icon={faBars} />
                      </span>
                      Kelas
                    </Link>
                  </div>
                </li>
                <li role="none" className="flex items-stretch">
                  <div className="flex items-center gap-2 py-4 dropdown dropdown-bottom dropdown-end">
                    <div
                      tabIndex={0}
                      className="btn m-1 bg-transparent hover:bg-indigo-800 focus:bg-indigo-800 border-none"
                    >
                      <FontAwesomeIcon
                        icon={faBell}
                        className="text-white text-xl"
                      />
                    </div>
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                        <a>Notification</a>
                      </li>
                      <li>
                        <a>Notification</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li role="none" className="flex items-stretch">
                  <div className="flex items-center gap-2 py-4 dropdown dropdown-bottom dropdown-end font-bold">
                    <div
                      tabIndex={0}
                      className="btn m-1 bg-transparent hover:bg-indigo-800 focus:bg-indigo-800 border-none"
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-white text-lg"
                      />
                    </div>
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                        <Link to="/profile" className="justify-center">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          className="mt-1 justify-center text-white bg-alert hover:bg-red-700 hover:text-white transition duration-300"
                          onClick={onlogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            ) : (
              <li role="none" className="flex items-stretch">
                <div className="flex items-center gap-2 py-4">
                  <Link to="/login" className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="text-white text-lg"
                    />
                    <span className="text-white">Masuk</span>
                  </Link>
                </div>
              </li>
            )}
          </div>
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
