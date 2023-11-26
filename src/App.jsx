import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Sidebar from "./Component/Sidebar.jsx";
import ResertPassword from "./Pages/ResertPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<Sidebar />} />
        <Route path="/reset" element={<ResertPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
