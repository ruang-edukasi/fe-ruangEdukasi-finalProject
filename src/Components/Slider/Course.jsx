import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { Link } from "react-router-dom";
import "./index.css";

const Course = () => {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <section className="container pb-10 px-20">
        <div className="my-8 mb-0 flex justify-between">
          <h2 className="text-xl font-bold">Kursus Populer</h2>
          <Link to="" className="font-bold text-primary">
            Lihat Semua
          </Link>
        </div>
        <div className="my-4 overflow-hidden flex justify-between">
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-3 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-3xl whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            All
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-3 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-3xl whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Data Science
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-3 mr-4 text-sm font-bold tracking-wide text-white transition duration-300 rounded-3xl whitespace-nowrap bg-primary hover:bg-indigo-800 hover:text-white">
            UI/UX Design
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-3xl whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Android Development
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-3xl whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Web Development
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-3xl whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            IOS Development
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-3xl whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Business Intelligence
          </button>
        </div>
        <div className="glide-02 relative w-full">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden py-2">
              <li>
                <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 w-full">
                  <figure>
                    <img src="/course.svg" className="w-full" />
                  </figure>
                  <div className="p-4">
                    <div className="flex justify-between">
                      <h3 className="text-base font-bold text-primary">
                        UI/UX Design
                      </h3>
                      <h3 className="text-base font-semibold text-black">
                        ⭐4.7
                      </h3>
                    </div>
                    <h3 className="text-base font-semibold text-black">
                      Belajar Web Designer dengan Figma
                    </h3>
                    <p className="text-sm font-normal text-black">
                      by Angela Doe
                    </p>
                    <div className="flex justify-between text-sm font-semibold text-black">
                      <p className="text-primary">Intermediate Level</p>
                      <p>10 Modul</p>
                      <p>120 Menit</p>
                    </div>
                  </div>
                  <div className="flex justify-start p-4 pt-0">
                    <button className="inline-flex h-8 w-44 px-5 items-center justify-center rounded-3xl bg-blue-500  text-sm font-medium text-white transition duration-300 hover:bg-blue-800">
                      <p className="pr-4">💎 Beli</p>
                      <p>Rp 249.000</p>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
    </>
  );
};

export default Course;
