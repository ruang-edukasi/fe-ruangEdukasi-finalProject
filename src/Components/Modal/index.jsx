import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/CourseItem";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function index() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal w-full content-center">
        <div className="modal-box text-center w-8/12 max-w-xl">
          <form
            method="dialog"
            className="border border-transparent border-none"
          >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm  btn-circle btn-ghost absolute right-2 top-2 border border-transparent">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl mb-5">
            Selangkah lagi
            <div className="font-bold text-xl text-primary">
              meuju kelas premium
            </div>
          </h3>
          <div className="w-full flex justify-center flex-col items-center gap-10">
            <Card />
            <button className=" bg-primary text-white py-2.5  rounded-3xl w-7/12 flex gap-2 mb-8 shadow-sm text-center">
                Beli Sekarang
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" text-primary inline bg-white rounded-full px-[5px] py-1 self-center"
                />
              </button>
          </div>

        </div>
      </dialog>
    </>
  );
}

export default index;
