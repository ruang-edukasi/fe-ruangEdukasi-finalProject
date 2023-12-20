import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import HeroOne from "../Components/Hero/HeroOne";
import Footer from "../Components/Footer/Footer";
import Category from "../Layout/Category";
import ButtonCourse from "../Layout/ButtonCourse";
import AllCourse from "../Layout/AllCourse";
import HeroTwo from "../Components/Hero/HeroTwo";
import WhyUs from "../Components/Card/WhyUs";
import Team from "../Components/Card/Team";
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
          <div className="mb-4 sm:mb-0">
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
        <section className="mx-auto py-16">
          <HeroTwo />
        </section>
        <section className="py-16">
          <div className="container text-center mx-auto px-4 lg:px-24">
            <h2 className="text-3xl text-primary font-bold mb-4">
              Mengapa Harus Pilih Ruang Edukasi?
            </h2>
            <p className="text-xl mb-14">
              Memberikan Pengalaman Belajar Tak Terlupakan
            </p>
            <WhyUs />
          </div>
        </section>
        <section className="py-16">
          <div className="container text-center mx-auto px-4 sm:px-8">
            <h2 className="text-3xl text-primary font-bold mb-4">
              Jangkauan Pengguna Ruang Edukasi
            </h2>
            <h2 className="text-xl mb-14">
              Tersebar di seluruh provinsi Indonesia
            </h2>
            <div className="flex justify-center">
              <img src="/peta.svg" alt="Peta Indonesia" className="w-9/12" />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container text-center mx-auto px-4 sm:px-8">
            <h2 className="text-3xl text-primary font-bold mb-4">
              Tim Ruang Edukasi
            </h2>
            <h2 className="text-xl mb-14">
              Mereka adalah tim garda terdepan untuk bimbing kamu belajar skills
              digital di Ruang Edukasi
            </h2>
            <Team />
          </div>
        </section>
        <section className="py-16">
          <div className="container text-center mx-auto px-4 sm:px-8">
            <h2 className="text-3xl text-primary font-bold mb-16">
              Partner Kami
            </h2>
            <div className="flex justify-center pb-12">
              <div className="grid grid-cols-2 justify-items-center">
                <img
                  src="/Kampus Merdeka.png"
                  alt="Logo Kampus Merdeka"
                  className="h-20"
                />
                <img
                  src="/Binar Academy.png"
                  alt="Logo Binar Academy"
                  className="h-20"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
