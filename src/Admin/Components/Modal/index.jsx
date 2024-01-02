import PropType from "prop-types";
import { useState } from "react";

const Modal = ({ show, onSubmit }) => {
  const [instructor_name, setInstructorName] = useState("");
  const [course_name, setCourseName] = useState("");
  const [course_description, setCourseDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course_type_id, setCourseTypeId] = useState("");
  const [course_category_id, setCourseCategoryId] = useState("");
  const [course_level_id, setCourseLevelId] = useState("");
  const [telegram_link, setTelegramLink] = useState("");
  const [whatsapp_link, setWhatsappLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      instructor_name,
      course_name,
      course_description,
      price: parseInt(price),
      course_type_id: parseInt(course_type_id),
      course_category_id: parseInt(course_category_id),
      course_level_id: parseInt(course_level_id),
      telegram_link,
      whatsapp_link,
    };

    onSubmit(formData);
  };

  return (
    <>
      <dialog id="my_modal_3" className={`modal ${show ? "" : "hidden"}`}>
        <div className="modal-box w-11/12 max-w-3xl px-24">
          <form method="dialog">
            <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-primary">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
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
                  value={instructor_name}
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
                  value={course_name}
                  onChange={(event) => setCourseName(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500  "
                />
              </div>
              <div className="flex flex-row w-full gap-2">
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-semibold text-gray-900  p-2">
                    Kategori
                  </label>
                  <select
                    value={course_category_id}
                    onChange={(e) => setCourseCategoryId(e.target.value)}
                    className="select w-full select-bordered border bg-gray-50 focus:border-2 focus:border-blue-500  focus:outline-none"
                    required
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>
                    <option value="1">Backend Development</option>
                    <option value="2">Frontend Development</option>
                    <option value="3">UI/UX Design</option>
                    <option value="4">Data Science</option>
                    <option value="5">Quality Assurance</option>
                    <option value="6">Android Development</option>
                  </select>
                </div>
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-semibold text-gray-900  p-2">
                    Tipe kelas
                  </label>
                  <select
                    value={course_type_id}
                    onChange={(e) => setCourseTypeId(e.target.value)}
                    className="select select-bordered bg-gray-50 focus:border-2 focus:border-blue-500 w-full focus:outline-none"
                    required
                  >
                    <option value="" disabled>
                      Pilih Tipe Kelas
                    </option>
                    <option value="1">Premium</option>
                    <option value="2">Gratis</option>
                  </select>
                </div>
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-semibold text-gray-900  p-2">
                    Level
                  </label>
                  <select
                    value={course_level_id}
                    onChange={(e) => setCourseLevelId(e.target.value)}
                    className="select select-bordered bg-gray-50 focus:border-2 focus:border-blue-500 w-full focus:outline-none"
                    required
                  >
                    <option value="" disabled>
                      Pilih Level Kelas
                    </option>
                    <option value="1">Pemula</option>
                    <option value="2">Menengah</option>
                    <option value="3">Lanjut</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900">
                  Deskripsi
                </label>
                <textarea
                  id="small-input"
                  placeholder="Deskripsi target kursus"
                  value={course_description}
                  onChange={(event) => setCourseDescription(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500 resize-none"
                  rows={4} // Mengatur jumlah baris pada textarea
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Link Group Telegram
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Link group Telegram"
                  value={telegram_link}
                  onChange={(event) => setTelegramLink(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Link Group WhatsApp
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Link group WhatsApp"
                  value={whatsapp_link}
                  onChange={(event) => setWhatsappLink(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
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
                  onChange={(event) => setPrice(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  "
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
  onSubmit: PropType.func.isRequired,
};

export default Modal;
