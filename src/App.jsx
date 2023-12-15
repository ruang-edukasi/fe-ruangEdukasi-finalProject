import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashbord from "./Pages/Dashbord";
import ResertPassword from "./Pages/ResertPassword";
import EnrollClass from "./Pages/EnrollClass";
import { Otp } from "./Pages/Otp";
import { Provider } from "react-redux";
import store from "./redux/store";
import KelasSaya from "./Pages/KelasSaya";
import LoginAdmin from "./Admin/Pages/LoginAdmin";
import DashbordAdmin from "./Admin/Pages/DashbordAdmin";
import SearchCourse from "./Pages/SearchCourse";

import UbahPassword from "./Pages/Profile/UbahPassword";
import ProfileAkun from "./Pages/Profile/ProfileAkun";
import Notification from "./Pages/Notification";
import KelolaKelas from "./Admin/Pages/KelolaKelas";
import DetailCourse from "./Pages/DetailCourse";
import PaymentSucces from "./Pages/PaymentSucces";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/kelas-saya" element={<KelasSaya />} />
          <Route path="/SearchAllCourse" element={<KelasSaya />} />
          <Route path="/user/reset/:resetId" element={<ResertPassword />} />
          <Route path="/enroll" element={<EnrollClass />} />
          <Route path="/otp/:verifId" element={<Otp />} />
          <Route path="/search" element={<SearchCourse />} />
          <Route path="/detail-course/:courseId" element={<DetailCourse />} />
          <Route path="/ubah-password" element={<UbahPassword />} />
          <Route path="/profile-akun" element={<ProfileAkun />} />
          <Route path="/detail-course" element={<DetailCourse />} />
          <Route path="/payment-succes" element={<PaymentSucces />} />
          <Route path="/notifikasi" element={<Notification />} />

          {/* Admin Pages */}
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/dashbord-admin" element={<DashbordAdmin />} />
          <Route path="/kelolakelas-admin" element={<KelolaKelas />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
