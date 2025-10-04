import React from "react";

const HrmsSection2 = () => {
  return (
    <div className="bg-[#F0FDFF] py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 ">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
        {/* Heading */}
        <h1
          className="
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
             tracking-tight !leading-[120%]
            font-semibold text-[#3E4247]
          "
        >
          Manage employees, track attendance, handle leaves, and improve
          workforce productivity in one system.
        </h1>

        {/* Subtext */}
        <p
          className="
            mt-3 sm:mt-4 md:mt-6 lg:mt-8
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
            leading-relaxed
            font-normal text-[#3E4247]
          "
        >
          Simplify HR processes from payroll to performance.
        </p>
      </div>
    </div>
  );
};

export default HrmsSection2;
