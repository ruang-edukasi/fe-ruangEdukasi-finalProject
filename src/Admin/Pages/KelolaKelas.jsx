import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowDown,
  faArrowUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/HeaderAdmin";
import Sidebar from "../Components/Sidebar/Sidebar";
import CardOne from "../Components/Card/CardOne";
import Modal from "../Components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  getCourse,
  getCourseSummary,
} from "../../redux/action/courseAdminAction";
import { useEffect, useState } from "react";
import TableHead from "../Components/Table/TableHead";
import TableBody from "../Components/Table/TableBody";
import { useNavigate } from "react-router-dom";

function KelolaKelas() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { course, courseSummary } = useSelector((state) => state.courseAdmin);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [sortedCourses, setSortedCourses] = useState([]);
  const [isDescending, setIsDescending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;

  const handleAddCourse = (formData) => {
    dispatch(addCourse(formData, navigate));
    document.getElementById("my_modal_3").close();
  };
  const handleSortByPrice = () => {
    const sorted = [...course].sort((a, b) => {
      const priceA = a.price || 0;
      const priceB = b.price || 0;

      if (isDescending) {
        return priceB - priceA;
      } else {
        return priceA - priceB;
      }
    });

    setSortedCourses(sorted);
    setIsDescending(!isDescending);
  };

  const coursesToDisplay = course
    ? sortedCourses.length > 0
      ? sortedCourses
      : course
    : [];

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const courses = coursesToDisplay.slice(indexOfFirstCourse, indexOfLastCourse);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
    dispatch(getCourseSummary(setErrors, errors));
  }, [dispatch, errors]);

  function show() {
    document.getElementById("my_modal_3").showModal();
    console.log(course);
  }
  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 z-40 w-64 h-screen pt-20">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-16 py-12 sm:ml-64">
          <CardOne item={courseSummary} />
          <div className="flex justify-between w-full pt-8">
            <h2 className="text-2xl font-bold">Kelola Kelas</h2>
            <div className="flex space-x-3 font-bold">
              <button
                className="bg-primary text-white rounded-3xl px-4 hover:bg-indigo-800 transition duration-300"
                onClick={show}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Tambah Kelas
              </button>
              <button
                onClick={handleSortByPrice}
                className="bg-transparent text-primary border border-primary rounded-3xl px-4 hover:bg-primary hover:text-white transition duration-300"
              >
                {isDescending ? (
                  <FontAwesomeIcon icon={faArrowDown} className="mr-1" />
                ) : (
                  <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                )}
                {isDescending ? "Harga Terendah" : "Harga Tertinggi"}
              </button>
              <button className="bg-transparent text-primary text-xl font-bold rounded-3xl w-12 h-10 hover:bg-primary hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-center mb-4 rounded-xl shadow-md overflow-x-auto">
              <table className="table">
                <TableHead />
                {courses.map((item, index) => (
                  <TableBody key={item?.id} item={item} index={index + 1} />
                ))}
              </table>
            </div>
          </div>
          <div className="flex justify-end w-full mt-4">
            <ul className="flex">
              {[...Array(Math.ceil(course.length / coursesPerPage))].map(
                (_, index) => (
                  <li key={index} className="mx-1">
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`${
                        currentPage === index + 1
                          ? "bg-primary text-white"
                          : "bg-white text-primary hover:bg-primary hover:text-white transition duration-300"
                      } border border-primary rounded-xl w-8 h-8 flex items-center justify-center focus:outline-none`}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <Modal show={show} onSubmit={handleAddCourse} />
    </div>
  );
}

export default KelolaKelas;
