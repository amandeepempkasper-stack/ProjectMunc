import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HrmsHomeImg from "../../assets/HrmsImg/HomeImg.png";
import "./hrms.css";

const HrmsSection1 = () => {
  return (
    <div
      id="header-section"
      className="min-h-screen bg-gradient-to-r from-[#035ACD] to-[#003172] overflow-hidden relative flex items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 gap-8 w-full">
        <div className="text-white flex flex-col justify-start max-w-2xl text-left">
          <div className="space-y-4">
            <p className="py-0.5 px-4 bg-[#E2F1FF] text-left rounded-full w-fit md:mx-0 text-[#00439B] text-xs sm:text-sm md:text-base font-medium">
              Smarter HR | Happier Teams | Seamless Growth
            </p>

            <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              HR Management Software
            </h1>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-gray-100">
              Your people are the heart of your business — and managing them
              should be simple. With MUN-C HR Management Software (HRMS), you
              can take control of your workforce with clarity and confidence.
              From new hires to payroll, performance, and beyond — everything
              runs smoothly through one intelligent platform designed for modern
              businesses.
            </p>
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
