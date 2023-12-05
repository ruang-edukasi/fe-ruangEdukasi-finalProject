import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profile, logout } from "../redux/action/authAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPencil,
  faGear,
  faCartShopping,
  faArrowRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header/Header";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  const onlogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  return (
    <>
      <Header />
      {user && (
        <section>
          <div className="container bg-blue-100 mx-auto px-24 content w-full flex flex-col py-6 drop-shadow-lg">
            <Link to={"/"}>
              <div className="text-base font-semibold leading-tight tracking-tight text-primary md:text-2xl">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-6 inline" />
                Kembali ke Beranda
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="card-normal bg-base-100 shadow-xl border border-primary rounded-xl">
              <div className="container mx-auto px-24 content w-full flex flex-col py-4 drop-shadow-lg bg-primary rounded-t-lg">
                <h1 className="text-center text-white font-bold text-xl">
                  Akun
                </h1>
              </div>
              <div className="flex grid-rows-2 gap-24 p-6">
                <div className="flex flex-col w-80">
                  <button>
                    <div className="text-start font-semibold hover:text-primary">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="text-primary mr-2"
                      />
                      Profil Saya
                      <hr className="my-4" />
                    </div>
                  </button>
                  <button>
                    <div className="text-start font-semibold hover:text-primary">
                      <FontAwesomeIcon
                        icon={faGear}
                        className="text-primary mr-2"
                      />
                      Ubah Password
                      <hr className="my-4" />
                    </div>
                  </button>
                  <button>
                    <div className="text-start font-semibold hover:text-primary">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-primary mr-2"
                      />
                      Riwayat Pembayaran
                      <hr className="my-4" />
                    </div>
                  </button>
                  <button onClick={onlogout}>
                    <div className="text-start font-semibold hover:text-primary">
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        className="text-primary mr-2"
                      />
                      Keluar
                      <hr className="my-4" />
                    </div>
                  </button>
                </div>
                <div className="flex flex-col w-full">
                  <div className="avatar placeholder justify-center">
                    <div className="bg-neutral text-neutral-content rounded-full w-24">
                      <span className="text-3xl">
                        <FontAwesomeIcon icon={faUser} className="text-white" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p>Nama</p>
                    <input
                      type="text"
                      placeholder={user?.fullName}
                      className="input input-bordered w-full max-w-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      type="text"
                      placeholder={user?.email}
                      className="input input-bordered w-full max-w-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <p>Nomor Telepon</p>
                    <input
                      type="text"
                      placeholder={user?.phoneNumber}
                      className="input input-bordered w-full max-w-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <p>Negara</p>
                    <input
                      type="text"
                      placeholder={user?.country}
                      className="input input-bordered w-full max-w-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <p>Kota</p>
                    <input
                      type="text"
                      placeholder={user?.city}
                      className="input input-bordered w-full max-w-xs"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
