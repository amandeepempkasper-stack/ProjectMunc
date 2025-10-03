import React from "react";
import One from "../../assets/HrmsImg/Icons/Comp1.svg";
import Two from "../../assets/HrmsImg/Icons/Comp2.svg";
import Three from "../../assets/HrmsImg/Icons/Comp3.svg";
import Four from "../../assets/HrmsImg/Icons/Comp4.svg";
import Five from "../../assets/HrmsImg/Icons/Comp5.svg";

const HrmsSection4 = () => {
  const features = [
    {
      icon: One,
      text: "Automated payroll and salary slips",
    },
    {
      icon: Two,
      text: "Leave and attendance tracking",
    },
    {
      icon: Three,
      text: "Employee self-service portal",
    },
    {
      icon: Four,
      text: "Performance and appraisal management",
    },
    {
      icon: Five,
      text: "Scalable for SMEs and enterprises",
    },
  ];

  return (
    <div className="bg-[#F0FDFF] py-12">
      <h2 className="text-3xl font-medium text-center text-[#1C2B33] mb-10">
        Why Choose Us
      </h2>

      
      <div className="grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto ">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-start p-4 bg-white hover:bg-[#EFFAFF] rounded-xl shadow-sm hover:shadow-md transition h-full"
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
