import { useState } from "react";
import logo from "../assets/logo_1.png";

function ResertPassword() {
  const [showPassword1, setShowpassword1] = useState(false);
  const [showPassword2, setShowpassword2] = useState(false);
  const [passwordMin, setPasswordMin] = useState(0);
  const [passwordMin2, setPasswordMin2] = useState(0);

  function handleVisibilityPassword() {
    setShowpassword1(!showPassword1);
  }

  function handleVisibilityPassword2() {
    setShowpassword2(!showPassword2);
  }

  function handlePassword(e) {
    const password = e.target.value;
    setPasswordMin(password.length);
  }
  function handlePassword2(e) {
    const password = e.target.value;
    setPasswordMin2(password.length);
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full md:w-7/12 flex flex-col justify-center items-center">
        <p className="w-9/12 sm:w-7/12 text-primary font-bold text-3xl md:w-8/12 lg:w-7/12 mb-5 xl:w-6/12">
          Reset Password
        </p>
        <form
          action=""
          className="w-9/12 sm:w-7/12 md:w-8/12 lg:w-7/12 space-y-5 mb-11 xl:w-6/12"
        >
          <div>
            <label htmlFor="name" className="mb-1 flex justify-between">
              <span className="">Masukkan Password Baru</span>
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword1 ? "text" : "password"}
                name="password"
                placeholder="Masukkan Password"
                onChange={handlePassword}
                className={`border ${
                  passwordMin <= 7
                    ? passwordMin >= 1
                      ? "border-alert"
                      : "border-slate-400"
                    : "border-succes"
                } px-5 py-2 w-full rounded-lg focus:outline-none`}
              />
              {showPassword1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="w-5 h-5 absolute right-3 cursor-pointer"
                  onClick={handleVisibilityPassword}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="w-5 h-5 absolute right-3 cursor-pointer"
                  onClick={handleVisibilityPassword}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="name" className="mb-1 flex justify-between">
              <span className="">Ulangi Password Baru</span>
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword2 ? "text" : "password"}
                name="password"
                placeholder="Masukkan Password"
                onChange={handlePassword2}
                className={`border ${
                  passwordMin2 <= 7
                    ? passwordMin2 >= 1
                      ? "border-alert"
                      : "border-slate-400"
                    : "border-succes"
                } border-slate-400 px-5 py-2 w-full rounded-lg focus:outline-none`}
              />
              {showPassword2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="w-5 h-5 absolute right-3 cursor-pointer"
                  onClick={handleVisibilityPassword2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="w-5 h-5 absolute right-3 cursor-pointer"
                  onClick={handleVisibilityPassword2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
            <button
              type="submit"
              className="py-2 text-center w-full bg-primary rounded-lg text-white mt-8"
            >
              Simpan
            </button>
          </div>
        </form>
        {(passwordMin < 8 && passwordMin >= 1) ||
        (passwordMin2 < 8 && passwordMin2 >= 1) ? (
          <div className="bg-alert px-3 py-2 text-center text-white w-4/12 rounded-lg">
            Password min 8 Karakter
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bg-primary w-5/12 md:flex justify-center items-center hidden">
        <img src={logo} alt="gambar logo" />
      </div>
    </div>
  );
}

export default ResertPassword;