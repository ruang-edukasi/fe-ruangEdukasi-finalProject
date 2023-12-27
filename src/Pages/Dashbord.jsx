import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/action/courseAction";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import CourseItem from "../Components/Card/CourseItem";
import Sidebar from "../Components/Sidebar/Sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function Dashbord() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [navDashbord, setNavDashbord] = useState(false);
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const [filteredKelas, setFilteredKelas] = useState([...course]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
  }, [dispatch, errors]);

  useEffect(() => {
    const filtered = course.filter((item) => {
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
  }, [course, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
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
                {filteredKelas.map((courses) => (
                  <CourseItem
                    key={courses?.id}
                    id={courses?.id}
                    imageURL=""
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
          </div>
        </div>
        <div
          onClick={() => setNavDashbord(!navDashbord)}
          className="text-white cursor-pointer z-20 fixed left-0 bottom-0 text-lg bg-blue-600 p-2 rounded-r-lg lg:hidden"
        >
          {navDashbord ? (
            <FontAwesomeIcon icon={faEllipsis} />
          ) : (
            <FontAwesomeIcon icon={faEllipsis} />
          )}
        </div>
      </section>
    </>
  );
}

export default Dashbord;
