import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HrmsHomeImg from "../../assets/HrmsImg/HomeImg.png";

const HrmsSection1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#035ACD] to-[#003172] overflow-hidden relative flex items-center">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 gap-8 w-full">

        <div className="text-white flex flex-col justify-center max-w-2xl text-center md:text-left">

          <div className="space-y-4">
            <div className="py-2 px-4 bg-[#E2F1FF] text-center rounded-full w-fit mx-auto md:mx-0">
              <p className="text-[#00439B] text-xs sm:text-sm md:text-base font-medium">
                Simplify HR, Payroll & Employee Management
              </p>
            </div>

            <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              HR Management Software
            </h1>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-gray-100">
              Manage your workforce smarter with our all-in-one HR Management
              Software (HRMS). From attendance tracking and payroll processing
              to leave management, performance reviews, and employee records —
              everything is automated in one platform. Save time, cut costs, and
              keep your team engaged with ease.
            </p>
            {/* 
            <div className="mt-6 sm:mt-8 flex flex-col items-center md:items-start">
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#00439B] font-medium rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 text-sm sm:text-base">
                Try for free
                <FaArrowRightLong />
              </button>
              <i className="text-[10px] sm:text-xs mt-2 text-white">
                *No credit card required.
              </i>
            </div> */}
          </div>
        </div>

        <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={HrmsHomeImg}
            alt="HrmsHomeImg"
            className="w-3/4 sm:w-2/3 md:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          window.scrollTo({
            top: window.scrollY + 500,
            behavior: "smooth",
          });
        }}
      >
        <ArrowDown
          size={32}
          className="sm:size-15 text-white"
          strokeWidth={2}
        />
      </motion.div>
    </div>
  );
};

export default HrmsSection1;
