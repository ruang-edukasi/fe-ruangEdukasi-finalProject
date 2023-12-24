import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import Header from "../../Components/Header/Header";
import SidebarAkun from "../../Components/SidebarAkun/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { changePassword } from "../../redux/action/authAction";

const UbahPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };

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

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-xl font-semibold text-center text-white rounded-t-lg bg-primary">
            Akun
          </div>

          {/* Isi Akun*/}
          <div className="flex py-4 text-center">
            <SidebarAkun />
            <div className="flex flex-col items-center w-[60%] gap-10">
              <div className="font-bold text-2xl">Ubah Password</div>
              <div className="flex flex-col gap-1 relative">
                <div className="text-left">Masukkan Password Lama</div>
                <input
                  type={showPassword1 ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="*******"
                />
                <img
                  alt="Icon Eye Password"
                  className="absolute w-8 text-black cursor-pointer inset-y-10 right-4"
                  onClick={handleShowPassword1}
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="text-left">Masukkan Password Baru</div>
                <input
                  type={showPassword2 ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="*******"
                />
                <img
                  alt="Icon Eye Password"
                  className="absolute w-8 text-black cursor-pointer inset-y-10 right-4"
                  onClick={handleShowPassword2}
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="text-left">Ulangi Password Baru</div>
                <input
                  type={showPassword3 ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="*******"
                />
                <img
                  alt="Icon Eye Password"
                  className="absolute w-8 text-black cursor-pointer inset-y-10 right-4"
                  onClick={handleShowPassword3}
                />
              </div>
              <button
                onClick={() =>
                  dispatch(
                    changePassword(
                      oldPassword,
                      newPassword,
                      confirmPassword,
                      navigate
                    )
                  )
                }
                className="px-4 py-3 font-semibold text-white w-[22rem] bg-primary rounded-2xl hover:bg-primary-hover"
              >
                Ubah Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UbahPassword;
