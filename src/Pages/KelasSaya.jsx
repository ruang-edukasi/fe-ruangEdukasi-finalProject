import { useState } from "react";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import MyCourse from "../Layout/MyCourse";

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
                <MyCourse />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KelasSaya;
