import React from "react";
import ImsSection3_1 from "./ImsSection3.1";
import ImsSection3_2 from "./ImsSection3.2";
import One from "../../assets/ImsImg/one.jpg";
import Two from "../../assets/ImsImg/two.png";

const FeaturesGrid = () => {
  const features = [
    {
      blue: "Real-Time",
      black: "Stock Tracking",
      desc: "Know your stock anytime.",
      img: One,
      align: "left",
    },
    {
      blue: "Purchase & Sales",
      black: "Management",
      desc: "Manage suppliers and customers easily.",
      img: Two,
      align: "right",
    },
  ];

  return (
    <>
    <div className="bg-[#F0FDFF] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-20 2xl:px-40">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto py-6 sm:py-12 lg:py-10">
        
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[36px] text-[#1C2B33] text-center mb-8">
          Key Features
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              
              <div className="mt-4 sm:mt-0 sm:px-4 lg:px-6 text-center sm:text-left">
                <h3 className="font-medium leading-snug text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                  <span className="text-[#007AFF]">{item.blue} </span>
                  <span className="text-gray-900">{item.black}</span>
                </h3>
                <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-3xl text-[#7D7D7D]">
                  {item.desc}
                </p>
              </div>

              <img
                src={item.img}
                alt={item.blue + " " + item.black}
                className="object-contain 
                           w-32 h-24 
                           sm:w-40 sm:h-32 
                           md:w-52 md:h-40 
                           lg:w-64 lg:h-48 
                           xl:w-72 xl:h-56 
                           2xl:w-80 2xl:h-64"
              />
            </div>
          ))}
        </div>

        
      </div>
      <ImsSection3_2 />
      <ImsSection3_1 />
    </div>
      </>
  );
};

export default FeaturesGrid;
