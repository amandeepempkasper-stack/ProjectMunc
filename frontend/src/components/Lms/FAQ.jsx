import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Q1. What is a Lead Management System?",
      answer:
        "It is a tool that helps businesses capture, track, and convert leads into customers.",
      // knowmore: "Know More",
    },
    {
      id: 2,
      question: "Q2. Can it capture leads from multiple sources?",
      answer:
        "Yes, it integrates with websites, campaigns, and social media to collect leads automatically.",
      // knowmore: "Know More",
    },
    {
      id: 3,
      question: "Q3. How does it help sales teams?",
      answer:
        "It assigns leads, sets reminders, and tracks progress in a sales pipeline to improve conversions.",
      // knowmore: "Know More",
    },
    {
      id: 4,
      question: "Q4. Will I get reports on performance?",
      answer:
        "Yes, it provides detailed analytics on lead sources, conversions, and sales performance.",
      // knowmore: "Know More",
    },
    {
      id: 5,
      question: "Q5. Can I integrate it with other tools?",
      answer:
        "Yes, it integrates with CRM, marketing platforms, and communication tools to streamline workflows.",
      // knowmore: "Know More",
    },
  ];

  const [active, setActive] = useState(null);
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium text-center leading-[120%] mb-6">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div
            key={f.id}
            onMouseEnter={() => setActive(f.id)}
            onMouseLeave={() => setActive(null)}
            className={`py-4 px-4 cursor-pointer transition-all duration-300 border-b border-[#AEAEAE]`}
          >
            <div className="flex items-center justify-between">
              {/* Question */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#1C2B33]">
                {f.question}
              </h3>

              {/* Arrow */}
              <FaChevronDown
                className={`text-[#1C2B33] transform transition-transform duration-300 ${
                  active === f.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Answer (expand on hover) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === f.id ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-normal text-[#3E4247]">
                {f.answer}
              </p>
              <p className="text-[#007AFF] text-xs sm:text-sm md:text-base font-medium mt-1">
                {f.knowmore}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
