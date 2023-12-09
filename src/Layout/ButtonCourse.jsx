import Button from "../Components/Button/Button";
import { useState } from "react";
import PropTypes from "prop-types";

function ButtonCourse({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };
  return (
    <div className="my-4 flex justify-between">
      <Button
        bgColor={
          activeFilter === "All" ? "bg-primary text-white" : "bg-slate-100"
        }
        text="All"
        onClick={() => handleFilterChange("All")}
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
          activeFilter === "Frontend Development"
            ? "bg-primary text-white"
            : "bg-slate-100"
        }
        text="Frontend Development"
        onClick={() => handleFilterChange("Frontend Development")}
      />
      <Button
        bgColor={
          activeFilter === "Backend Development"
            ? "bg-primary text-white"
            : "bg-slate-100"
        }
        text="Backend Development"
        onClick={() => handleFilterChange("Backend Development")}
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
          activeFilter === "Data Science"
            ? "bg-primary text-white"
            : "bg-slate-100"
        }
        text="Data Science"
        onClick={() => handleFilterChange("Data Science")}
      />
      <Button
        bgColor={
          activeFilter === "Quality Assurance"
            ? "bg-primary text-white"
            : "bg-slate-100"
        }
        text="Quality Assurance"
        onClick={() => handleFilterChange("Quality Assurance")}
      />
    </div>
  );
}

ButtonCourse.propTypes = {
  onFilterChange: PropTypes.func,
};

export default ButtonCourse;
