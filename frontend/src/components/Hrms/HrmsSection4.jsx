import React from "react";
import One from "../../assets/HrmsImg/Icons/Comp1.svg";
import Two from "../../assets/HrmsImg/Icons/Comp2.svg";
import Three from "../../assets/HrmsImg/Icons/Comp3.svg";
import Four from "../../assets/HrmsImg/Icons/Comp4.svg";
import Five from "../../assets/HrmsImg/Icons/Comp5.svg";
import "./hrms.css";

const HrmsSection4 = () => {
  const features = [
    {
      icon: One,
      text: "All-in-one Employee Management System — everything from hiring to exit in one dashboard.",
    },
    {
      icon: Two,
      text: "Fully Automated Payroll — fast, accurate, and completely stress-free.",
    },
    {
      icon: Three,
      text: "Real-time Insights — track, analyze, and act instantly.",
    },
    {
      icon: Four,
      text: "Scalable Solution — perfect for small teams or large organizations.",
    },
    {
      icon: Five,
      text: "Secure Cloud-Based HR System — protect employee data with enterprise-grade security.",
    },
  ];

  return (
    <div className="bg-[#F0FDFF] py-12">
      <h2 className="text-3xl font-medium text-center text-[#1C2B33] mb-10">
        Why Businesses Choose MUN-C HRMS
      </h2>

      <div className="grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-start p-4 bg-white rounded-xl shadow-sm transition-all duration-300 hover h-full "
          >
            <div className="p-2 bg-[#F7F7F7] hover:bg-white rounded-xl mb-4">
              <img
                src={item.icon}
                alt={item.text}
                className="w-6 h-6 object-cover"
              />
            </div>
            <p className="text-sm font-normal text-[#3E4247] leading-[120%]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HrmsSection4;
