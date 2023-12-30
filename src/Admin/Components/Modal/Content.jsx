import PropType from "prop-types";
import { useState } from "react";

const Modal = ({ show, onSubmit }) => {
  const [content_title, setContentTitle] = useState("");
  const [video_link, setVideoLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      content_title,
      video_link,
    };

    onSubmit(formData);
    console.log(formData);
  };

  return (
    <>
      <dialog id="my_modal_4" className={`modal ${show ? "" : "hidden"}`}>
        <div className="modal-box w-11/12 max-w-3xl px-24">
          <form method="dialog">
            <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-primary">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-2xl w-full text-center mb-6 text-primary">
              Tambah Konten!
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Nama Konten Video
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Nama konten video"
                  value={content_title}
                  onChange={(event) => setContentTitle(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-900 ">
                  Link Konten Video
                </label>
                <input
                  type="text"
                  id="small-input"
                  placeholder="Link konten video"
                  value={video_link}
                  onChange={(event) => setVideoLink(event.target.value)}
                  required
                  className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:border-blue-500  "
                />
              </div>
              <div className="flex justify-center flex-row w-full gap-2">
                <div className="w-full max-w-xs">
                  <button className="bg-alert text-md text-white font-bold rounded-3xl w-full py-2.5 hover:bg-red-800 transition duration-300">
                    Upload Video
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

Modal.propTypes = {
  show: PropType.func.isRequired,
  onSubmit: PropType.func.isRequired,
};

export default Modal;
