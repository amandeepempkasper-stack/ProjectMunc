import React, { useState } from "react";
import "./Slider.css"; // External CSS for styling
import Item1 from "../../assets/item1.svg";
import Item2 from "../../assets/item2.svg";
import Item3 from "../../assets/item3.svg";
import Item4 from "../../assets/item4.svg";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const sections = [
  {
    id: 1,
    subtitle: "Daily overview",
    title: "Key Metrics Dashboard Overview",
    description: "Get real-time workforce visibility with MUN-C’s HR dashboard. Track login/logout times, monitor work hours, and analyze break patterns to boost efficiency. Our intuitive system enables data-driven decisions, optimizing scheduling and workforce management effortlessly.",
    img: Item1
  },
  {
    id: 2,
    subtitle: "Task Collaboration",
    title: "Seamless Team Collaboration",
    description: "Enhance teamwork with MUN-C’s business management suite. Our centralized dashboard streamlines task management software, real-time assignments, and team collaboration. Whether for remote or in-office teams, MUN-C ensures smooth coordination, reducing delays and improving workforce management.",
    img: Item2
  },
  {
    id: 3,
    subtitle: "Payroll & Attendance",
    title: "Hassle-Free Payroll Processing",
    description: "Eliminate payroll errors with MUN-C’s automated HR management software. Integrated with attendance management system, it tracks work hours, overtime, and leave applications to ensure accurate salary calculations. Minimize compliance risks while ensuring timely, error-free payroll processing.",
    img: Item3
  },
  {
    id: 4,
    subtitle: "Access",
    title: "Secure Role-Based Access",
    description: "Ensure data security with MUN-C’s role-based access dashboard. Assign customized access levels to employees, restricting sensitive information. From HR tools to finance management, MUN-C protects business data while streamlining workflow and enhancing operational control.",
    img: Item4
  }
];

const MobilePaginationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        <div className="text-content">
          <h3>{sections[currentIndex].subtitle}</h3>
          <h2>{sections[currentIndex].title}</h2>
          <p>{sections[currentIndex].description}</p>
        </div>
        <div className="image-content">
          <img src={sections[currentIndex].img} alt="section" />
        </div>
      </div>
      <div className="pagination">
        <button onClick={prevSlide} disabled={currentIndex === 0}><GrFormPreviousLink className="prev-icon" /></button>
        <span>{currentIndex + 1} of {sections.length}</span>
        <button onClick={nextSlide} disabled={currentIndex === sections.length - 1}><GrFormNextLink className="next-icon"/></button>
      </div>
    </div>
  );
};

export default MobilePaginationSlider;
