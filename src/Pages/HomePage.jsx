import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import HeroOne from "../Components/Hero/HeroOne";
import Footer from "../Components/Footer/Footer";
import Category from "../Layout/Category";
import ButtonCourse from "../Layout/ButtonCourse";
import AllCourse from "../Layout/AllCourse";
import HeroTwo from "../Components/Hero/HeroTwo";
import WhyUs from "../Components/Card/WhyUs";
import CoursePopular from "../Layout/CoursePopular";

function HomePage() {
  return (
    <>
      <Header />
      <section>
        <HeroOne />
        <section className="bg-blue-100">
          <div className="container mx-auto px-12 sm:px-16 py-4">
            <div className="overflow-hidden">
              <div className="py-2">
                <h2 className="text-2xl font-bold">Kategori Belajar</h2>
              </div>
            </div>
            <Category />
          </div>
        </section>
        <section className="container mx-auto pb-10 mt-10 px-12 sm:px-16">
          <div className="overflow-hidden">
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 sm:mb-0">
                Kursus Populer
              </h2>
            </div>
          </div>
          <ButtonCourse />
          <CoursePopular />
        </section>
        <section id="allCourse" className="container mx-auto px-12 sm:px-16">
          <div className="my-8 mb-0">
            <h2 className="text-2xl font-bold mb-4 sm:mb-0 text-primary">
              Semua Kursus
            </h2>
            <p className="text-lg">
              Pelajari skills baru sesuai dengan minatmu!
            </p>
          </div>
          <ButtonCourse />
          <AllCourse />
          <div className="w-full flex justify-center">
            <Link
              to="/dashbord"
              className="py-5 px-10 bg-primary my-10 text-white font-semibold rounded-lg hover:-translate-y-2 hover:opacity-75 duration-300"
            >
              Lihat Semua Course
            </Link>
          </div>
        </section>
        <section className="mx-auto pt-6">
          <HeroTwo />
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-8">
            <h2 className="text-4xl font-bold mb-2">Why Us?</h2>
            <p className="text-lg mb-8">Mengapa harus pilih Ruang Edukasi?</p>
            <WhyUs />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
