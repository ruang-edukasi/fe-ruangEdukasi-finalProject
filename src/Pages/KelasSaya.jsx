import { useState } from "react";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import CourseMyClass from "../Components/Card/CourseMyClass";
import { getMyCourseDashboard } from "../redux/action/courseAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import SidebarMyClass from "../Components/Sidebar/SidebarMyClass";

function KelasSaya() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [navDashbord, setNavDashbord] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const { myCourseDashboard } = useSelector((state) => state.course);
  const [filteredKelas, setFilteredKelas] = useState([...myCourseDashboard]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getMyCourseDashboard());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const filtered = myCourseDashboard.filter((item) => {
      if (activeFilter === "All") {
        return true;
      } else if (activeFilter === "InProgress") {
        return item.percentProgress < 100;
      } else if (activeFilter === "Selesai") {
        return item.percentProgress >= 100;
      }
      return true;
    });
    setFilteredKelas(filtered);
  }, [myCourseDashboard, activeFilter]);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const isLoggedIn = userToken && userToken ;

    if (!token && !isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan login terlebih dahulu!",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login");
      });
    } else {
      dispatch(getMyCourseDashboard());
    }
  }, [dispatch, myCourseDashboard, navigate, token, user]);

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
        <div className="container mx-auto px-10 sm:px-5 lg:px-24">
          <div className="flex justify-between py-10">
            <h2 className="text-2xl font-bold">Kelas Berjalan</h2>
          </div>
          <div className="flex justify-evenly gap-1">
            {/* Sidebar */}
            <SidebarMyClass navDashbord={navDashbord} />

            {/* Main Content */}
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                {/* filter Buttons */}
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
              <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-3 lg:gap-4">
                {filteredKelas.map((courses) => (
                  <CourseMyClass
                    key={courses?.id}
                    id={courses?.id}
                    thumbnailCourse={courses?.thumbnailCourse || "/course.jpg"}
                    courseName={courses?.courseName}
                    instructorName={courses?.instructorName}
                    courseType={courses?.courseType}
                    courseCategory={courses?.courseCategory}
                    courseLevel={courses?.courseLevel}
                    courseContent={courses?.courseContent}
                    percentProgress={courses?.percentProgress}
                  />
                ))}
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
