import { useNavigate } from "react-router-dom";
import { logout, profile } from "../../redux/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faGear,
  faCartShopping,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const SidebarAkun = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

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

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null));
    }
  }, [dispatch, navigate, token]);

  return (
    <div className="flex flex-col px-4 w-[40%]">
      <div
        className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
        onClick={() => {
          navigate("/profile-akun");
        }}
      >
        <div className="text-primary">
          <FontAwesomeIcon size={25} icon={faPencil} />
        </div>
        <div className="font-semibold text-md">Profil Saya</div>
      </div>
      <div
        className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
        onClick={() => {
          navigate("/ubah-password");
        }}
      >
        <div className="text-primary">
          <FontAwesomeIcon size={25} icon={faGear} />
        </div>
        <div className="font-semibold text-md">Ubah Password</div>
      </div>
      <div
        className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
        onClick={() => {
          navigate("#");
        }}
      >
        <div className="text-primary">
          <FontAwesomeIcon size={25} icon={faCartShopping} />
        </div>
        <div className="font-semibold text-md">Riwayat Pembayaran</div>
      </div>
      <div
        className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
        onClick={onLogout} // Call onLogout directly here
      >
        <div className="text-primary">
          <FontAwesomeIcon size={25} icon={faArrowRightToBracket} />
        </div>
        <div className="font-semibold text-md">Keluar</div>
      </div>
      <div className="py-6 text-gray-400">Version 1.1.0</div>
    </div>
  );
};

export default SidebarAkun;
