import PropType from "prop-types";

const TableBody = ({ item, index }) => {
  return (
    <>
      <tbody>
        <tr className="font-bold">
          <td>{index}</td>
          <td>{item?.instructorName}</td>
          <td>{item?.courseCategory}</td>
          <td>{item?.courseName}</td>
          <td
            className={`${
              item?.courseType === "Gratis" ? "text-succes" : "text-primary"
            }`}
          >
            {item?.courseType}
          </td>
          <td>{item?.courseLevel}</td>
          <td>Rp.{item?.price == null ? "0" : item?.price}</td>
          <td>
            <button className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300">
              Ubah
            </button>
          </td>
          <td>
            <button className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-red-800 transition duration-300">
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
