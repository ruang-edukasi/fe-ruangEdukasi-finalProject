function index() {
  return (
    <>
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  w-11/12 max-w-3xl px-24">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-primary">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl w-full text-center mb-6 text-primary">
            Tambah Kelas!
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                Nama Kelas
              </label>
              <input
                type="text"
                id="small-input"
                placeholder="Belajar web dengan figma"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                Kategori
              </label>
              <input
                type="text"
                id="small-input"
                placeholder="Belajar web dengan figma"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500  "
              />
            </div>
            <div className="flex flex-row w-full gap-2 ">
              <div className="w-full max-w-xs">
                <label className="block text-sm font-semibold text-gray-900  p-2">
                  Kategori
                </label>
                <select className="select w-full select-bordered border bg-gray-50 focus:border-2 focus:border-blue-500  focus:outline-none">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="w-full max-w-xs">
                <label className="block text-sm font-semibold text-gray-900  p-2">
                  Tipe kelas
                </label>
                <select className="select select-bordered bg-gray-50 focus:border-2 focus:border-blue-500 w-full focus:outline-none">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                Kategori
              </label>
              <input
                type="text"
                id="small-input"
                placeholder="Belajar web dengan figma"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500  "
              />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default index;
