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
    role: "Client Black Bug",
    text: "MUN-C has completely transformed our HR management software. The HR dashboard makes tracking attendance and leave applications effortless, saving us valuable time.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    logo: blackbug,
  },
  {
    id: 2,
    name: "MedLay International",
    role: "Mohd. Juned Hasni ",
    text: "Managing my team has never been easier! The employee management system and task management software help streamline operations, keeping everyone on the same page.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    logo: medlay,
  },
  {
    id: 3,
    name: "Netario Innovations",
    role: "Kaushal Kumar",
    text: "The automated payroll processing feature ensures accurate salary calculations every time. With seamless integration to the attendance management system, payroll errors are now a thing of the past.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    logo: netario,
  },
  {
    id: 4,
    name: "UPBS",
    role: "Mr. Pulkit",
    text: "I love how MUN-C enhances team collaboration. The notice board and birthday reminder features help foster a more connected and engaged workplace.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
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
      className="
    relative w-full max-w-[1920px] mx-auto
    flex flex-col lg:flex-row items-center justify-between
    px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
    py-10 sm:py-14 md:py-16
    gap-8 lg:gap-24
    bg-cover bg-center bg-no-repeat
  "
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      {/* Left Title Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
        <h1
          className="
        font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px]
        text-white leading-tight tracking-tight
      "
        >
          What Our Clients Say!
        </h1>
      </div>

      {/* Testimonial Card Section */}
      <div
        className="
      relative w-full max-w-full md:max-w-[600px] lg:max-w-[680px] xl:max-w-[750px]
      h-auto min-h-[220px] lg:min-h-[200px]
      rotate-0 md:rotate-3 translate-y-0
    "
      >
        {/* Layered background cards */}
        <div
          className="
        absolute inset-0 bg-white rounded-xl shadow-md
        rotate-6 translate-y-4 block
      "
        ></div>
        <div
          className="
        absolute inset-0 bg-white rounded-xl shadow-md
        -rotate-4 translate-y-5 block
      "
        ></div>

        {/* Animated Foreground Card */}
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, rotate: -5, scale: 0.95 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="
            absolute inset-0 bg-white
            w-full h-max
            rounded-xl shadow-xl
            px-4 sm:px-6 md:px-8
            flex flex-col justify-between
            overflow-hidden
          "
            >
              {/* Logo */}
              <img
                src={testimonials[index].logo}
                alt={`${testimonials[index].name} logo`}
                className="w-12 h-auto py-2 object-contain"
              />

              {/* Text */}
              <p
                className="
              text-[#5C5C5C]
              text-sm sm:text-base md:text-[15px]
              font-medium leading-tight 
              mb-4 flex-1
            "
              >
                {testimonials[index].text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 ">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div className="flex flex-col text-left">
                  <h4 className="font-medium text-sm sm:text-base">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div
          className="
        absolute -top-10 sm:-top-14 right-2 flex gap-2 sm:gap-3
        z-20
      "
        >
          <button
            onClick={prevSlide}
            className="
          bg-white/90 backdrop-blur p-2 rounded-full shadow-md
          hover:bg-gray-100 transition
        "
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="
          bg-white/90 backdrop-blur p-2 rounded-full shadow-md
          hover:bg-gray-100 transition
        "
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
