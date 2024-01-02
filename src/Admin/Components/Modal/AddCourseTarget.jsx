import PropType from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseTarget,
  getCourse,
} from "../../../redux/action/courseAdminAction";

const Modal = ({ show }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const { course } = useSelector((state) => state.courseAdmin);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: selectedCourseId,
      description,
    };

    dispatch(addCourseTarget(selectedCourseId, formData)).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
    document.getElementById("my_modal_5").close();
    // console.log(formData);
  };

  const handleSelectChange = (e) => {
    setSelectedCourseId(e.target.value);
  };

  return (
    <>
      <dialog id="my_modal_5" className={`modal ${show ? "" : "hidden"}`}>
        <div className="modal-box w-11/12 max-w-3xl px-24">
          <form method="dialog">
            <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-primary">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-2xl w-full text-center mb-6 text-primary">
              Tambah Deskripsi Target Kursus!
            </h3>
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-gray-900">
                Nama Kelas
              </label>
              <select
                value={selectedCourseId}
                onChange={handleSelectChange}
                className="select select-bordered border bg-gray-50 w-full focus:border-2 focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  Pilih Kelas
                </option>
                {course.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.courseName}
                  </option>
                ))}
              </select>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900">
                  Deskripsi
                </label>
                <textarea
                  id="small-input"
                  placeholder="Deskripsi target kursus"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500 resize-none"
                  rows={4}
                />
              </div>
              <div className="flex justify-center flex-row w-full gap-2">
                <div className="w-full max-w-xs">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-primary text-md text-white font-bold rounded-3xl w-full py-2.5 hover:bg-indigo-800 transition duration-300"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

Modal.propTypes = {
  show: PropType.func.isRequired,
};

export default Modal;
