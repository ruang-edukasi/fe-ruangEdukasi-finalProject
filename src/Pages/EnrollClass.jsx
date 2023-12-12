import Header from "../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import courseImage from "../assets/category-1.svg";

function EnrollClass() {
  return (
    <>
      <Header />
      <section className="mb-20">
        <div className="container px-24 content w-full flex flex-col py-6 drop-shadow-lg">
          <Link to={"/"} className="md:w-1/6 sm:2/6">
            <div className="text-base font-semibold leading-tight tracking-tight text-black md:text-2xl">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mr-6 text-black inline"
              />
              Kembali
            </div>
          </Link>
          <div className="mx-auto bg-alert px-28 py-2 text-white rounded-lg">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </div>
        </div>
        <div className="flex  px-24 mt-10 gap-10">
          <div className="flex flex-col gap-2 sm:w-full md:w-9/12 ">
            <div className="collapse collapse-arrow bg-gray-800 rounded-sm">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text- font-medium text-white ">
                Bank Transfer
              </div>
              <div className="collapse-content bg-white">
                <form className="max-w-md mx-auto mt-11">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="number"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Card Number
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Card holder name
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="number"
                        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        CVV
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="date"
                        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Expairy date
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-primary rounded-sm">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text- font-medium text-white">
                Bank Transfer
              </div>
              <div className="collapse-content bg-white ">
                <form className="max-w-md mx-auto mt-11">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="number"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Card Number
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Card holder name
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="number"
                        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        CVV
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="date"
                        name="floating_company"
                        id="floating_company"
                        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Expairy date
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex-col bg-base-100 shadow-xl border border-primary rounded-2xl">
              <h2 className="text-lg font-bold p-3">Pembayaran Kelas</h2>
              <div className="bg-base-100 shadow-md flex flex-col mx-4 rounded-3xl pb-4">
                <figure className=" overflow-clip w-full ">
                  <img
                    src={courseImage}
                    alt="course image"
                    className="object-contain w-full rounded-none"
                  />
                </figure>
                <h4 className="font-bold text-primary px-4 pt-2">
                  UI/UX Design
                </h4>
                <p className="font-bold px-4 pt-2 text-base">
                  Intro to Basic of User Interaction Design
                </p>
                <p className="text-sm font-semibold px-4 ">by Simon Doe</p>
              </div>
              <div className="card-body flex justify-between flex-row">
                <div className="space-y-2">
                  <div className="title font-bold">Harga</div>
                  <div className="price">Rp. 349,000</div>
                </div>
                <div className="space-y-2">
                  <div className="title font-bold">PPN 11%</div>
                  <div className="price">Rp. 349,000</div>
                </div>
                <div className="space-y-2">
                  <div className="title font-bold">Total Bayar</div>
                  <div className="price">Rp. 349,000</div>
                </div>
              </div>
              <form className="flex justify-center items-center">
                <div className="w-4/5 flex mb-5 gap-2">
                  <input
                    type="text"
                    placeholder="Masukkan kode kupon"
                    className="px-2 py-2 border border-primary rounded-md w-full max-w-xs outline-none"
                  />
                  <button
                    type="submit"
                    className=" text-white bg-primary font-medium text-sm px-4 py-2.5 text-center rounded-md"
                  >
                    Gass
                  </button>
                </div>
              </form>
              <button className="text-center bg-alert text-white py-2.5 mx-auto rounded-3xl px-5 flex gap-2 mb-8 shadow-sm">
                Bayar dan Ikuti Kelas Selamanya{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" text-alert inline bg-white rounded-full px-[7px] py-1.5 self-center"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnrollClass;
