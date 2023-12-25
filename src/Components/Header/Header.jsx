import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../redux/action/authAction";
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
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, token } = useSelector((state) => state.auth);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search/?query=${query}`);
  };

  const isActive = (path) => {
    return location.pathname === path ? "bg-sky-500 text-white" : "";
  };

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  return (
    <header className="sticky top-0 z-50 px-5 w-full bg-primary shadow-lg shadow-slate-700/20">
      <div className="relative px-4 lg:px-16">
        <nav className="flex h-24 items-stretch justify-between font-medium text-slate-700">
          <div className="flex items-center gap-6 py-4">
            <Link to="/">
              <img src="/logo.svg" alt="logo" className="h-16" />
            </Link>
            <div className="hidden lg:flex flex-row items-center gap-2 py-4 px-12">
              <form
                action="search"
                className="relative"
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  value={query}
                  name="search"
                  placeholder="Cari Kursus terbaik..."
                  autoComplete="off"
                  className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-300 rounded-xl border-white px-4 md:py-2 md:w-96"
                  onChange={(event) => setQuery(event.target.value)}
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
            aria-label="Select page"
            className={`absolute top-0 left-0 gap-2 z-[-1] rounded-xl w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-primary/70 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
          >
            {user ? (
              <>
                <li role="none" className="flex justify-center">
                  <div className="lg:hidden flex-row items-center gap-2 py-4 px-6">
                    <form
                      action="search"
                      className="relative"
                      onSubmit={handleSearch}
                    >
                      <input
                        type="text"
                        value={query}
                        name="search"
                        placeholder="Cari Kursus terbaik..."
                        autoComplete="off"
                        className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-300 rounded-xl border-white px-4 py-2 md:w-96"
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button className="text-white bg-primary hover:bg-indigo-400 rounded-lg w-8 h-7 transition duration-300">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <div className="flex justify-center items-center">
                  <li role="none" className="flex justify-center">
                    <div className="flex items-center gap-2 py-4">
                      <Link
                        to="/kelas-saya"
                        className={`inline-flex items-center justify-center h-8 w-28 gap-2 px-5 text-sm font-bold tracking-wide transition duration-300 rounded-xl whitespace-nowrap hover:bg-indigo-800 text-white ${isActive(
                          "/kelas-saya"
                        )}`}
                      >
                        <FontAwesomeIcon icon={faBars} />
                        Kelas
                      </Link>
                    </div>
                  </li>
                  <li role="none" className="flex justify-center">
                    <div className="flex items-center gap-2 py-4">
                      <Link
                        to="/notifikasi"
                        className={`inline-flex items-center justify-center h-12 w-14 gap-2 px-5 text-sm font-bold tracking-wide transition duration-300 rounded-lg whitespace-nowrap hover:bg-indigo-800 text-white ${isActive(
                          "/notifikasi"
                        )}`}
                      >
                        <FontAwesomeIcon
                          icon={faBell}
                          className="text-white text-xl"
                        />
                      </Link>
                    </div>
                  </li>
                  <li role="none" className="flex justify-center">
                    <div className="flex items-center gap-2 py-4 font-bold">
                      <Link
                        to="/profile-akun"
                        className={`inline-flex items-center justify-center h-12 w-14 gap-2 px-5 text-sm font-bold tracking-wide transition duration-300 rounded-lg whitespace-nowrap hover:bg-indigo-800 text-white ${isActive(
                          "/profile-akun"
                        )}`}
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-white text-xl"
                        />
                      </Link>
                    </div>
                  </li>
                </div>
              </>
            ) : (
              <>
                <li role="none" className="flex justify-center">
                  <div className="lg:hidden flex-row items-center gap-2 py-4 px-6">
                    <form
                      action="search"
                      className="relative"
                      onSubmit={handleSearch}
                    >
                      <input
                        type="text"
                        value={query}
                        name="search"
                        placeholder="Cari Kursus terbaik..."
                        autoComplete="off"
                        className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-300 rounded-xl border-white px-4 md:py-2 md:w-96"
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button className="text-white bg-primary hover:bg-indigo-400 rounded-lg w-8 h-7 transition duration-300">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <li role="none" className="flex justify-center">
                  <div className="flex items-center gap-2 py-4">
                    <Link
                      to="/login"
                      className="flex items-center gap-2 btn bg-transparent hover:bg-indigo-800 focus:bg-indigo-800 border-none"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        className="text-white text-lg"
                      />
                      <span className="text-white">Masuk</span>
                    </Link>
                  </div>
                </li>
              </>
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
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
