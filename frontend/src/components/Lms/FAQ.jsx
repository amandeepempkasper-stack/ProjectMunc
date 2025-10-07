import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Q1. What is a Lead Management System (LMS)?",
      answer:
        "It’s a software tool that helps you capture, track, and convert potential customers into paying clients.",
      // knowmore: "Know More",
    },
    {
      id: 2,
      question: "Q2. Can it capture leads from multiple sources?",
      answer:
        "Yes — MUN-C LMS collects leads from your website, campaigns, social media, and offline events in one place.",
      // knowmore: "Know More",
    },
    {
      id: 3,
      question: "Q3. How does it help sales teams?",
      answer:
        "It assigns leads automatically, reminds them of follow-ups, and shows live status — making your sales process faster and more organized.",
      // knowmore: "Know More",
    },
    {
      id: 4,
      question: "Q4. Will I get reports on performance?",
      answer:
        "Absolutely. You can track conversion rates, lead sources, sales progress, and team efficiency using visual analytics.",
      // knowmore: "Know More",
    },
    {
      id: 5,
      question: "Q5. Can it integrate with other tools?",
      answer:
        "Yes — MUN-C LMS integrates seamlessly with your CRM, marketing, and communication tools as part of the Business Management Suite (BMS).",
      // knowmore: "Know More",
    },
  ];

  const [active, setActive] = useState(null);
  return (
    <div className="max-w-3xl !px-4 mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium text-center leading-[120%] mb-6">
   Frequently Asked Questions
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
