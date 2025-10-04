import React from "react";
import ImsImg from "../../assets/ImsImg/IMS billing.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ImsSection2 from "./ImsSection2";
import ImsSection3 from "./ImsSection3";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import Contact from "../Contact";

const ImsProduct = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#035ACD] to-[#003172] overflow-hidden relative flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 gap-8 w-full">
          <div className="text-white flex flex-col justify-start max-w-2xl text-left">
            <div className="space-y-4">
              {/* <div className="py-0.5 px-4 bg-[#E2F1FF] text-center rounded-full w-fit mx-auto md:mx-0"> */}
              <p className="text-[#00439B] text-xs sm:text-sm md:text-base font-medium py-0.5 px-4 bg-[#E2F1FF] text-center rounded-full w-fit md:mx-0">
                Simplify Stock, Sales & Supply Chain
              </p>
              {/* </div> */}
              <h1 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                Smart Inventory Management System
              </h1>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-gray-100">
                Manage your inventory with ease using our powerful IMS. Track
                stock in real time, automate sales & purchase, manage
                warehouses, suppliers, invoices, and reports — all in one
                platform. Save time, reduce costs, and grow your business
                smarter.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src={ImsImg}
              alt="ImsImg"
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

      {/* Next Sections */}
      <ImsSection2 />
      <ImsSection3 />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </>
  );
};

export default ImsProduct;
