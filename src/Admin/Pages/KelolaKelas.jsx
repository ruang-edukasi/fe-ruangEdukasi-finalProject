import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowDownShortWide,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/HeaderAdmin";
import Sidebar from "../Components/Sidebar/Sidebar";
import CardOne from "../Components/Card/CardOne";
import CardTwo from "../Components/Card/CardTwo";
import CardThree from "../Components/Card/CardThree";
import Modal from "../Components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/action/courseAdminAction";
import { useEffect, useState } from "react";
import TableHead from "../Components/Table/TableHead";

function KelolaKelas() {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courseAdmin);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
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
          <div className="grid grid-cols-3 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3">
            <CardOne />
            <CardTwo />
            <CardThree />
          </div>
          <div className="flex justify-between w-full pt-8">
            <h2 className="text-2xl font-bold">Kelola Kelas</h2>
            <div className="flex space-x-3 font-bold">
              <button
                className="bg-primary text-white rounded-3xl px-4 hover:bg-indigo-800 transition duration-300"
                onClick={show}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Tambah
              </button>
              <button className="bg-transparent text-primary border border-primary rounded-3xl px-4 hover:bg-primary hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faArrowDownShortWide} className="mr-1" />
                Filter
              </button>
              <button className="bg-transparent text-primary text-xl font-bold rounded-3xl w-12 h-10 hover:bg-primary hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <TableHead />
          </div>
        </div>
      </div>
      <Modal show={show} />
    </div>
  );
}

export default KelolaKelas;
