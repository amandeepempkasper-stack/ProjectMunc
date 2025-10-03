import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Q1. What is School Management Software?",
      answer:
        "School Management Software is a digital solution that helps schools and colleges manage their daily operations such as admissions, attendance, exams, fee collection, and communication in a single platform.",
      // knowmore: "Know More",
    },
    {
      id: 2,
      question: "Q2. Who can use this software?",
      answer:
        "This software can be used by school administrators, teachers, students, and parents for managing and accessing school-related information.",
      // knowmore: "Know More",
    },
    {
      id: 3,
      question: "Q3. Does it support online fee payments?",
      answer:
        "Yes, it supports online fee collection so parents and students can make secure payments easily.",
      // knowmore: "Know More",
    },
    {
      id: 4,
      question: "Q4. Can parents and teachers access it?",
      answer:
        "Yes, both parents and teachers can access it to stay updated on student progress, attendance, and other academic details.",
      // knowmore: "Know More",
    },
    {
      id: 5,
      question: "Q5. Is student data secure?",
      answer:
        "Yes, the system uses encrypted data access and strong security measures to ensure student data remains safe.",
      // knowmore: "Know More",
    },
  ];

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
