import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyCourse,
  getCourseSummary,
} from "../../redux/action/courseAdminAction";
import { useEffect, useState } from "react";
import Header from "../Components/Header/HeaderAdmin";
import Sidebar from "../Components/Sidebar/Sidebar";
import CardOne from "../Components/Card/CardOne";
import TableHead from "../Components/Table/TableHead2";
import TableBody from "../Components/Table/TableBody2";

function DashbordAdmin() {
  const dispatch = useDispatch();
  const { myCourse, myOrder, courseSummary } = useSelector(
    (state) => state.courseAdmin
  );
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  const [sortedCourses, setSortedCourses] = useState([]);
  const [isRecentFirst, setIsRecentFirst] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPagesToShow = 3;

  const combinedData = myOrder.map((order, index) => ({
    ...order,
    ...myCourse[index],
  }));
  const totalItems = combinedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
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

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentItems =
    sortedCourses.length > 0
      ? sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse)
      : combinedData.slice(indexOfFirstCourse, indexOfLastCourse);

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

  useEffect(() => {
    dispatch(getMyCourse(setErrors, errors));
    dispatch(getCourseSummary(setErrors, errors));
  }, [dispatch, errors]);

  const handleSortByDate = () => {
    const sorted = [...combinedData].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      if (isRecentFirst) {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

    setSortedCourses(sorted);
    setIsRecentFirst(!isRecentFirst);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="flex h-screen">
      <div className="sm:fixed sm:top-0 sm:left-0 sm:z-40 sm:w-64 sm:h-screen pt-20">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-16 py-12 lg:ml-64">
          <CardOne item={courseSummary} />
          <div className="lg:flex lg:justify-between w-full pt-8">
            <h2 className="text-3xl text-center lg:text-start font-bold lg:text-2xl mb-2">
              Status Pembayaran
            </h2>
            <div className="lg:flex lg:space-x-3 lg:items-center">
              <div className="flex flex-col lg:flex-row lg:space-x-3 font-bold lg:items-center">
                <button
                  onClick={handleSortByDate}
                  className="bg-transparent text-primary border border-primary rounded-3xl px-4 py-2 lg:px-2 lg:py-2 text-base lg:text-md mb-3 lg:mb-0 hover:bg-primary hover:text-white transition duration-300"
                >
                  {isRecentFirst ? (
                    <FontAwesomeIcon
                      icon={faArrowDownShortWide}
                      className="mr-1"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowUpShortWide}
                      className="mr-1"
                    />
                  )}
                  {isRecentFirst ? "Tanggal Terbaru" : "Tanggal Terlama"}
                </button>
                {isSearchActive ? (
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari..."
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
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-center mb-4 rounded-xl shadow-md overflow-x-auto">
              <table className="table">
                <TableHead />
                {currentItems.map((item, index) => (
                  <TableBody key={item?.id} item={item} index={index + 1} />
                ))}
              </table>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end w-full mt-4">
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
              {Array.from(
                { length: end - start + 1 },
                (_, index) => start + index
              ).map((pageNumber) => (
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
    </div>
  );
}

export default DashbordAdmin;
