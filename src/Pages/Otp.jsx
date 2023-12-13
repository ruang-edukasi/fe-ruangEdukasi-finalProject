import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verificationOTP,renewOTP } from "../redux/action/authAction"; 


export const Otp = () => {
  const inputs = Array.from({ length: 6 }, () => useRef(null));
  const [seconds, setSeconds] = useState(60);
  const [otp, setOtp] = useState("");
  const { verifId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const { verifEmail } = useSelector((state) => state.auth);
  

  const handleChange = (index, value) => {
    if (value) {
      if (index < inputs.length - 1) {
        inputs[index + 1].current.focus();
      }
    } else {
      if (index > 0) {
        inputs[index - 1].current.focus();
      }
    }

    // Memperbarui nilai OTP pada state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join(""));
  };

    const handleResendOTP = async () => {
      try {
        await dispatch(renewOTP(verifId, navigate));
      } catch (error) {
        console.error(error);
      }
    };

    const handleSubmit = () => {
      dispatch(verificationOTP(otp, verifId, navigate)); 
    };


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center px-4 mx-auto md:h-screen">
        <div className="w-full rounded-lg md:mt-0 mx-auto md:max-w-md xl:p-0 p-6 ">
          <div className="flex flex-col w-full  mx-auto">
            <h1 className="flex flex-col items-start text-xl font-bold leading-tight tracking-tight text-indigo-600 md:text-2xl">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mb-10 text-gray-700 text-3xl cursor-pointer block sm:hidden"
                onClick={goBack}
              />
              Masukkan OTP
            </h1>

            <div className="flex flex-col gap-2">
              <span className="pb-5 pt-5 text-lg text-center">
                Ketik 6 digit kode yang dikirim ke{" "}
                <span className="font-bold">{verifEmail}</span>
              </span>

              <div className="flex items-center justify-center gap-4">
                {inputs.map((input, index) => (
                  <div
                    key={index}
                    className="w-[42px] h-[42px] md:w-[50px] md:h-[50px] border-2 rounded-xl"
                  >
                    <input
                      ref={input}
                      placeholder=""
                      className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                      type="text"
                      maxLength={1}
                      onChange={(e) => handleChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              {seconds === 0 ? (
                <span className="py-4 pb-5 text-lg text-red-500 text-center hover:opacity-70 items-center justify-center flex gap-1">
                  <button onClick={handleResendOTP}>Kirim ulang</button>
                </span>
              ) : (
                <span className="py-4 pb-5 text-lg text-center items-center justify-center flex gap-1">
                  Kirim ulang OTP dalam{" "}
                  <div className="text-indigo-600">{seconds}</div> detik
                </span>
              )}
            </div>

            <div className="flex flex-col py-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full text-white bg-primary hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center rounded-xl"
              >
                Simpan
              </button>
            </div>

            <span className="pb-5 pt-5 text-lg text-center">
              <span className="font-bold text-indigo-600 md:hidden">
                Minta kode baru via Email
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-5/12 bg-primary lg:flex justify-center items-center hidden md:flex">
        <img src="/logo.svg" alt="gambar logo" className="h-36" />
      </div>
      <style></style>
    </section>
  );
};
