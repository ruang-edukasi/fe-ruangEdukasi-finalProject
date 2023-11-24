import { Link } from "react-router-dom";
import logo from "../assets/logo_1.png";

function Login() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-7/12 flex flex-col justify-center items-center">
        <p className="text-primary font-bold text-3xl w-6/12 mb-5">Masuk</p>
        <form action="" className="w-6/12 space-y-4 mb-11">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold ">
              Email/No Telepon
            </label>
            <input
              type="text"
              name="username"
              placeholder="Contoh: johndoee@gmail.com "
              className="border border-slate-400 px-5 py-2 w-full rounded-lg focus:outline-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-semibold text-clip"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Masukkan Password"
              className="border border-slate-400 px-5 py-2 w-full rounded-lg focus:outline-blue-400"
            />
            <button
              type="submit"
              className="py-2 text-center w-full bg-primary rounded-lg text-white mt-8"
            >
              Masuk
            </button>
          </div>
        </form>
        <p className="w-full text-center self-start  ">
          Belum punya akun?{" "}
          <Link to={"/register"} className="text-primary font-bold ">
            Daftar Disini
          </Link>
        </p>
      </div>
      <div className="bg-primary w-5/12 flex justify-center items-center">
        <img src={logo} alt="gambar logo" />
      </div>
    </div>
  );
}
export default Login;
