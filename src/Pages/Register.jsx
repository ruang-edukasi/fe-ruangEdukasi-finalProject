import  { useState } from "react";
const Register = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const handleEmailChange = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(e.target.value);
    setIsEmailValid(isValid);
  };

  const handlePhoneChange = (e) => {
    const phoneRegex = /^\+62\s\.\s\d+$/; // Format: +62 [spasi] . [spasi] [nomor telepon]
    const isValid = phoneRegex.test(e.target.value);
    setIsPhoneValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const isValid = password.length >= 8;
    setIsPasswordValid(isValid);
    setIsPasswordTouched(true); 
  };

  return (
    <section className="flex">
      <div className="flex flex-col justify-center mx-auto md:h-screen lg:py-0 w-full md:w-1/2">
        <div className="w-full  rounded-lg md:mt-0 mx-auto sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-600 md:text-2xl">
              Daftar
            </h1>
            <form className="space-y-4 md:space-y-4" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nama
                </label>
                <input
                  className=" border border-gray-300 text-gray-900 sm:text-sm  w-full p-2.5"
                  type="text"
                  placeholder="Nama Lengkap"
                  style={{ borderRadius: "15px" }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className={`border ${
                      isEmailValid ? "border-green-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm w-full p-2.5`}
                    type="email"
                    placeholder="Contoh: johndee@gmail.com"
                    style={{ borderRadius: "15px" }}
                    onChange={handleEmailChange}
                    required
                  />
                  {isEmailValid && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div className="rounded-full bg-green-500 p-0">
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
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nomor Telepon
                </label>
                <div className="relative">
                  <input
                    className={`border ${
                      isPhoneValid ? "border-green-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm w-full p-2.5`}
                    type="tel"
                    placeholder="+62 ."
                    style={{ borderRadius: "15px" }}
                    onChange={handlePhoneChange}
                    required
                  />
                  {isPhoneValid && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div className="rounded-full bg-green-500 p-0">
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
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
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
                    } text-gray-900 sm:text-sm w-full p-2.5`}
                    type="password"
                    placeholder="Buat Password"
                    style={{ borderRadius: "15px" }}
                    onChange={handlePasswordChange}
                    required
                  />
                  {isPasswordValid && isPasswordTouched && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <div className="rounded-full bg-green-500 p-0.5">
                        <svg
                          className="h-4 w-4 text-white"
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
                          className="h-4 w-4 text-white"
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
                className="w-full text-white bg-indigo-600 hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center"
                style={{ borderRadius: "15px" }}
              >
                Daftar
              </button>
            </form>
            <p className="text-gray-700 text-center">
              Sudah punya akun?{" "}
              <a href="/register" className="text-indigo-600 hover:opacity-70">
                Masuk di sini
              </a>
            </p>
            {!isPasswordValid && (
              <div className="flex justify-center">
                <button
                  className=" w-lg text-white bg-red-600 hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center"
                  style={{ borderRadius: "15px" }}
                >
                  Password min 8 karakter!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('/Logo Ruang Edukasi.png')` }}
      ></div>
    </section>
  );
};

export default Register;
