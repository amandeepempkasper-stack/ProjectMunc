import React, { useState, useEffect, useRef } from "react";
import "./TimerCarousel.css";
import Time from "../../assets/Time.svg";
import Role from "../../assets/Role.svg";
import Payroll from "../../assets/Payroll.svg";
import task from "../../assets/task.svg";
import helpdesk from "../../assets/helpdesk.svg";
import Devices from "../../assets/Devices.svg";

const carouselData = [
  {
    title: "Time & Attendance Tracking",
    des1: "Track employee attendance, work hours, and leaves with automated systems like biometric authentication and web-based login. This eliminates manual errors and improves workforce management accuracy.",
    des2: "Employees can view their attendance records, apply for leaves, and get real-time approvals. The system also integrates with payroll, ensuring fast salary calculations based on work hours and leave data.",
    img: Time,
    background:
      "linear-gradient(90deg, hsla(211, 96%, 62%, 1) 0%, hsla(295, 94%, 76%, 1) 100%)",
  },
  {
    title: "Role-Based Access",
    des1: "Grant employees access only to the modules relevant to their roles, ensuring a secure and organized workflow. This minimizes data breaches and unauthorized modifications while streamlining operations.",
    des2: "With predefined roles such as Admin, HR, Manager, and Employee, permissions are managed efficiently. This system enhances security, improves accountability, and ensures employees have the right tools for their tasks.",
    img: Role,
    background:
      "linear-gradient(90deg, hsla(265, 53%, 29%, 1) 0%, hsla(24, 93%, 73%, 1) 100%)",
  },
  {
    title: "Payroll & Salary Slip",
    des1: "Automate salary processing with accurate calculations of deductions, bonuses, and tax compliance. This reduces administrative workload and ensures timely salary disbursement.",
    des2: "Employees can securely access their salary slips, view tax breakdowns, and download reports anytime. Multiple payment options ensure flexibility and compliance with financial regulations.",
    img: Payroll,
    background:
      "linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)",
  },
  {
    title: "Helpdesk",
    des1: "Provide employees with a structured helpdesk to raise tickets for IT, HR, or operational issues. This ensures timely resolutions and reduces workplace disruptions.",
    des2: "With automated responses, real-time tracking, and escalation features, employees get efficient support. This improves productivity and enhances workplace efficiency.",
    img: helpdesk,
    background:
      "linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
  },
  {
    title: "Task Reporting",
    des1: "Monitor task assignments, deadlines, and progress with a centralized tracking system. Employees can update tasks, receive feedback, and ensure accountability.",
    des2: "Managers can analyze performance trends, streamline workflows, and ensure timely project completion. Automated notifications help keep tasks on schedule.",
    img: task,
    background:
      "linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
  },
  {
    title: "Web-Based Login",
    des1: "Enable employees to securely log in from any device, allowing seamless remote access to work-related data and tools. This enhances flexibility while maintaining security.",
    des2: "With multi-factor authentication and encrypted connections, businesses can ensure data protection. Employees can access attendance, payroll, and tasks from anywhere securely.",
    img: Devices,
    background:
      "linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
  },
];

const TimerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress when user manually changes slide
  };

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
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      {/* Navigation Buttons */}
      <div className="d-none d-md-flex align-items-center justify-content-between flex-wrap gap-3 fw-bold px-2">
        {carouselData.map((item, index) => (
          <span
            key={index}
            style={{
              cursor: "pointer",
              color: activeIndex === index ? "#007aff" : "inherit",
              fontWeight: activeIndex === index ? "bold" : "500",
              paddingBottom: activeIndex === index ? "2px" : "0",
            }}
            onClick={() => handleButtonClick(index)}
          >
            {item.title}
            {activeIndex === index && (
              <div
                className="progress-line d-none d-md-flex"
                style={{
                  width: `${progress}%`,
                  backgroundColor: "#007aff",
                }}
              ></div>
            )}
          </span>
        ))}
      </div>

      <div
        ref={containerRef} // Attach ref to the container
        className="d-flex d-md-none align-items-center justify-content-between overflow-auto gap-2"
        style={{
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
        }} // Ensure horizontal scrolling only
      >
        {carouselData.map((item, index) => (
          <span
            key={index}
            className="rounded-2"
            ref={activeIndex === index ? activeItemRef : null} // Attach ref only to active item
            style={{
              cursor: "pointer",
              whiteSpace: "nowrap",
              background:
                activeIndex === index
                  ? "rgba(23, 119, 215, 0.32)"
                  : "rgba(100, 97, 97, 0.26)",
              padding: "1rem",
              color: activeIndex === index ? "#007aff" : "inherit",
              fontWeight: activeIndex === index ? "bold" : "500",
            }}
            onClick={() => handleButtonClick(index)}
          >
            {item.title}
            {activeIndex === index && (
              <div
                style={{
                  width: `${progress}%`,
                  backgroundColor: "#007aff",
                }}
              ></div>
            )}
          </span>
        ))}
      </div>

      {/* Carousel Content */}
      <div className="carousel-content">
        <div
          className="image-container py-2"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="image-slide"
              style={{ background: item.background, height: "100%" }}
            >
              <div className="carousel-text text-white">
                <h2>{item.title}</h2>
                <p>{item.des1}</p>
                <p>{item.des2}</p>
              </div>
              <img
                className="d-none d-md-flex"
                src={item.img}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimerCarousel;
