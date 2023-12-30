import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import Header from "../../Components/Header/Header";
import SidebarAkun from "../../Components/SidebarAkun/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { changePassword, logout } from "../../redux/action/authAction";
import Swal from "sweetalert2";

const UbahPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const [isMenuOpen, setMenuOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };

   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 768);
     };

     window.addEventListener("resize", handleResize);

     // Cleanup event listener on component unmount
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);

      // Disable scrolling when the off-canvas menu is open
      if (!isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    useEffect(() => {
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

     const onLogout = () => {
       Swal.fire({
         title: "Logout Confirmation",
         text: "Are you sure you want to log out?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#6148FF",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, log me out",
       }).then((result) => {
         if (result.isConfirmed) {
           // Use dispatch instead of useDispatch here
           dispatch(logout());

           Swal.fire({
             title: "Logged Out",
             text: "You have been successfully logged out.",
             icon: "success",
             timer: 2000,
             showConfirmButton: false,
           });

           // Navigasi ke halaman utama setelah 2 detik
           setTimeout(() => {
             navigate("/");
           }, 2000);
         }
       });
     };


  return (
    <>
      <Header />
      <div className="bg-blue-100 md:h-[10rem]  md:px-80">
        <div className="flex items-center py-8 lg:px-0 px-2 gap-2 text-lg font-bold text-primary lg:relative">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={30}
            className="cursor-pointer lg:absolute lg:-inset-x-16"
            onClick={() => {
              navigate("/");
            }}
          />
          Kembali Ke Beranda
          <>
            {isMobile && (
              <div className="ml-auto mr-10 cursor-pointer">
                <FontAwesomeIcon icon={faBars} size={30} onClick={toggleMenu} />
              </div>
            )}
            {isMenuOpen && (
              <div className="absolute top-24 left-0 h-full bg-primary opacity-80 w-60 p-4  z-30">
                {/* Off-canvas menu content goes here */}
                <div onClick={toggleMenu}></div>
                {/* Add your menu items and styling here */}
                <div className="text-white text-xl font-semibold mb-8">
                  Menu
                </div>

                <div className="space-y-8">
                  <div
                    className="cursor-pointer text-white font-normal mb-2"
                    onClick={() => {
                      navigate("/profile-akun");
                    }}
                  >
                    Profil Saya
                  </div>
                  <div
                    className="cursor-pointer text-white font-normal mb-2"
                    onClick={() => {
                      navigate("/ubah-password");
                    }}
                  >
                    Ubah Password
                  </div>
                  <div
                    className="cursor-pointer text-white font-normal mb-2"
                    onClick={() => toggleMenu("purchaseHistory")}
                  >
                    Riwayat Pembelian
                  </div>
                  <div
                    className="cursor-pointer text-white font-normal mb-2"
                    onClick={onLogout}
                  >
                    Keluar
                  </div>
                </div>
              </div>
            )}
          </>
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl mx-2">
          <div className="py-4 text-xl font-semibold text-center text-white rounded-t-lg bg-primary">
            Akun
          </div>

          {/* Isi Akun*/}
          <div
            className={`flex py-4 text-center ${isMobile ? "bg-white" : ""}`}
          >
            {!isMobile && <SidebarAkun />}
            <div className="flex flex-col items-center w-[60%] gap-10 mx-auto">
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
