import Header from "../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  checkCoupon,
  getDetail,
  getOrderCourse,
} from "../redux/action/courseAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PaymentItem from "../Components/Card/PaymentItem";
import BRI from "../assets/BRI.svg";
import BNI from "../assets/BNI.svg";
import MANDIRI from "../assets/Mandiri.svg";
import Indomaret from "../assets/Logo Indomaret.svg";
import Alfamart from "../assets/Alfamart.svg";
import Dana from "../assets/Logo DANA.svg";

function EnrollClass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [couponCode, setCouponCode] = useState("");
  const [showCouponInfo, setShowCouponInfo] = useState(false);

  const { detail, coupon } = useSelector((state) => state.course);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getDetail(courseId));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch, courseId]);

  const handleEnrollButtonClick = async (e) => {
    e.preventDefault();

    try {
      await dispatch(getOrderCourse(courseId, navigate));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCouponButtonClick = async (e) => {
    e.preventDefault();
    try {
      await dispatch(checkCoupon(courseId, couponCode));
      setShowCouponInfo(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <section className="mb-20">
        <div className="container px-24 content w-full flex flex-col py-6 drop-shadow-lg">
          <Link
            className="text-base font-semibold leading-tight tracking-tight text-black md:text-2xl"
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="mr-6 text-black inline cursor-pointer"
            />
            Kembali
          </Link>
          <div className="mx-auto bg-alert px-28 py-2 text-white rounded-lg">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </div>
        </div>
        <div className="flex  px-24 mt-10 gap-10">
          <div className="flex flex-col gap-2 sm:w-full md:w-9/12 ">
            <div className="  bg-primary px-28 py-4  font-bold text-white rounded-lg text-center">
              Pembayaran Dapat dilakukan melalui
            </div>

            <div className="columns-3 mt-8 px-20">
              <div className="border bg-base-100 shadow-xl rounded-xl p-3 flex items-center justify-center">
                <img src={MANDIRI} alt="" className="w-full h-7" />
              </div>
              <div className="border bg-base-100 shadow-xl rounded-xl p-3 flex items-center justify-center">
                <img src={BRI} alt="" className="w-full h-7" />
              </div>
              <div className="border bg-bse-100 shadow-xl rounded-xl p-3 flex items-center justify-center">
                <img src={BNI} alt="" className="w-full h-7" />
              </div>
            </div>
            <div className="columns-3 mt-3 px-20">
              <div className="border bg-base-100 shadow-xl rounded-xl p-3 flex items-center justify-center">
                <img src={Alfamart} alt="" className="w-full h-7" />
              </div>
              <div className="border bg-base-100 shadow-xl rounded-xl p-3 flex items-center justify-center">
                <img src={Indomaret} alt="" className="w-full h-7" />
              </div>
              <div className="border bg-bse-100 shadow-xl rounded-xl p-3 flex items-center justify-center">
                <img src={Dana} alt="" className="w-full h-7" />
              </div>
            </div>
          </div>
          <div>
            <div className=" flex-col bg-base-100 shadow-xl border border-primary rounded-2xl">
              <h2 className="text-lg font-bold p-3">Pembayaran Kelas</h2>
              <div className="bg-base-100 flex flex-col mx-10 rounded-3xl items-center">
                <PaymentItem
                  key={detail?.id}
                  id={detail.id}
                  thumbnailCourse={detail?.thumbnailCourse || "/course.jpg"}
                  courseName={detail?.courseName}
                  instructorName={detail?.instructorName}
                  courseDescription={detail?.courseDescription}
                  courseType={detail?.courseType}
                  courseCategory={detail?.courseCategory}
                  courseLevel={detail?.courseLevel}
                />
              </div>
              <div className="card-body  justify-between">
                <div className="columns-3 mb-3 ">
                  <div className=" ">
                    <div className="title text-center font-bold px-5">
                      Harga
                    </div>
                    <div className="price text-center">Rp.{detail?.price}</div>
                  </div>
                  <div className=" ">
                    <div className="title font-bold text-center">
                      PPN {detail?.ppnPercent}%
                    </div>
                    <div className="price text-center">
                      Rp.{detail?.ppnPrice}
                    </div>
                  </div>
                  <div className="">
                    <div className="title font-bold text-center">
                      Total Bayar
                    </div>
                    <div className="price text-center">
                      Rp.{detail?.priceAfterPpn}
                    </div>
                  </div>
                </div>

                {showCouponInfo && (
                  <div className="columns-4">
                    <div className=" ">
                      <div className="title font-semibold text-center">
                        Harga
                      </div>
                      <div className="price text-center">
                        Rp.{coupon?.priceAfterDiscount}
                      </div>
                    </div>
                    <div className=" ">
                      <div className="title font-semibold text-center">
                        Diskon {coupon?.discountPercent}%
                      </div>
                      <div className="price text-center">
                        Rp.{coupon?.discountPrice}
                      </div>
                    </div>
                    <div className=" ">
                      <div className="title font-semibold text-center">
                        PPN {coupon?.ppnPercent}%
                      </div>
                      <div className="price text-center">
                        Rp.{coupon?.ppnPrice}
                      </div>
                    </div>
                    <div className="">
                      <div className="title font-semibold text-center">
                        Total Bayar
                      </div>
                      <div className="price text-center">
                        Rp.{coupon?.totalPrice}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form className="flex justify-center items-center">
                <div className="w-4/5 flex mb-5 gap-2">
                  <input
                    type="text"
                    placeholder="Masukkan kode kupon"
                    className="px-2 py-2 border border-primary rounded-md w-full max-w-xs outline-none"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleCouponButtonClick}
                    className=" text-white bg-primary font-medium text-sm px-4 py-2.5 text-center rounded-md"
                  >
                    Gass
                  </button>
                </div>
              </form>
              <button
                onClick={handleEnrollButtonClick}
                className="text-center bg-alert text-white py-2.5 mx-auto rounded-3xl px-5 flex gap-2 mb-8 shadow-sm"
              >
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
