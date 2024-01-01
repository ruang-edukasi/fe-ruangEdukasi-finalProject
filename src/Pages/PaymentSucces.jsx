import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Components/Header/Header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import succesPayment from "../assets/payment-succes.svg";

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
        <div className="container px-24 content w-full flex flex-col py-10 drop-shadow-lg border">
          <div className="mx-auto bg-succes w-4/6 text-center font-semibold py-2 text-white rounded-lg">
            Terimakasih atas pembayaran transaksi
          </div>
        </div>
        <main className="flex flex-col justify-center items-center w-full mt-10 space-y-5">
          <h1 className="font-bold text-3xl text-primary tracking-wide">
            Selamat !
          </h1>
          <img src={succesPayment} alt="succes payyment" />
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
            <button className="text-center text-blue-500 mt-3 font-bold ">
              Kembali ke Beranda
            </button>
          </form>
        </main>
      </section>
    </>
  );
}

export default PaymentSucces;
