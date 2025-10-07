import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HomeLms from "../../assets/LmsImg/Lead Attracting.svg";
const LmsSec1 = () => {
  return (
    <>
      <div
        id="header-section"
        className="min-h-screen bg-gradient-to-r from-[#035ACD] to-[#003172] overflow-hidden relative flex items-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 gap-8 w-full">
          <div className="text-white flex flex-col justify-start max-w-2xl text-left">
            <div className="space-y-4">
              {/* <div className="py-0.5 px-4 bg-[#E2F1FF]  rounded-full w-fit mx-auto md:mx-0"> */}
              <p className="text-[#00439B] py-0.5 px-4 bg-[#E2F1FF]  rounded-full w-fit  md:mx-0 text-xs sm:text-sm md:text-base font-medium">
                Turn Every Inquiry Into a Conversion Opportunity
              </p>
              {/* </div> */}
              <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                Smart Lead Management System (LMS)
              </h1>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-gray-100">
                Our LMS is part of the MUN-C Business Management Suite (BMS) —
                connecting marketing, sales, and customer data seamlessly. From
                the first click to the final deal, every lead stays organized,
                nurtured, and ready to convert. That’s why MUN-C brings you a
                Smart Lead Management System (LMS) — an intelligent, all-in-one
                solution that helps you capture, track, and convert leads
                faster.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src={HomeLms}
              alt="HomeLms"
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
    </>
  );
};

export default LmsSec1;
