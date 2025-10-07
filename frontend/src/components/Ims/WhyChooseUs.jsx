import React from "react";
import Comp1 from "../../assets/ImsImg/ChooseUsImg/Component1.svg";
import Comp2 from "../../assets/ImsImg/ChooseUsImg/Component2.svg";
import Comp3 from "../../assets/ImsImg/ChooseUsImg/Component3.svg";
import Comp4 from "../../assets/ImsImg/ChooseUsImg/Component4.svg";
import Comp5 from "../../assets/ImsImg/ChooseUsImg/Component5.svg";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      icon: Comp1,
      title: "Unified Control: Manage Purchases, Sales, and Stock from one dashboard.",
    },
    {
      icon: Comp2,
      title: "Real-Time Updates: Always know what’s in stock — No Surprises.",
    },
    {
      icon: Comp3,
      title: "Multi-Warehouse Ready: Perfect for retail chains and manufacturers.",
    },
    {
      icon: Comp4,
      title: " Automation Built-In: From billing to reporting, everything runs seamlessly.",
    },
    {
      icon: Comp5,
      title: "GST-Compliant Invoicing: Stay tax-ready and audit-safe.",
    },
  ];

  return (
    <div className="bg-[#F0FDFF] py-12">
      <h2 className="text-3xl font-medium text-center text-[#1C2B33] mb-10">
       Why Choose MUN-C IMS
      </h2>

      
      <div className="grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto ">
        {whyChooseUs.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-start p-4 bg-white hover:bg-[#EFFAFF] rounded-xl shadow-sm hover:shadow-md transition h-full"
          >
            {/* Icon container */}
            <div className="p-2 bg-[#F7F7F7] hover:bg-white rounded-xl mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-6 h-6 object-cover"
              />
            </div>

            {/* Title */}
            <p className="text-sm font-normal text-[#3E4247] leading-[120%]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
