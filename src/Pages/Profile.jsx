import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profile, logout, updateProfile } from "../redux/action/authAction";
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

  const [full_name, setFullName] = useState(user?.fullName || "");
  const [phone_number, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [photo, setPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const inputPhotoRef = useRef(null);

  useEffect(() => {
    if (user) {
      setFullName(user.fullName || "");
      setPhoneNumber(user.phoneNumber || "");
      setCity(user.city || "");
      setCountry(user.country || "");
      setPhoto(null);
    }
  }, [user]);

 useEffect(() => {
   if (photo) {
     const reader = new FileReader();
     reader.onloadend = () => {
       setPreviewPhoto(reader.result);
     };
     reader.readAsDataURL(photo);
   } else {
     setPreviewPhoto(user?.imageUrl || null); // Gunakan URL foto yang diperbarui dari Redux
   }
 }, [photo, user]);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const onFrameClick = () => {
    inputPhotoRef.current.click();
  };

 const onUpdateProfile = () => {
   const formData = new FormData();
   formData.append("full_name", full_name);
   formData.append("phone_number", phone_number);
   formData.append("city", city);
   formData.append("country", country);
   formData.append("photo", photo);

   dispatch(
     updateProfile(full_name, phone_number, city, country, photo, navigate)
   );
 };

  const onLogout = () => {
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
                  <button onClick={onLogout}>
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
                  <div className="input-wrapper relative flex justify-center items-center">
                    <input
                      type="file"
                      accept="image/*"
                      ref={inputPhotoRef}
                      style={{ display: "none" }}
                      onChange={handlePhotoChange}
                    />

                    <div className="group">
                      <div
                        className="avatar placeholder flex justify-center items-center cursor-pointer group-hover:border-primary mx-auto"
                        onClick={onFrameClick}
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "50%",
                          border: "1px solid #3182CE",
                          backgroundImage: previewPhoto
                            ? `url(${previewPhoto})`
                            : "linear-gradient(45deg, #fafafa, #f0f0f0)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {!previewPhoto && (
                          <span className="text-3xl text-white">
                            <FontAwesomeIcon icon={faUser} />
                          </span>
                        )}
                      </div>
                      <div className="  text-primary text-sm mb-3">
                        Edit Photo Profile
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Nama</p>
                    <input
                      type="text"
                      placeholder={user?.fullName}
                      value={full_name}
                      onChange={(e) => setFullName(e.target.value)}
                      className="input input-bordered w-full max-w-xs mb-2 rounded-xl"
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      type="text"
                      placeholder={user?.email}
                      className="input input-bordered w-full max-w-xs mb-2 rounded-xl"
                      disabled
                    />
                  </div>
                  <div>
                    <p>Nomor Telepon</p>
                    <input
                      type="text"
                      placeholder={user?.phoneNumber}
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="input input-bordered w-full max-w-xs mb-2 rounded-xl"
                    />
                  </div>
                  <div>
                    <p>Negara</p>
                    <input
                      type="text"
                      placeholder={user?.country}
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="input input-bordered w-full max-w-xs mb-2 rounded-xl"
                    />
                  </div>
                  <div>
                    <p>Kota</p>
                    <input
                      type="text"
                      placeholder={user?.city}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="input input-bordered w-full max-w-xs rounded-xl"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={onUpdateProfile}
                    className="w-full max-w-xs mt-4 text-white bg-primary hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center rounded-full"
                  >
                    Simpan Profile Saya
                  </button>
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
