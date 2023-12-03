import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/action/authAction";

const Register = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const onRegis = async (event) => {
    // Prevent default is to prevent the default behavior
    event.preventDefault();

    dispatch(register(email, fullName, password, phoneNumber, navigate));
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(e.target.value);
    setIsEmailValid(isValid);
  };

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    const isValid = phoneNumber.length >= 12;
    setIsPhoneValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const isValid = password.length >= 8;
    setIsPasswordValid(isValid);
    setIsPasswordTouched(true);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      // Redirect to the OTP page
      // Adjust the redirection based on your routing setup
      //  window.location.href = "/otp";
    }, 2000);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="flex">
      <div className="flex flex-col justify-center mx-auto md:h-screen lg:py-0 w-full md:w-1/2">
        <div className="w-full  rounded-lg md:mt-0 mx-auto sm:max-w-md xl:p-0 p-6 ">
          <div className=" space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mr-2 mb-10 text-gray-700 block sm:hidden"
                onClick={goBack}
              />
              Daftar
            </h1>

            <form
              className="space-y-4 md:space-y-4"
              onSubmit={(event) => {
                handleRegistration(event);
                onRegis(event);
              }}
            >
              <div>
                <label htmlFor="name" className="block mb-1 text-sm">
                  Nama
                </label>
                <input
                  className=" border border-gray-300 text-gray-900 sm:text-sm  w-full p-2.5 rounded-xl"
                  type="text"
                  placeholder="Nama Lengkap"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm">
                  Email
                </label>
                <div className="relative">
                  <input
                    className={`border ${
                      isEmailValid ? "border-green-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm w-full p-2.5 rounded-xl`}
                    type="email"
                    placeholder="Contoh: johndee@gmail.com"
                    onChange={(event) => {
                      handleEmailChange(event);
                      setEmail(event.target.value);
                    }}
                    value={email}
                    required
                  />
                  {isEmailValid && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div className="rounded-full bg-green-500 p-0.5">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="telephone" className="block mb-1 text-sm">
                  Nomor Telepon
                </label>
                <div className="relative">
                  <input
                    className={`border ${
                      isPhoneValid ? "border-green-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm w-full p-2.5 rounded-xl`}
                    type="tel"
                    placeholder="085"
                    style={{ borderRadius: "15px" }}
                    onChange={(event) => {
                      handlePhoneChange(event);
                      setPhoneNumber(event.target.value);
                    }}
                    value={phoneNumber}
                    required
                  />
                  {isPhoneValid && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div className="rounded-full bg-green-500 p-0.5">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 text-sm">
                  Buat Password
                </label>
                <div className="relative">
                  <input
                    className={`border ${
                      isPasswordValid
                        ? isPasswordTouched
                          ? "border-green-500"
                          : "border-gray-300"
                        : "border-red-500"
                    } text-gray-900 sm:text-sm w-full p-2.5 rounded-xl`}
                    type="password"
                    placeholder="Buat Password"
                    onChange={(event) => {
                      handlePasswordChange(event);
                      setPassword(event.target.value);
                    }}
                    value={password}
                    required
                  />
                  {isPasswordValid && isPasswordTouched && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div className="rounded-full bg-green-500 p-0.5">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                  {!isPasswordValid && isPasswordTouched && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div className="rounded-full bg-red-500 p-0.5">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center rounded-xl"
              >
                Daftar
              </button>
            </form>
            <p className="text-gray-700 text-center">
              Sudah punya akun?{" "}
              <Link
                to={"/login"}
                className="text-primary font-bold hover:opacity-70"
              >
                Masuk di sini
              </Link>
            </p>
            {!isPasswordValid && (
              <div className="flex justify-center">
                <div className=" w-lg text-white bg-red-600 hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center rounded-lg">
                  Password min 8 karakter!
                </div>
              </div>
            )}
            {showNotification && (
              <div className="flex justify-center mt-4">
                <button
                  className="w-lg text-white bg-green-500 hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center rounded-lg"
                  onClick={() => setShowNotification(false)}
                >
                  Kode OTP telah dikirim!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-primary w-5/12 md:flex justify-center items-center hidden">
        <img src="/logo.svg" alt="gambar logo" className="h-36" />
      </div>
    </section>
  );
};

export default Register;
