import { useState } from "react";
import "../index.css";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-primary shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-16 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          <a
            id="RuangEdukasi"
            aria-label="Logo Ruang Edukasi"
            aria-current="page"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            href="/"
          >
            <img src="/logoo.svg" width={80} alt="logo" />
          </a>
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
          <div
            role="menubar"
            aria-label="Select page"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
          >
            <li role="none" className="flex items-stretch">
              <div className="flex items-center gap-2 py-4 transition-colors">
                <form action="search" className="relative">
                  <input
                    type="text"
                    name="search"
                    placeholder="Cari kursus"
                    autoComplete="off"
                    className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-400 focus:w-40 sm:focus:w-96 focus:ease-in focus:duration-300 rounded-full border-white px-4 py-1 md:py-2 transition-width duration-300 ease-in-out"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    {/* <img
          width="25px"
          height="25px"
          src=""
          alt="Search.svg"
        /> */}
                  </div>
                </form>
              </div>
            </li>
          </div>
          <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
            <div className="flex items-center gap-2 py-4 transition-colors">
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-bold tracking-wide text-primary transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-white hover:bg-indigo-400 hover:text-white ">
                <span>MASUK</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;