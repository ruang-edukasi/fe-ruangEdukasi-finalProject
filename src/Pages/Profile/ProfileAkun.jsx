import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profile, updateProfile } from "../../redux/action/authAction";

import Header from "../../Components/Header/Header";
import SidebarAkun from "../../Components/SidebarAkun/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileAkun = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  const [full_name, setFullName] = useState(user?.fullName || "");
  const [phone_number, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [photo, setPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const inputPhotoRef = useRef(null);
  const [loading, setLoading] = useState(false);

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

  const onUpdateProfile = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("phone_number", phone_number);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("photo", photo);

    try {
      await dispatch(
        updateProfile(full_name, phone_number, city, country, photo, navigate)
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Tangani kesalahan apapun, contohnya tampilkan pesan kesalahan
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    if (token) {
      dispatch(profile(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

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
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-xl font-semibold text-center text-white rounded-t-lg bg-primary">
            Akun
          </div>

          {/* Isi Akun */}
          <div className="flex py-4 text-center">
            <SidebarAkun />
            <div className="flex flex-col items-center w-[60%] gap-4">
              <div className="relative group">
                <input
                  type="file"
                  accept="image/*"
                  ref={inputPhotoRef}
                  style={{ display: "none" }}
                  onChange={handlePhotoChange}
                />
                <div
                  className="w-20 h-20 border-[3px] rounded-full border-primary relative overflow-hidden cursor-pointer group-hover:border-primary mx-auto"
                  onClick={onFrameClick}
                >
                  {previewPhoto ? (
                    <img
                      src={previewPhoto}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex justify-center items-center bg-gradient-to-tr from-gray-300 to-gray-200 text-primary text-2xl font-bold">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  )}
                </div>
                <div className="  text-primary text-sm ">
                  Edit Photo Profile
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nama</div>
                <input
                  type="text"
                  value={full_name}
                  placeholder={user?.fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Email</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder={user?.email}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nomor Telepon</div>
                <input
                  type="text"
                  placeholder={user?.phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phone_number}
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Negara</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder={user?.country}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Kota</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder={user?.city}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <button
                className="px-4 py-3 font-semibold text-white w-[22rem] bg-primary rounded-2xl hover:bg-primary-hover relative"
                type="submit"
                onClick={onUpdateProfile}
                disabled={loading} // Nonaktifkan tombol saat loading
              >
                {loading && (
                  <span className="loading loading-spinner loading-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                )}
                <span className={loading ? "invisible" : "visible"}>
                  Simpan Profile Saya
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAkun;
