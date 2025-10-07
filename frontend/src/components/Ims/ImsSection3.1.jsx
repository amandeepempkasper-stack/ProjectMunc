import React from "react";
import Five from "../../assets/ImsImg/five.png";
import Six from "../../assets/ImsImg/six.png";

const FeaturesGrid = () => {
  const features = [
    {
      blue: "Smart Reports &",
      black: "Analytics",
      desc: "Understand your business better through visual dashboards and performance analytics.",
      img: Five,
    },
    {
      blue: "GST & Invoice",
      black: "Management",
      desc: "Generate tax-ready invoices in seconds with built-in GST compliance.",
      img: Six,
    },
  ];

  return (
    // <div className="bg-[#F0FDFF] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-20 2xl:px-40">
    <div className="max-w-7xl mx-auto py-0 px-0 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 lg:p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition 
              ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            {/* ✅ Image */}
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

           
            <div className="mt-4 sm:mt-0 sm:px-4 lg:px-6 text-center sm:text-left">
              <h3
                className="font-medium leading-snug 
                               text-lg sm:text-xl md:text-2xl 
                               lg:text-2xl xl:text-4xl 2xl:text-5xl"
              >
                <span className="text-[#007AFF]">{item.blue} </span>
                <span className="text-gray-900">{item.black}</span>
              </h3>
              <p
                className="mt-2 
                              text-sm sm:text-base md:text-lg 
                              lg:text-lg xl:text-2xl 2xl:text-3xl 
                              text-[#7D7D7D]"
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default FeaturesGrid;
