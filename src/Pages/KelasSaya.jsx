import { useState } from "react";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import MyCourse from "../Layout/MyCourse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

function KelasSaya() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [navDashbord, setNavDashbord] = useState(false);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleOffCanfas = () => {
    setNavDashbord(!navDashbord);
  };

  return (
    <div>
      <Header />
      <section className="bg-blue-100 min-h-screen">
        <div className="container mx-auto px-24">
          <div className="flex justify-between py-10">
            <h2 className="text-2xl font-bold">Kelas Berjalan</h2>
          </div>
          <div className="flex justify-evenly gap-1">
            <Sidebar navDashbord={navDashbord} />
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
                <MyCourse />
              </div>
            </div>
          </div>
          {/* Offcanvas Button */}
          <div
            onClick={handleOffCanfas}
            className={`text-white cursor-pointer z-20 fixed right-0 bottom-0 text-lg bg-blue-600  hover:opacity-80 p-2 sm:p-3 rounded-l-lg lg:hidden transform transition-transform duration-300 ease-in-out`}
          >
            {navDashbord ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBarsStaggered} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default KelasSaya;
