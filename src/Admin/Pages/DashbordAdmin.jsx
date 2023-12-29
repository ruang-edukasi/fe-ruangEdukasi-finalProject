import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
  faMagnifyingGlass,
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const combinedData = myOrder.map((order, index) => ({
    ...order,
    ...myCourse[index],
  }));

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

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentItems =
    sortedCourses.length > 0
      ? sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse)
      : combinedData.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 z-40 w-64 h-screen pt-20">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-16 sm:ml-64">
          <CardOne item={courseSummary} />
          <div className="flex justify-between w-full pt-12">
            <h2 className="text-2xl font-bold">Status Pembayaran</h2>
            <div className="flex space-x-3 font-bold">
              <button
                onClick={handleSortByDate}
                className="bg-transparent text-primary border border-primary rounded-3xl px-4 hover:bg-primary hover:text-white transition duration-300 flex items-center"
              >
                {isRecentFirst ? (
                  <FontAwesomeIcon
                    icon={faArrowDownShortWide}
                    className="mr-1"
                  />
                ) : (
                  <FontAwesomeIcon icon={faArrowUpShortWide} className="mr-1" />
                )}
                {isRecentFirst ? "Tanggal Terlama" : "Tanggal Terbaru"}
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
                {currentItems.map((item, index) => (
                  <TableBody key={item?.id} item={item} index={index + 1} />
                ))}
              </table>
            </div>
          </div>
          <div className="flex justify-end w-full mt-4">
            <ul className="flex">
              {Array(Math.ceil(combinedData.length / itemsPerPage))
                .fill()
                .map((_, index) => (
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
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashbordAdmin;
