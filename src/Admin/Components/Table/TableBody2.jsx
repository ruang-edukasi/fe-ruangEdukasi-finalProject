import PropType from "prop-types";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { getPaymentVerification } from "../../../redux/action/courseAdminAction";

const TableBody = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleApprove = (orderTrx, status) => {
    if (status === "Paid") {
      dispatch(getPaymentVerification(orderTrx));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Kelas tidak dapat disetujui. Status pembayaran 'BELUM BAYAR'",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    }
  };

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
      return status;
    }
  };

  return (
    <>
      <tbody>
        <tr className="font-bold">
          <td className="sm:w-1/12">{index}</td>
          <td className="p-2 sm:w-2/12">{item?.orderTrx}</td>
          <td className="p-2 sm:w-2/12">
            {item?.courseCategory == null ? "-" : item?.courseCategory}
          </td>
          <td className="p-2 sm:w-2/12">
            {item?.courseName == null ? "-" : item?.courseName}
          </td>
          <td
            className={`${
              item?.status === "Paid"
                ? "sm:w-1/12 text-succes"
                : "sm:w-1/12 text-alert"
            }`}
          >
            {formatStatus(item?.status)}
          </td>
          <td className="p-2 sm:w-1/12">{item?.accountNumber}</td>
          <td className="p-2 sm:w-2/12">{formattedCreatedAt}</td>
          <td className="p-2 sm:w-1/12">
            <button
              onClick={() => handleApprove(item?.orderTrx, item?.status)}
              className={`${
                item?.status === "Waiting payment"
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              } font-semibold rounded-3xl w-28 h-8 hover:bg-indigo-800 transition duration-300`}
              disabled={item?.status !== "Waiting payment"}
            >
              {item?.status === "Waiting payment" ? "Tidak Setuju" : "Setuju"}
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
