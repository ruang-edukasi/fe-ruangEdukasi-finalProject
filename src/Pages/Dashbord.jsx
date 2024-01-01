import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import CourseItem from "../Components/Card/CourseItem";
import Sidebar from "../Components/Sidebar/Sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { getCourseDashbord } from "../redux/action/courseAction";

function Dashbord() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [navDashbord, setNavDashbord] = useState(false);
  const dispatch = useDispatch();
  const { courseDashbord } = useSelector((state) => state.course);
  const [filteredKelas, setFilteredKelas] = useState([...courseDashbord]);

  useEffect(() => {
    dispatch(getCourseDashbord());
  }, [dispatch]);

  useEffect(() => {
    const filtered = courseDashbord.filter((item) => {
      if (activeFilter === "All") {
        return true;
      } else if (activeFilter === "kelasPremium") {
        return item.courseType === "Premium";
      } else if (activeFilter === "kelasGratis") {
        return item.courseType === "Gratis";
      }
      return true;
    });
    setFilteredKelas(filtered);
  }, [courseDashbord, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleOffCanfas = () => {
    setNavDashbord(!navDashbord);
  };

  return (
    <>
      <Header />
      <section className="bg-blue-100 min-h-screen">
        <div className="container mx-auto px-10 sm:px-5 lg:px-24">
          <div className="flex justify-between py-10">
            <h2 className="text-2xl font-bold">Topik Kelas</h2>
          </div>
          <div className="flex justify-evenly gap-1">
            {/* Sidebar */}
            <Sidebar navDashbord={navDashbord} />

            {/* Main Content */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                {/* Filter Buttons */}
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
                    activeFilter === "kelasPremium"
                      ? "bg-primary text-white"
                      : "bg-slate-100"
                  }
                  text="Kelas Premium"
                  onClick={() => handleFilterChange("kelasPremium")}
                />
                <Button
                  bgColor={
                    activeFilter === "kelasGratis"
                      ? "bg-primary text-white"
                      : "bg-slate-100"
                  }
                  text="Kelas Gratis"
                  onClick={() => handleFilterChange("kelasGratis")}
                />
              </div>
              <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-3 lg:gap-4">
                {/* Course Items */}
                {filteredKelas.map((courses) => (
                  <CourseItem
                    key={courses?.id}
                    id={courses?.id}
                    thumbnailCourse={courses?.thumbnailCourse || "/course.jpg"}
                    courseName={courses?.courseName}
                    instructorName={courses?.instructorName}
                    courseDescription={courses?.courseDescription}
                    price={courses?.price}
                    rating={courses?.rating}
                    courseType={courses?.courseType}
                    courseCategory={courses?.courseCategory}
                    courseLevel={courses?.courseLevel}
                  />
                ))}
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
        </div>
      </section>
    </>
  );
}

export default Dashbord;

{
  /* Offcanvas Content
<div
  className={`bg-blue-100 h-screen w-60 fixed top-0 left-0 overflow-y-auto transform ease-in-out duration-300 ${
    navDashbord ? "translate-x-0" : "-translate-x-full"
  } lg:hidden`}
>
  <Sidebar />
</div> */
}
