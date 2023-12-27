import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../../redux/action/courseAdminAction";

const Modal = () => {
  const dispatch = useDispatch();

  const [showNotification, setShowNotification] = useState(false);
  const [instructorName, setInstructorName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [price, setPrice] = useState("");

  const onAddCourse = async (e) => {
    e.preventDefault();

    dispatch(addCourse(instructorName, courseName, courseDescription, price));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse();
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <>
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  w-11/12 max-w-3xl px-24">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <form method="dialog">
              <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-primary">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-2xl w-full text-center mb-6 text-primary">
              Tambah Kelas!
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Nama Instruktur
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Nama instruktur"
                  value={instructorName}
                  onChange={(event) => setInstructorName(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Nama Kelas
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Nama kelas"
                  value={courseName}
                  onChange={(event) => setCourseName(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500  "
                />
              </div>
              {/* <div className="flex flex-row w-full gap-2">
              <div className="w-full max-w-xs">
                <label className="block text-sm font-semibold text-gray-900  p-2">
                  Kategori
                </label>
                <select className="select w-full select-bordered border bg-gray-50 focus:border-2 focus:border-blue-500  focus:outline-none">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="w-full max-w-xs">
                <label className="block text-sm font-semibold text-gray-900  p-2">
                  Tipe kelas
                </label>
                <select className="select select-bordered bg-gray-50 focus:border-2 focus:border-blue-500 w-full focus:outline-none">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="w-full max-w-xs">
                <label className="block text-sm font-semibold text-gray-900  p-2">
                  Level
                </label>
                <select className="select select-bordered bg-gray-50 focus:border-2 focus:border-blue-500 w-full focus:outline-none">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div> */}
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Deskripsi
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Deskripsi"
                  value={courseDescription}
                  onChange={(event) => setCourseDescription(event.target.value)}
                  required
                  className="block w-full p-7 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Harga
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Harga kelas"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  "
                />
              </div>
              <div className="flex flex-row w-full gap-2">
                <div className="w-full max-w-xs">
                  <button className="bg-alert text-md text-white font-bold rounded-3xl w-full py-2.5 hover:bg-red-800 transition duration-300">
                    Upload Video
                  </button>
                </div>
                <div className="w-full max-w-xs">
                  <button
                    type="submit"
                    className="bg-primary text-md text-white font-bold rounded-3xl w-full py-2.5 hover:bg-indigo-800 transition duration-300"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </form>
          {showNotification && (
            <div className="flex justify-center mt-4">
              <div
                className="w-lg text-white bg-green-500 hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center rounded-lg"
                onClick={() => setShowNotification(false)}
              >
                Tambah kelas berhasil!
              </div>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
