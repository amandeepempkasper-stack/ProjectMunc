import React from "react";
import One from "../../assets/LmsImg/Icons/One.svg";
import Two from "../../assets/LmsImg/Icons/Two.svg";
import Three from "../../assets/LmsImg/Icons/Three.svg";
import Four from "../../assets/LmsImg/Icons/Four.svg";
import Five from "../../assets/LmsImg/Icons/Five.svg";

const LmsSec4 = () => {
  const features = [
    {
      icon: One,
      text: "Capture leads from multiple channels — all in one place",
    },
    {
      icon: Two,
      text: "Automated lead assignment and notifications",
    },
    {
      icon: Three,
      text: "Smart dashboards with conversion analytics",
    },
    {
      icon: Four,
      text: "AI-driven insights for smarter decisions",
    },
    {
      icon: Five,
      text: "Fully integrated with the MUN-C Business Management Suite (BMS)",
    },
  ];

  return (
    <>
      <div className="bg-[#F0FDFF] py-12">
        <h2 className="text-3xl font-medium text-center text-[#1C2B33] mb-10">
        Why Businesses Choose MUN-C LMS
        </h2>

        
        <div className="grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto  ">
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
    </>
  );
};

export default LmsSec4;
