import React from "react";
import Five from "../../assets/LmsImg/Five.png";
import Six from "../../assets/LmsImg/Six.png";

const LmsSec3_3 = () => {
  const features = [
     {
    blue: "Recruitment &",
    black: "Onboarding",
    desc: "Smooth hiring workflows.",
    img: Five,
    align: "left",
  },
  {
    blue: "Self-Service",
    black: "Portal",
    desc: "Empower employees with access to their info.",
    img: Six,
     align: "right",
  }
  ];

  return (
    <div className="bg-[#F0FDFF] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto py-6 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition
              ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              
              <img
                src={item.img}
                alt={item.blue + " " + item.black}
                className="w-40 h-32 sm:w-48 sm:h-40 md:w-56 md:h-44 lg:w-64 lg:h-52 xl:w-72 xl:h-60 2xl:w-80 2xl:h-64 object-contain"
              />

             
              <div className="mt-4 sm:mt-0 sm:px-4 lg:px-6 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-medium leading-snug">
                  <span className="text-[#007AFF]">{item.blue} </span>
                  <span className="text-gray-900">{item.black}</span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-3xl text-[#7D7D7D] mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LmsSec3_3;
