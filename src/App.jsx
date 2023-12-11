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
import Profile from "./Pages/Profile";
import LoginAdmin from "./Admin/Pages/LoginAdmin";
import DashbordAdmin from "./Admin/Pages/DashbordAdmin";
import SearchCourse from "./Pages/SearchCourse";
import Notification from "./Pages/Notification";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchCourse />} />
          <Route path="/notifikasi" element={<Notification />} />

          {/* Admin Pages */}
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/dashbord-admin" element={<DashbordAdmin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
