import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBell,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/Header";

const Notification = () => {
  return (
    <>
      <Header />
      <div className="bg-blue-100 h-[10rem] lg:px-80">
        <div className="flex items-center py-8 lg:px-0 px-2 gap-2 text-lg font-bold text-primary lg:relative">
          <Link
            to={"/"}
            className="cursor-pointer lg:absolute lg:-inset-x-16 hover:opacity-80"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 inline" />
          </Link>
          Kembali ke Beranda
        </div>
        <div className="card-normal bg-base-100 shadow-xl border border-primary rounded-xl mx-2">
          <div className="py-4 bg-primary rounded-t-lg">
            <h1 className="text-center text-white font-bold text-xl">
              Notifikasi
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={faBell} className="text-xl text-primary" />
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
              <FontAwesomeIcon icon={faBell} className="text-xl text-primary" />
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
              <FontAwesomeIcon icon={faBell} className="text-xl text-primary" />
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
    </>
  );
};

export default Notification;
