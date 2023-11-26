import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "./index.css";

const Category = () => {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
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
      <section className="container mx-auto px-24">
        <div className="my-4 flex justify-between">
          <h2 className="text-xl font-bold">Kategori Belajar</h2>
          <a href="" className="font-bold text-primary">
            Lihat Semua
          </a>
        </div>
        <div className="glide-01 relative w-full">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <a href="/">
                  <img
                    src="/category1.svg"
                    className="m-auto max-h-full w-full max-w-full"
                  />
                  <p className="text-center font-medium">UI/UX Design</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/category2.svg"
                    className="m-auto max-h-full w-full max-w-full"
                  />
                  <p className="text-center font-medium">Product Management</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/category3.svg"
                    className="m-auto max-h-full w-full max-w-full"
                  />
                  <p className="text-center font-medium">Web Development</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/category4.svg"
                    className="m-auto max-h-full w-full max-w-full"
                  />
                  <p className="text-center font-medium">Android Development</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/category5.svg"
                    className="m-auto max-h-full w-full max-w-full"
                  />
                  <p className="text-center font-medium">IOS Development</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/category6.svg"
                    className="m-auto max-h-full w-full max-w-full"
                  />
                  <p className="text-center font-medium">Data Science</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-24">
        <div className="my-10 mb-0 flex justify-between">
          <h2 className="text-xl font-bold">Kursus Populer</h2>
          <a href="" className="font-bold text-primary">
            Lihat Semua
          </a>
        </div>
        <div className="my-4 flex justify-between">
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-3 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            All
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-3 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Data Science
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-3 mr-4 text-sm font-bold tracking-wide text-white transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-primary hover:bg-indigo-800 hover:text-white">
            UI/UX Design
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Android Development
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Web Development
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            IOS Development
          </button>
          <button className="inline-flex items-center justify-center w-auto h-8 gap-2 px-5 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-xl shadow-md whitespace-nowrap bg-blue-100 hover:bg-primary hover:text-white">
            Business Intelligence
          </button>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
    </>
  );
};

export default Category;
