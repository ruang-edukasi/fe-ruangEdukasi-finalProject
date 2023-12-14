import { useState } from "react";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function KelasSaya() {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div>
      <Header />
      <section className="bg-blue-100 min-h-screen">
        <div className="container mx-auto px-24">
          <div className="flex justify-between py-10">
            <h2 className="text-2xl font-bold">Kelas Berjalan</h2>
            <form action="search" className="relative">
              <input
                type="text"
                name="search"
                placeholder="Cari Kelas..."
                autoComplete="off"
                className="outline-none font-semibold text-md  border-none ring-2 ring-white focus:ring-indigo-400 focus:w-40 sm:focus:w-96 focus:ease-in focus:duration-300 rounded-full border-white px-4 py-1 md:py-2 transition-width duration-300 ease-in-out"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button className="text-white bg-primary hover:bg-indigo-400 rounded-lg w-8 h-7 transition duration-300">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-evenly gap-1">
            <Sidebar />
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <Button
                  bgColor={
                    activeFilter === "All"
                      ? "bg-primary text-white"
                      : "bg-slate-100"
                  }
                  text="All"
                  onClick={() => handleFilterChange("All")}
                />
                <Button
                  bgColor={
                    activeFilter === "InProgress"
                      ? "bg-primary text-white"
                      : "bg-slate-100"
                  }
                  text="In Progress"
                  onClick={() => handleFilterChange("InProgress")}
                />
                <Button
                  bgColor={
                    activeFilter === "Selesai"
                      ? "bg-primary text-white"
                      : "bg-slate-100"
                  }
                  text="Selesai"
                  onClick={() => handleFilterChange("Selesai")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <KelasSaya />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KelasSaya;
