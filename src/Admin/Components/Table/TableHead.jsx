import { useSelector } from "react-redux";
import TableBody from "./KelolaKelas";

function TableHead() {
  const { course } = useSelector((state) => state.courseAdmin);
  return (
    <>
      <div className="flex items-center justify-center mb-4 rounded-xl shadow-md overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-blue-100 text-base text-slate-800">
              <th>No</th>
              <th>Kategori</th>
              <th>Nama Kelas</th>
              <th>Tipe Kelas</th>
              <th>Level</th>
              <th>Harga Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          {course.map((item, index) => (
            <TableBody key={item?.id} item={item} index={index + 1} />
          ))}
        </table>
      </div>
    </>
  );
}

export default TableHead;
