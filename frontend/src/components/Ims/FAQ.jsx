import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Q1. What is an Inventory Management System?",
      answer:
        "An Inventory Management System helps businesses track stock, manage purchases & sales, and streamline warehouse operations in real time.",
      knowmore: "Know More",
    },
    {
      id: 2,
      question: "Q2. Can it manage multiple warehouses?",
      answer:
        "Yes, it supports multi-location warehouse management and stock transfers easily.",
      // knowmore: "Know More",
    },
    {
      id: 3,
      question: "Q3. Does it support barcode scanning?",
      answer:
        "Yes, barcode and QR code scanning make stock entry and billing faster and more accurate.",
      // knowmore: "Know More",
    },
    {
      id: 4,
      question: "Q4. Can I generate invoices and GST reports?",
      answer:
        "Yes, the system can generate GST-compliant invoices and financial reports instantly.",
      // knowmore: "Know More",
    },
    {
      id: 5,
      question: "Q5. Is it suitable for small businesses?",
      answer:
        "Yes, it is scalable and fits businesses of all sizes, from SMEs to enterprises.",
      // knowmore: "Know More",
    },
    {
      id: 6,
      question: "Q6. Will I get alerts for low stock?",
      answer:
        "Yes, the system notifies you with automated alerts when stock levels drop below the threshold.",
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
