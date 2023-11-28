import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full bg-primary shadow-lg shadow-slate-700/20">
      <div className="relative px-16">
        <nav className="flex h-24 items-stretch justify-between font-medium text-slate-700">
          <div className="flex items-center gap-2 py-4">
            <Link to="/">
              <img src="/logo.svg" alt="logo" className="h-16" />
            </Link>
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
            <li role="none" className="flex items-stretch">
              <div className="flex items-center gap-2 py-4 mr-4">
                <form action="search" className="relative">
                  <input
                    type="text"
                    name="search"
                    placeholder="Cari kursus"
                    autoComplete="off"
                    className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-400 focus:w-40 sm:focus:w-96 focus:ease-in focus:duration-300 rounded-full border-white px-4 py-1 md:py-2 transition-width duration-300 ease-in-out"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <button></button>
                  </div>
                </form>
              </div>
            </li>
            <li role="none" className="flex items-stretch">
              <div className="flex items-center gap-2 py-4">
                <Link to="/login">
                  <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-bold tracking-wide text-primary transition duration-300 rounded-xl whitespace-nowrap bg-white hover:bg-indigo-400 hover:text-white">
                    <span>MASUK</span>
                  </button>
                </Link>
              </div>
            </li>
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