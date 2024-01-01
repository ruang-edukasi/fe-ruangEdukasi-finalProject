import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Components/Header/Header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import waitingPayment from "../assets/waiting-payment.svg";

function PaymentSucces() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const isLoggedIn = userToken !== null;

    if (!token && !isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan login terlebih dahulu!",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login");
      });
    }
  }, [token, navigate]);
  return (
    <>
      <Header />
      <section className="mb-10">
        <div className="container px-24 content w-full flex flex-col py-10 drop-shadow-lg border bg-blue-100 mx-auto">
          <div className="mx-auto bg-warning w-4/6 text-center font-semibold py-4 text-white rounded-lg">
            Menunggu Pembayaran Selesai
          </div>
        </div>
        <main className="flex flex-col justify-center items-center w-full mt-6 space-y-2">
          <h1 className="font-bold text-3xl text-primary tracking-wide">
            Selamat !
          </h1>
          <img src={waitingPayment} alt="" />
          <div className="text-center">
            <h3 className="font-bold text-lg tracking-wide">
              Transaksi pembayaran kelas premium berhasil!
            </h3>
            <p className="text-lg ">E-receipt telah dikirimkan ke email.</p>
          </div>
          <form className="flex flex-col">
            <button className="text-center bg-primary text-white py-2.5  rounded-3xl px-16 font-bold">
              Mulai belajar
            </button>
            <Link to={"/"}>
              <div className="text-center text-blue-500 mt-3 font-bold ">
                Kembali ke Beranda
              </div>
            </Link>
          </form>
        </main>
      </section>
    </>
  );
}

export default PaymentSucces;
