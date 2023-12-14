import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Course from "../Layout/Course";
import Footer from "../Components/Footer/Footer";
import Category from "../Layout/Category";
import ButtonCourse from "../Layout/ButtonCourse";
import AllCourse from "../Layout/AllCourse";

function HomePage() {
  return (
    <>
      <Header />
      <section>
        <Hero />
        <section className="bg-blue-100">
          <div className="container mx-auto px-12 sm:px-16 py-4">
            <div className="overflow-hidden">
              <div className="py-2">
                <h2 className="text-xl font-bold">Kategori Belajar</h2>
              </div>
            </div>
            <Category />
          </div>
        </section>
        <section className="container mx-auto pb-10 px-12 sm:px-16">
          <div className="overflow-hidden">
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 sm:mb-0">Kursus Populer</h2>
            </div>
          </div>
          <ButtonCourse />
          <Course />
        </section>
        <section id="allCourse" className="container mx-auto px-12 sm:px-16">
          <div className="my-8 mb-0">
            <h2 className="text-2xl font-bold mb-4 sm:mb-0 text-succes">
              Semua kursus
            </h2>
            <h1 className="text-4xl font-semibold">
              Pelajari Skills Baru <br /> Sesuai Dengan Minatmu
            </h1>
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
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
