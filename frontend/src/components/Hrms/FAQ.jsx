import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [active, setActive] = useState(null);
  const faqs = [
    {
      id: 1,
      question: "Q1. How does MUN-C HRMS help my business?",
      answer:
        "It automates HR operations, saving time and cost while improving accuracy and employee satisfaction.",
    },
    {
      id: 2,
      question: "Q2. Can payroll and attendance work together?",
      answer:
        "Yes. Payroll is directly linked with attendance data, ensuring accurate payouts every month.",
    },
    {
      id: 3,
      question: "Q3. Does MUN-C support remote or hybrid teams?",
      answer:
        "Absolutely. Track attendance, leaves, and performance seamlessly — even for remote employees.",
    },
    {
      id: 4,
      question: "Q4. Is the system secure?",
      answer:
        "Yes. MUN-C uses encrypted cloud technology to keep your employee data safe and private.",
    },
    {
      id: 5,
      question: "Q5. Can it integrate with other MUN-C modules?",
      answer:
        "Yes. It connects with our Inventory, Lead, and School Management modules — giving you a complete Business Management Suite (BMS) experience.",
    },
  ];

  return (
    <>
      <div className="max-w-3xl !px-4 mx-auto py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium text-center leading-[120%] mb-6">
        Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((f) => (
            <div
              key={f.id}
              onMouseEnter={() => setActive(f.id)}
              onMouseLeave={() => setActive(null)}
              className="py-2 px-2 cursor-pointer transition-all duration-300 border-b border-[#AEAEAE]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#1C2B33]">
                  {f.question}
                </h3>

                <FaChevronDown
                  className={`text-[#1C2B33] transform transition-transform duration-300 ${
                    active === f.id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === f.id ? "max-h-30 mt-1" : "max-h-0"
                }`}
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-normal text-[#3E4247]">
                  {f.answer}
                </p>
                {f.knowmore && (
                  <p className="text-[#007AFF] text-xs sm:text-sm md:text-base font-medium mt-1">
                    {f.knowmore}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
