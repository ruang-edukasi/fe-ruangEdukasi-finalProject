import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { Link } from "react-router-dom";

const Category = () => {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 700,
      gap: 20,
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
          perView: 2,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-01 relative w-full">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden py-2">
            <li>
              <Link to="">
                <img
                  src="/category1.svg"
                  className="m-auto max-h-full w-full max-w-full transition duration-300 cursor-pointer text-no-underline hover:scale-105"
                />
                <p className="text-center font-medium">UI/UX Design</p>
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src="/category2.svg"
                  className="m-auto max-h-full w-full max-w-full transition duration-300 cursor-pointer text-no-underline hover:scale-105"
                />
                <p className="text-center font-medium">Product Management</p>
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src="/category3.svg"
                  className="m-auto max-h-full w-full max-w-full transition duration-300 cursor-pointer text-no-underline hover:scale-105"
                />
                <p className="text-center font-medium">Web Development</p>
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src="/category4.svg"
                  className="m-auto max-h-full w-full max-w-full transition duration-300 cursor-pointer text-no-underline hover:scale-105"
                />
                <p className="text-center font-medium">Android Development</p>
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src="/category5.svg"
                  className="m-auto max-h-full w-full max-w-full transition duration-300 cursor-pointer text-no-underline hover:scale-105"
                />
                <p className="text-center font-medium">IOS Development</p>
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src="/category6.svg"
                  className="m-auto max-h-full w-full max-w-full transition duration-300 cursor-pointer text-no-underline hover:scale-105"
                />
                <p className="text-center font-medium">Data Science</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
    </>
  );
};

export default Category;
