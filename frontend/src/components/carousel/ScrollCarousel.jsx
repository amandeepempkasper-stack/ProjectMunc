import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ScrollCarousel.css";
import Item1 from "../../assets/Attendance.png";
import Item2 from "../../assets/Task.png";
import Item3 from "../../assets/Payroll.png";
import Item4 from "../../assets/Role.png";
import { span } from "framer-motion/client";

const ScrollCarousel = () => {
  const carouselData = [
    {
      id: 1,
      subtitle: "Daily overview",
      title: "MUN-C Key Metrics Dashboard",
      paragraph:
        "MUN-C dashboard shows important business data in a simple and clear way. You can see Trends, Insights, and key numbers at a glance. It helps you Track Performance, Monitor Projects, and make quick decisions easily. Stay organized and improve efficiency!",
      img: Item1,
    },
    {
      id: 2,
      subtitle: "Task Collaboration",
      title: "Smooth Team Collaboration",
      paragraph:
        "MUN-C makes team collaboration easy with real-time Task Updates and Smooth communication. Employees can Track Progress, Share Insights, and Manage Tasks Efficiently. This helps teams stay connected, work smarter, and achieve goals faster.",
      img: Item2,
    },
    {
      id: 3,
      subtitle: "Payroll & Attendance",
      title: "Hassle-Free Payroll Processing",
      paragraph:
        "MUN-C’s Payroll Management automates Attendance, Salary, Arrears, Bonuses, and Deductions for accurate processing. It ensures ESI, PF, and TDS compliance while handling reimbursements. With one click, run payroll error-free and make timely payments without hassle.",
      img: Item3,
    },
    {
      id: 4,
      subtitle: "Access",
      title: "Secure Role-Based Access",
      paragraph:
        "MUN-C’s Access Management system assigns specific roles to Managers, Employees, HR, and Admin. Each role gets customized permissions to access only relevant data. This provides better security and smooth operations while keeping sensitive information.",
      img: Item4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeConsole, setActiveConsole] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  const slideTimeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing intervals or timeouts
    clearInterval(progressIntervalRef.current);
    clearTimeout(slideTimeoutRef.current);

    // Reset progress
    setProgress(0);

    // Start progress bar animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(progressIntervalRef.current);
        return 100;
      });
    }, 30);

    // Change slide after 3s
    slideTimeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);

    return () => {
      clearInterval(progressIntervalRef.current);
      clearTimeout(slideTimeoutRef.current);
    };
  }, [activeIndex]);

  // Function to handle manual slide change

  const activeItemRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (activeItemRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeItem = activeItemRef.current;

      // Scroll smoothly within the container
      container.scrollTo({
        left: activeItem.offsetLeft - container.offsetLeft - 20, // Offset for better alignment
        behavior: "smooth",
      });
    }

    if (activeIndex === 0) {
      setActiveConsole(25);
    } else if (activeIndex === 1) {
      setActiveConsole(50);
    } else if (activeIndex === 2) {
      setActiveConsole(75);
    } else if (activeIndex === 3) {
      setActiveConsole(100);
    }
  }, [activeIndex]);

  return (
    <div className="carousel-wrapper">
      <div className="scrollbar">
        <div
          className="scrollbar-thumb"
          style={{ height: `${activeConsole}%`, transition: "0.5s" }}
        />
      </div>
      <div className="scroll-container"  style={{marginLeft:"10px"}}>
        {carouselData.map((item, index) => (
          <section
            key={index}
            className="scroll-item"
            style={{
              transform: `translateY(-${activeIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <div className="row align-items-center">
              <div className="col-5 text d-flex flex-column gap-4">
                <h3 style={{ fontSize: "1.2rem" }}>{item.subtitle}</h3>
                <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: "1rem" }}>{item.paragraph}</p>
              </div>
              <div className="col-7">
                <img
                  style={{ width: "100%" }}
                  className="rounded-3"
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollCarousel;
