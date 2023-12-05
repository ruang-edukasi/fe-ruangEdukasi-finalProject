import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

function HeaderAdmin() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const profileAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/admin/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = response;

        // Set the user state from API data
        setAdmin(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If token is not valid
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            return;
          }
          alert(error?.response?.data?.message);
          return;
        }
        alert(error?.message);
      }
    };

    profileAdmin();
  }, []);

  return (
    <header className="bg-blue-100 p-7 flex justify-between items-center ">
      {admin && (
        <>
          <h1 className="font-bold text-3xl text-primary">Hi, {admin?.name}</h1>
          <div className="flex items-center gap-2 py-4">
            <form action="search" className="relative">
              <input
                type="text"
                name="search"
                placeholder="Cari"
                autoComplete="off"
                className="outline-none font-semibold text-md bg-white border-none ring-2 ring-white focus:ring-indigo-300 rounded-xl border-white px-4 md:py-2 md:w-96"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button className="text-white bg-primary hover:bg-indigo-400 rounded-lg w-8 h-7 transition duration-300">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </header>
  );
}

export default HeaderAdmin;
