import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [active, setActive] = useState(null);
  const faqs = [
    {
      id: 1,
      question: "Q1. What is HRMS?",
      answer:
        "HRMS (Human Resource Management System) is a software that automates employee management, payroll, leaves, attendance, performance, and more.",
    },
    {
      id: 2,
      question: "Q2. Can it handle payroll automatically?",
      answer:
        "Yes, HRMS can calculate and process payroll automatically, saving time and reducing errors.",
    },
    {
      id: 3,
      question: "Q3. Does it support attendance tracking?",
      answer:
        "Yes, employees can check in/out, and attendance records can be managed digitally via biometric, web, or mobile devices.",
    },
    {
      id: 4,
      question: "Q4. Can employees access their details?",
      answer:
        "Yes, HRMS provides employees with self-service portals where they can access payslips, leave balance, and personal information.",
    },
    {
      id: 5,
      question: "Q5. Is it suitable for small businesses?",
      answer:
        "Yes, HRMS is scalable and fits businesses of all sizes, from startups to large enterprises.",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium text-center leading-[120%] mb-6">
          FAQs
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
