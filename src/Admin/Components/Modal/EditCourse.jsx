import PropType from "prop-types";
import { useState } from "react";

const EditCourse = ({ show, item, onSave }) => {
  const [instructor_name, setUpdateInstructorName] = useState(
    item?.instructorName
  );
  const [course_name, setUpdateCourseName] = useState(item?.courseName);
  const [course_description, setUpdateCourseDescription] = useState(
    item?.courseDescription
  );
  const [price, setUpdatePrice] = useState(
    item?.price == null ? "0" : item?.price
  );
  const [course_type_id, setUpdateCourseTypeId] = useState(item?.courseType);
  const [course_level_id, setUpdateCourseLevelId] = useState(item?.courseLevel);
  const [course_category_id, setUpdateCourseCategoryId] = useState(
    item?.courseCategory
  );

  const handleSave = (e) => {
    e.preventDefault();

    const formData = {
      id: item?.id,
      instructor_name,
      course_name,
      course_description,
      price,
      course_type_id,
      course_level_id,
      course_category_id,
    };

    onSave(formData);
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
          <form onSubmit={handleSave}>
            <h3 className="font-bold text-2xl w-full text-center mb-6 text-primary">
              Edit Kelas!
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Nama Instruktur
                </label>
                <input
                  type="text"
                  value={instructor_name}
                  placeholder={item?.instructorName}
                  onChange={(e) => setUpdateInstructorName(e.target.value)}
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Kategori
                </label>
                <select
                  value={course_category_id}
                  onChange={(e) => setUpdateCourseCategoryId(e.target.value)}
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
                >
                  <option value="">Pilih Kategori</option>
                  <option value="1">Backend Development</option>
                  <option value="2">Frontend Development</option>
                  <option value="3">UI/UX Design</option>
                  <option value="4">Data Science</option>
                  <option value="5">Quality Assurance</option>
                  <option value="6">Android Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900  p-2">
                  Nama Kelas
                </label>
                <input
                  type="text"
                  value={course_name}
                  onChange={(e) => setUpdateCourseName(e.target.value)}
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
                />
              </div>
              <div className="flex flex-row w-full gap-2">
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-semibold text-gray-900  p-2">
                    Tipe kelas
                  </label>
                  <select
                    value={course_type_id}
                    onChange={(e) => setUpdateCourseTypeId(e.target.value)}
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
                  >
                    <option value="">Pilih Tipe Kelas</option>
                    <option value="1">Premium</option>
                    <option value="2">Gratis</option>
                  </select>
                </div>
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-semibold text-gray-900  p-2">
                    Level Kelas
                  </label>
                  <select
                    value={course_level_id}
                    onChange={(e) => setUpdateCourseLevelId(e.target.value)}
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
                  >
                    <option value="">Pilih Level Kelas</option>
                    <option value="1">Pemula</option>
                    <option value="2">Menengah</option>
                    <option value="3">Lanjut</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Deskripsi
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Deskripsi"
                  value={course_description}
                  onChange={(event) =>
                    setUpdateCourseDescription(event.target.value)
                  }
                  required
                  className="block w-full p-7 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Harga
                </label>
                <input
                  type="number"
                  id="small-input"
                  placeholder="Harga kelas"
                  value={price}
                  onChange={(event) => setUpdatePrice(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  "
                />
              </div>
              <div className="flex justify-center flex-row w-full gap-2">
                <div className="w-full max-w-xs">
                  <button
                    type="submit"
                    onClick={handleSave}
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

EditCourse.propTypes = {
  show: PropType.func.isRequired,
  item: PropType.object.isRequired,
  onSave: PropType.func.isRequired,
};

export default EditCourse;
