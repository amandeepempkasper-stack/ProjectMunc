import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Q1. What is School Management Software?",
      answer:
        "It’s a digital platform that automates school operations — from admissions, attendance, and exams to fee collection and communication.",
      // knowmore: "Know More",
    },
    {
      id: 2,
      question: "Q2. Who can use this software?",
      answer:
        "Administrators, teachers, parents, and even students can use it through their respective login portals.",
      // knowmore: "Know More",
    },
    {
      id: 3,
      question: "Q3. Does it support online fee payments?",
      answer:
        "Yes, MUN-C supports secure online fee collection with instant receipts and payment tracking.",
      // knowmore: "Know More",
    },
    {
      id: 4,
      question: "Q4. Can parents and teachers access it?",
      answer:
        "Absolutely. The system includes dedicated portals for teachers and parents to ensure seamless updates and communication.",
      // knowmore: "Know More",
    },
    {
      id: 5,
      question: "Q5. Is student data secure?",
      answer:
        "Yes, All data is encrypted, stored safely on the cloud, and accessible only through role-based permissions.",
      // knowmore: "Know More",
    },
  ];

  return (
    <div className="max-w-3xl !px-4 mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium text-center leading-[120%] mb-6">
    Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div
            key={f.id}
            onMouseEnter={() => setActive(f.id)}
            onMouseLeave={() => setActive(null)}
            className={`py-2 px-2 cursor-pointer transition-all duration-300 border-b border-[#AEAEAE]`}
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
