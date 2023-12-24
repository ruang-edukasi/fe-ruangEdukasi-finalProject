import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/action/courseAction";
import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import CourseItem from "../Components/Card/CourseItem";
import Sidebar from "../Components/Sidebar/Sidebar";

function Dashbord() {
  const [activeFilter, setActiveFilter] = useState("All");
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
        <div className="container mx-auto px-24">
          <div className="flex justify-between py-10">
            <h2 className="text-2xl font-bold">Topik Kelas</h2>
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
              <div className="grid grid-cols-2 gap-4">
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
      </section>
    </>
  );
}

export default Dashbord;
