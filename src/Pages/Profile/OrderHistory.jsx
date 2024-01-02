import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profile, logout } from "../../redux/action/authAction";
import Swal from "sweetalert2";
import Header from "../../Components/Header/Header";
import SidebarAkun from "../../Components/SidebarAkun/SidebarAccount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import HistoryOrder from "../../Components/Card/HistoryOrder";
import { getMyCourse } from "../../redux/action/courseAction";
function OrderHistory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { myCourse } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  //handle mobile
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

  useEffect(() => {
    if (token) {
      dispatch(getMyCourse(errors, setErrors));
    }
  }, [dispatch, errors, token]);

  const onLogout = () => {
    Swal.fire({
      title: "Keluar",
      text: "Apakah Anda yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6148FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, saya mau keluar",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        // Use dispatch instead of useDispatch here
        dispatch(logout());

        Swal.fire({
          title: "Keluar",
          text: "Kamu berhasil keluar!",
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
      <div className=" bg-blue-100 h-[10rem] lg:px-80">
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
          {window.innerWidth < 1024 && (
            <>
              <div className="ml-auto mr-10 cursor-pointer">
                <FontAwesomeIcon icon={faBars} size={30} onClick={toggleMenu} />
              </div>
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
          )}
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl mx-2">
          <div className="py-4 text-xl font-semibold text-center text-white rounded-t-lg bg-primary">
            Akun
          </div>

          {/* Isi Akun */}
          <div className="flex py-4 text-center max-h-screen ">
            {window.innerWidth < 1024 ? null : <SidebarAkun />}
            <div className="w-full flex flex-col gap-3 justify-center items-center overflow-y-scroll ">
              {myCourse.map((course) => (
                <HistoryOrder
                  key={course?.id}
                  courses={course}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
