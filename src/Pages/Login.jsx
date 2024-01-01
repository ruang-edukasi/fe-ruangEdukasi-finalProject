import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, forgotPassword } from "../redux/action/authAction";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const { errorMessage, succesMessage } = useSelector((state) => state.auth);
  const [showPassword, setShowpassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleVisibilityPassword() {
    setShowpassword(!showPassword);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password, navigate));
    console.log(errorMessage.toLowerCase().includes("email"));
  };

  function handleForgot() {
    dispatch(forgotPassword(email));
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-full md:w-7/12 flex flex-col justify-center items-center">
        <p className="w-9/12 sm:w-7/12 text-primary font-bold text-3xl md:w-8/12 lg:w-7/12 mb-5 xl:w-6/12">
          Masuk
        </p>
        <form
          action=""
          onSubmit={handleLogin}
          className="w-9/12 sm:w-7/12 md:w-8/12 lg:w-7/12 space-y-5 mb-11 xl:w-6/12"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Email/No Telepon
            </label>
            <input
              type="text"
              name="email"
              placeholder="Contoh: johndoee@gmail.com "
              className={`border ${
                // errorMessage === "Alamat email tidak terdaftar!"
                errorMessage.toLowerCase().includes("email")
                  ? "border-alert"
                  : "border-slate-400"
              }  px-5 py-2 w-full rounded-xl focus:outline-none`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name" className="mb-1 flex justify-between">
              <span className="block mb-1 text-sm">Password</span>{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={handleForgot}
              >
                Lupa Kata Sandi
              </span>
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Masukkan Password"
                // className="border border-slate-400 px-5 py-2 w-full rounded-xl focus:outline-none"
                className={`border ${
                  errorMessage.toLowerCase().includes("password")
                    ? "border-alert"
                    : "border-slate-400"
                }  px-5 py-2 w-full rounded-xl focus:outline-none`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
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
            <button
              type="submit"
              className="w-full text-white bg-primary hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center rounded-xl mt-8"
            >
              Masuk
            </button>
          </div>
        </form>
        <p className="w-full text-center self-start  mb-10">
          Belum punya akun?{" "}
          <Link
            to={"/register"}
            className="text-primary font-bold hover:opacity-70"
          >
            Daftar Disini
          </Link>
        </p>
        {errorMessage ? (
          <div className="bg-alert px-3 py-2 text-center text-white w-4/12 rounded-lg">
            {errorMessage}
          </div>
        ) : (
          ""
        )}
        {succesMessage ? (
          <div className="bg-succes px-3 py-2 text-center text-white w-4/12 rounded-lg">
            {succesMessage}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bg-primary w-5/12 md:flex justify-center items-center hidden">
        <img src="/logo.svg" alt="gambar logo" className="h-36" />
      </div>
    </div>
  );
}
export default Login;
