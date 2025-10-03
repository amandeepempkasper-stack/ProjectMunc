import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import medlay from "../../assets/TestimonialLogoImg/medlay.png";
import netario from "../../assets/TestimonialLogoImg/netario.png";
import upbs from "../../assets/TestimonialLogoImg/ups.png";
import blackbug from "../../assets/TestimonialLogoImg/blackbug.png";
import backgroundimg from "../../assets/TestimonialLogoImg/BlueBG.png";

const testimonials = [
  {
    id: 1,
    name: "Black Bug",
    role: "Client Partner",
    text: "MUN-C has completely transformed our HR management software. The HR dashboard makes tracking attendance and leave applications effortless, saving us valuable time.",
    image: "https://i.pravatar.cc/100?img=1",
    logo: blackbug,
  },
  {
    id: 2,
    name: "MedLay International",
    role: "HR Director",
    text: "Managing my team has never been easier! The employee management system and task management software help streamline operations, keeping everyone on the same page.",
    image: "https://i.pravatar.cc/100?img=2",
    logo: medlay,
  },
  {
    id: 3,
    name: "Netario Innovations",
    role: "CTO",
    text: "The automated payroll processing feature ensures accurate salary calculations every time. With seamless integration to the attendance management system, payroll errors are now a thing of the past.",
    image: "https://i.pravatar.cc/100?img=3",
    logo: netario,
  },
  {
    id: 4,
    name: "UPBS",
    role: "Operations Head",
    text: "I love how MUN-C enhances team collaboration. The notice board and birthday reminder features help foster a more connected and engaged workplace.",
    image: "https://i.pravatar.cc/100?img=4",
    logo: upbs,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full max-w-[1920px] mx-auto 
             flex flex-col lg:flex-row items-center justify-between 
             px-6 sm:px-10 lg:px-[217px] py-10 sm:py-[67px] gap-8 lg:gap-[182px] 
             bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="w-full lg:w-[50%] text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
          What Our Client Says !
        </h1>
      </div>

      <div className="relative w-full max-w-[700px]  h-auto min-h-[200px] lg:h-[180px] rotate-3 translate-y-0">
        <div className="absolute inset-0 bg-white rounded-xl shadow-md rotate-7 translate-y-4"></div>
        <div className="absolute inset-0 bg-white rounded-xl shadow-md -rotate-9 translate-y-1"></div>

        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-1 bg-white w-full max-w-[700px] h-44 overflow-hidden min-h-[200px] lg:h-[180px] rounded-xl shadow-xl px-4 sm:px-7 py-1 flex flex-col justify-between"
            >
              <img
                src={testimonials[index].logo}
                alt={`${testimonials[index].name} logo`}
                className="!w-[75px] sm:w-11 h-full object-cover md:mb-2"
              />

              <p className="text-[#5C5C5C] text-xs sm:text-sm font-medium leading-[120%] flex-1">
                {testimonials[index].text}
              </p>

              <div className="flex items-center gap-3 md:mt-2">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <div>
                  <h4 className="font-medium text-sm">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="absolute -top-10 sm:-top-14 right-0 flex gap-2 sm:gap-3">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
