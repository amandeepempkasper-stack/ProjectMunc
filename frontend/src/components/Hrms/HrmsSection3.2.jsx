import React from "react";
import Three from "../../assets/HrmsImg/BigImg/Three.svg";
import Four from "../../assets/HrmsImg/BigImg/Four.png";

const HrmsSection3_2 = () => {
  const features = [
    {
      blue: " Attendance & ",
      black: "Leave Intelligence",
      desc: "Get real-time visibility into who’s working, who’s on leave, and who’s late.",
      img: Three,
      align: "left",
    },
    {
      blue: "Performance &",
      black: "Growth Insights",
      desc: "Turn performance reviews into growth opportunities.",
      img: Four,
      align: "right",
    },
  ];

  return (
    <>
      <div className="bg-[#F0FDFF] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                
                {item.align === "left" && (
                  <img
                    src={item.img}
                    alt={item.blue + " " + item.black}
                    className="w-40 h-32 sm:w-48 sm:h-40 md:w-56 md:h-44 lg:w-64 lg:h-52 xl:w-72 xl:h-60 2xl:w-80 2xl:h-64 object-contain"
                  />
                )}

                
                <div className="mt-4 sm:mt-0 sm:px-4 lg:px-6 text-center sm:text-left">
                  <h3 className="text-[24px] md:text-[32px] font-medium leading-tight">
                    <span className="text-[#007AFF]">{item.blue} </span>
                    <span className="text-gray-900">{item.black}</span>
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-[#7D7D7D] mt-2">{item.desc}</p>
                </div>

                
                {item.align === "right" && (
                  <img
                    src={item.img}
                    alt={item.blue + " " + item.black}
                    className="w-40 h-32 sm:w-48 sm:h-40 md:w-56 md:h-44 lg:w-64 lg:h-52 xl:w-72 xl:h-60 2xl:w-80 2xl:h-64 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default HrmsSection3_2;
