import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBell,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Notification = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen">
        <div className="flex items-center px-6 md:px-24 py-6">
          <Link
            to={"/"}
            className="flex items-center text-primary text-base font-semibold leading-tight tracking-tight md:text-2xl"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 inline" />
            Kembali ke Beranda
          </Link>
        </div>
        <div className="flex justify-center w-full px-6 md:px-24">
          <div className="card-normal bg-base-100 shadow-xl border border-primary rounded-xl">
            <div className="py-4 bg-primary rounded-t-lg">
              <h1 className="text-center text-white font-bold text-xl">
                Notifikasi
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-xl text-primary"
                />
              </div>
              <div>
                <p className="font-semibold text-primary">Promosi</p>
                <p>Dapatkan Potongan 50% selama Bulan Maret!</p>
                <p>Syarat dan Ketentuan berlaku!</p>
              </div>
              <div className="text-right">
                <p>
                  2 Maret, 12:00{" "}
                  <FontAwesomeIcon icon={faCircle} className="text-success" />
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-xl text-primary"
                />
              </div>
              <div>
                <p className="font-semibold text-primary">Notifikasi</p>
                <p>Password berhasil diubah</p>
              </div>
              <div className="text-right">
                <p>
                  2 Maret, 12:00{" "}
                  <FontAwesomeIcon icon={faCircle} className="text-alert" />
                </p>
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-xl text-primary"
                />
              </div>
              <div>
                <p className="font-semibold text-primary">Promosi</p>
                <p>Dapatkan Potongan 50% selama Bulan Maret!</p>
                <p>Syarat dan Ketentuan berlaku!</p>
              </div>
              <div className="text-right">
                <p>
                  2 Maret, 12:00{" "}
                  <FontAwesomeIcon icon={faCircle} className="text-success" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Notification;
