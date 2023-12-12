const Table = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-4 rounded-xl shadow-md overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-blue-100 text-base text-slate-800">
              <th>Kode Kelas</th>
              <th>Kategori</th>
              <th>Nama Kelas</th>
              <th>Tipe Kelas</th>
              <th>Level</th>
              <th>Harga Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UIUX0123</td>
              <td>UI/UX Design</td>
              <td>Belajar Web Designer dengan Figma</td>
              <td>GRATIS</td>
              <td>Beginner</td>
              <td>Rp 0</td>
              <div>
                <td>
                  <button className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300">
                    Ubah
                  </button>
                </td>
                <td>
                  <button className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-red-800 transition duration-300">
                    Hapus
                  </button>
                </td>
              </div>
            </tr>
            <tr>
              <td>UIUX0123</td>
              <td>UI/UX Design</td>
              <td>Belajar Web Designer dengan Figma</td>
              <td>GRATIS</td>
              <td>Beginner</td>
              <td>Rp 0</td>
              <div>
                <td>
                  <button className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300">
                    Ubah
                  </button>
                </td>
                <td>
                  <button className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-red-800 transition duration-300">
                    Hapus
                  </button>
                </td>
              </div>
            </tr>
            <tr>
              <td>UIUX0123</td>
              <td>UI/UX Design</td>
              <td>Belajar Web Designer dengan Figma</td>
              <td>GRATIS</td>
              <td>Beginner</td>
              <td>Rp 0</td>
              <div>
                <td>
                  <button className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300">
                    Ubah
                  </button>
                </td>
                <td>
                  <button className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-red-800 transition duration-300">
                    Hapus
                  </button>
                </td>
              </div>
            </tr>
            <tr>
              <td>UIUX0123</td>
              <td>UI/UX Design</td>
              <td>Belajar Web Designer dengan Figma</td>
              <td>GRATIS</td>
              <td>Beginner</td>
              <td>Rp 0</td>
              <div>
                <td>
                  <button className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300">
                    Ubah
                  </button>
                </td>
                <td>
                  <button className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-red-800 transition duration-300">
                    Hapus
                  </button>
                </td>
              </div>
            </tr>
            <tr>
              <td>UIUX0123</td>
              <td>UI/UX Design</td>
              <td>Belajar Web Designer dengan Figma</td>
              <td>GRATIS</td>
              <td>Beginner</td>
              <td>Rp 0</td>
              <div>
                <td>
                  <button className="bg-primary text-white font-semibold rounded-3xl w-16 h-7 hover:bg-indigo-800 transition duration-300">
                    Ubah
                  </button>
                </td>
                <td>
                  <button className="bg-alert text-white font-semibold rounded-3xl w-16 h-7 hover:bg-red-800 transition duration-300">
                    Hapus
                  </button>
                </td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
