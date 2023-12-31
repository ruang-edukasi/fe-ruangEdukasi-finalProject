import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowDown,
  faArrowUp,
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/HeaderAdmin";
import Sidebar from "../Components/Sidebar/Sidebar";
import CardOne from "../Components/Card/CardOne";
import Modal from "../Components/Modal";
import Modal2 from "../Components/Modal/AddContent";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  addCourseContent,
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
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;
  const maxPagesToShow = 3;

  const totalItems = course.length;
  const totalPages = Math.ceil(totalItems / coursesPerPage);
  let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let end = Math.min(start + maxPagesToShow - 1, totalPages);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  if (totalPages <= maxPagesToShow) {
    start = 1;
    end = totalPages;
  } else {
    if (currentPage <= Math.floor(maxPagesToShow / 2)) {
      end = maxPagesToShow;
    } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
      start = totalPages - maxPagesToShow + 1;
    }
  }

  const coursesToDisplay =
    course && course.length > 0
      ? sortedCourses.length > 0
        ? sortedCourses
        : course
      : [];

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const courses = coursesToDisplay.slice(indexOfFirstCourse, indexOfLastCourse);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAddCourse = (formData) => {
    dispatch(addCourse(formData, navigate)).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
    document.getElementById("my_modal_3").close();
  };

  const handleAddCourseContent = (formData) => {
    dispatch(addCourseContent(formData, navigate)).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
    document.getElementById("my_modal_4").close();
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

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
    dispatch(getCourseSummary(setErrors, errors));
  }, [dispatch, errors]);

  function showModalAddCourse() {
    document.getElementById("my_modal_3").showModal();
  }

  function showModalAddContent() {
    document.getElementById("my_modal_4").showModal();
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
                onClick={showModalAddCourse}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Tambah Kelas
              </button>
              <button
                className="bg-primary text-white rounded-3xl px-4 hover:bg-indigo-800 transition duration-300"
                onClick={showModalAddContent}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Tambah Konten
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
              {isSearchActive ? (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari kelas..."
                    className="border border-primary rounded-3xl pl-4 pr-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute right-4 top-3 text-primary"
                  />
                </div>
              ) : (
                <button
                  className="bg-transparent text-primary text-xl font-bold rounded-3xl w-12 h-10 hover:bg-primary hover:text-white transition duration-300"
                  onClick={toggleSearch}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              )}
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
              <li className="mx-1">
                <button
                  onClick={handlePreviousPage}
                  disabled={isLastPage}
                  className={`${
                    isLastPage ? "cursor-not-allowed" : ""
                  } bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-xl w-8 h-8 flex items-center justify-center focus:outline-none`}
                >
                  {<FontAwesomeIcon icon={faAngleLeft} />}
                </button>
              </li>
              {course &&
                [
                  ...Array.from(
                    { length: end - start + 1 },
                    (_, index) => start + index
                  ),
                ].map((pageNumber) => (
                  <li key={pageNumber} className="mx-1">
                    <button
                      onClick={() => paginate(pageNumber)}
                      className={`${
                        currentPage === pageNumber
                          ? "bg-primary text-white"
                          : "bg-white text-primary hover:bg-primary hover:text-white transition duration-300"
                      } border border-primary rounded-xl w-8 h-8 flex items-center justify-center focus:outline-none`}
                    >
                      {pageNumber}
                    </button>
                  </li>
                ))}
              <li className="mx-1">
                <button
                  onClick={handleNextPage}
                  disabled={isLastPage}
                  className={`${
                    isLastPage ? "cursor-not-allowed" : ""
                  } bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-xl w-8 h-8 flex items-center justify-center focus:outline-none`}
                >
                  {<FontAwesomeIcon icon={faAngleRight} />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal show={showModalAddCourse} onSubmit={handleAddCourse} />
      <Modal2 show={showModalAddContent} onSubmit={handleAddCourseContent} />
    </div>
  );
}

export default KelolaKelas;
