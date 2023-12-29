import PropType from "prop-types";

const TableBody = ({ item, index }) => {
  const formattedCreatedAt = new Date(item?.createdAt).toLocaleString("ID-en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Jakarta",
    timeZoneName: "short",
  });

  const formatStatus = (status) => {
    if (status === "Paid") {
      return "SUDAH BAYAR";
    } else if (status === "Waiting payment") {
      return "BELUM BAYAR";
    } else {
      return status; // Jika status tidak berubah, kembalikan nilai status asli
    }
  };

  return (
    <>
      <tbody>
        <tr className="font-bold">
          <td>{index}</td>
          <td>{item?.orderTrx}</td>
          <td>{item?.courseCategory == null ? "-" : item?.courseCategory}</td>
          <td>{item?.courseName == null ? "-" : item?.courseName}</td>
          <td
            className={`${
              item?.status === "Paid" ? "text-succes" : "text-alert"
            }`}
          >
            {formatStatus(item?.status)}
          </td>
          <td>{item?.accountNumber}</td>
          <td>{formattedCreatedAt}</td>
          <td>
            <button className="bg-primary text-white font-semibold rounded-3xl w-28 h-8 hover:bg-indigo-800 transition duration-300">
              Update Status
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
