import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Category from "../Components/Slider/Category";
import Course from "../Components/Slider/Course";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("UI/UX Design");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <Header />
      <section>
        <Hero />
        <section className="container mx-auto px-20 py-4 bg-slate-200 w-full">
          <div className="flex py-2 justify-between">
            <h2 className="text-xl font-bold">Kategori Belajar</h2>
            <Link to="" className="font-bold text-primary">
              Lihat Semua
            </Link>
          </div>
          <Category />
        </section>
        <section className="container mx-auto pb-10 px-20">
          <div className="overflow-hidden">
            <div className="my-8 mb-0 flex justify-between">
              <h2 className="text-xl font-bold">Kursus Populer</h2>
              <Link to="" className="font-bold text-primary">
                Lihat Semua
              </Link>
            </div>
            <div className="my-4 flex justify-between">
              <Button
                bgColor={
                  activeFilter === "All"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="All"
                onClick={() => handleFilterChange("All")}
              />
              <Button
                bgColor={
                  activeFilter === "DataScience"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Data Science"
                onClick={() => handleFilterChange("DataScience")}
              />
              <Button
                bgColor={
                  activeFilter === "UI/UX Design"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="UI/UX Design"
                onClick={() => handleFilterChange("UI/UX Design")}
              />
              <Button
                bgColor={
                  activeFilter === "Android Development"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Android Development"
                onClick={() => handleFilterChange("Android Development")}
              />
              <Button
                bgColor={
                  activeFilter === "Web Development"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Web Development"
                onClick={() => handleFilterChange("Web Development")}
              />
              <Button
                bgColor={
                  activeFilter === "IOS Development"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="IOS Development"
                onClick={() => handleFilterChange("IOS Development")}
              />
              <Button
                bgColor={
                  activeFilter === "Business Intelligence"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Business Intelligence"
                onClick={() => handleFilterChange("Business Intelligence")}
              />
            </div>
          </div>
          <Course />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
