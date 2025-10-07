import React, { useState } from "react";
import Payroll from "../../assets/HomeSection/HowHelpYou/payroll.jpg";
import stock from "../../assets/HomeSection/HowHelpYou/stock.svg";
import fees from "../../assets/HomeSection/HowHelpYou/fees.jpg";
import followup from "../../assets/HomeSection/HowHelpYou/followup.jpg";

const HowHelpYou = () => {
  const features = [
    {
      id: 1,
      title: "Manage Payroll with Ease",
      desc: "Handle employee payroll like never before with MUN-C’s HR Management System, a core part of our Business Management Suite (BMS).",
      // knowmore: "Know More",
      image: Payroll,
    },
    {
      id: 2,
      title: "Track Stock in Real Time",
      desc: "Gain full visibility over your inventory with MUN-C’s Inventory Management Software. Monitor stock levels, supplier performance, and product movement in real time.",
      // knowmore: "Know More",
      image: stock,
    },
    {
      id: 3,
      title: "Collect Fees in Seconds",
      desc: "Simplify fee collection with MUN-C’s School Management System (SMS). Parents can payinstantly using integrated online gateways, while schools receive automated receipts and payment confirmations.",
      // knowmore: "Know More",
      image: fees,
    },
    {
      id: 4,
      title: "Never Miss a Follow-Up",
      desc: "Boost your sales and customer engagement using MUN-C’s Lead Management Software (LMS).Automate reminders, assign leads, and track every stage of the sales journey. Stay on top of client calls, follow-ups, and deals.",
      // knowmore: "Know More",
      image: followup,
    },
  ];

  const [active, setActive] = useState(1);

  return (
    <div className=" ">
      <div className="text-center mt-8 sm:mt-8 md:mt-10">
        <h1
          className="
      text-2xl sm:text-3xl md:text-4xl lg:text-4xl
      font-medium text-[#1C2B33] leading-snug
    "
        >
          How Can We Help You? <span className=""></span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-10 sm:px-20 md:px-20 ">
        <div className="flex flex-col divide-y divide-gray-200 w-full">
          {features.map((f) => (
            <div
              key={f.id}
              onMouseEnter={() => setActive(f.id)}
              className="py-3 px-2 sm:py-4 sm:px-4 cursor-pointer transition-all duration-300"
            >
              <div className="flex flex-col space-y-0">
                <h3
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium ${
                    active === f.id ? "text-[#1C2B33]" : "text-[#3E4247]"
                  }`}
                >
                  {f.title}
                </h3>

                {active === f.id && (
                  <>
                    <p className="text-sm sm:text-base md:text-[16px] font-normal text-[#7D7D7D] mt-2 leading-relaxed">
                      {f.desc}
                    </p>
                    {/* <p className="text-[#007AFF] text-xs sm:text-sm font-medium mt-1">
                      {f.knowmore}
                    </p> */}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="
    flex justify-center items-center relative w-full 
    max-w-full sm:max-w-full md:max-w-full 
    h-[300px] sm:h-[420px] md:h-[520px]
  "
        >
          {features.map((f) => (
            <img
              key={f.id}
              src={f.image}
              alt={f.title}
              className={`absolute top-0 left-0 w-full h-full object-contain rounded-lg transition-opacity duration-700 ease-in-out ${
                active === f.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowHelpYou;
