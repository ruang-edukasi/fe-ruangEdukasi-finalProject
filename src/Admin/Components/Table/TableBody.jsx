import PropType from "prop-types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteCourse,
  editCourse,
} from "../../../redux/action/courseAdminAction";

const TableBody = ({ item, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
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

  const handleEditClick = () => {
    setEditing(true);
    setUpdateInstructorName(item?.instructorName);
    setUpdateCourseName(item?.courseName);
    setUpdateCourseDescription(item?.courseDescription);
    setUpdatePrice(item?.price == null ? "0" : item?.price);
    setUpdateCourseTypeId(item?.courseType);
    setUpdateCourseLevelId(item?.courseLevel);
    setUpdateCourseCategoryId(item?.courseCategory);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = async (e) => {
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
    dispatch(editCourse(item?.id, formData, navigate)).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
    // console.log(formData);
    setEditing(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus item?",
      text: "Anda tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourse(id)).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
      }
    });
  };
  return (
    <>
      <tbody>
        <tr className="font-bold">
          <td>{index}</td>
          <td>
            {editing ? (
              <input
                type="text"
                value={instructor_name}
                onChange={(e) => setUpdateInstructorName(e.target.value)}
                className="border bg-gray-50 w-28 focus:border-2 focus:border-primary focus:outline-none rounded-md p-1"
              />
            ) : (
              item?.instructorName
            )}
          </td>
          <td>
            {editing ? (
              <select
                value={course_category_id}
                onChange={(e) => setUpdateCourseCategoryId(e.target.value)}
                className="select select-bordered border bg-gray-50 w-28 focus:border-2 focus:border-primary focus:outline-none"
              >
                <option value="">Pilih Kategori</option>
                <option value="1">Backend Development</option>
                <option value="2">Frontend Development</option>
                <option value="3">UI/UX Design</option>
                <option value="4">Data Science</option>
                <option value="5">Quality Assurance</option>
                <option value="6">Android Development</option>
              </select>
            ) : (
              item?.courseCategory
            )}
          </td>
          <td>
            {editing ? (
              <input
                type="text"
                value={course_name}
                onChange={(e) => setUpdateCourseName(e.target.value)}
                className="border bg-gray-50 w-28 focus:border-2 focus:border-primary focus:outline-none rounded-md p-1"
              />
            ) : (
              item?.courseName
            )}
          </td>
          <td
            className={`${
              item?.courseType === "Gratis" ? "text-succes" : "text-primary"
            }`}
          >
            {editing ? (
              <select
                value={course_type_id}
                onChange={(e) => setUpdateCourseTypeId(e.target.value)}
                className="select select-bordered border bg-gray-50 w-28 focus:border-2 focus:border-primary focus:outline-none"
              >
                <option value="">Pilih Tipe Kelas</option>
                <option value="1">Premium</option>
                <option value="2">Gratis</option>
              </select>
            ) : (
              item?.courseType
            )}
          </td>
          <td>
            {editing ? (
              <select
                value={course_level_id}
                onChange={(e) => setUpdateCourseLevelId(e.target.value)}
                className="select select-bordered border bg-gray-50 w-28 focus:border-2 focus:border-primary focus:outline-none"
              >
                <option value="">Pilih Level Kelas</option>
                <option value="1">Pemula</option>
                <option value="2">Menengah</option>
                <option value="3">Lanjut</option>
              </select>
            ) : (
              item?.courseLevel
            )}
          </td>
          <td>
            {editing ? (
              <input
                type="text"
                value={price}
                onChange={(e) => setUpdatePrice(e.target.value)}
                className="border bg-gray-50 w-28 focus:border-2 focus:border-primary focus:outline-none rounded-md p-1"
              />
            ) : (
              `Rp.${item?.price == null ? "0" : item?.price}`
            )}
          </td>
          <td>
            {editing ? (
              <div className="flex justify-between gap-2">
                <button
                  onClick={handleSaveClick}
                  className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300"
                >
                  Simpan
                </button>
                <button
                  onClick={handleCancelClick}
                  className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300"
                >
                  Batal
                </button>
              </div>
            ) : (
              <button
                onClick={handleEditClick}
                className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300"
              >
                Ubah
              </button>
            )}
          </td>
          <td>
            <button
              onClick={() => handleDelete(item?.id)}
              className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-red-800 transition duration-300"
            >
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

TableBody.propTypes = {
  item: PropType.object.isRequired,
  index: PropType.number.isRequired,
};

export default TableBody;
