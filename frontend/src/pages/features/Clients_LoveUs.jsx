import React from "react";
import simplicityImg from "../../assets/HomeSection/ClientsUs/simplicity.jpg";
import pocketFriendly from "../../assets/HomeSection/ClientsUs/pocketFriendly.jpg";
import SaveMoney from "../../assets/HomeSection/ClientsUs/SaveMoney.jpg";
import onePlatfrom from "../../assets/HomeSection/ClientsUs/onePlatfrom.jpg";

const Clients_LoveUs = () => {
  return (
    <div className="my-10">
      <div className="bg-[#F0FDFF] pt-[50px] pb-[32px] px-6 md:px-24 lg:px-24px xl:px-24">
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <h1
            className="
      text-2xl sm:text-3xl md:text-4xl lg:text-4xl
      font-medium text-[#1C2B33] leading-snug
    "
          >
            Why Our Clients <span className="">Love Us?</span>
          </h1>
        </div>

        <div className="flex flex-col gap-[16px] mt-10">
          {/* 1 */}
          <div className="ring-2 ring-black/10 rounded-xl bg-white flex flex-col md:flex-row justify-between items-center gap-10 p-8">
            <div className="w-full md:w-1/2">
              <p className="font-medium text-2xl md:text-[28px] text-[#3E4247] leading-snug">
                Built for,{" "}
                <span className="text-[#007AFF]">simplicity </span>
                designed for results
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                Our Business Management Suite (BMS) eliminates clutter and
                confusion with an easy-to-navigate interface that feels natural
                for every user. Whether you’re managing HR, inventory, or school
                operations, everything is organized, responsive, and
                effortlessly accessible.
              </p>
            </div>
            <img
              className="w-full max-w-[280px] h-auto object-contain md:scale-x-[-1]"
              src={simplicityImg}
              alt="simplicity"
            />
          </div>

          {/* 2 */}
          <div className="ring-2 ring-black/10 rounded-xl bg-white flex flex-col md:flex-row justify-between items-center gap-10 p-8">
            <img
              className="w-full max-w-[280px] h-auto object-contain md:scale-x-[-1]"
              src={pocketFriendly}
              alt="pocket-friendly"
            />
            <div className="w-full md:w-1/2">
              <p className="font-medium text-2xl md:text-[28px] text-[#3E4247] leading-snug">
                Premium features, at
                <span className="text-[#007AFF]"> pocket-friendly </span>
                pricing
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                We believe advanced technology shouldn’t come at a premium cost.
                MUN-C delivers enterprise-grade tools—including payroll
                automation, inventory tracking, analytics, and lead
                management—at a price that fits businesses of all sizes. You get
                the power of a complete BMS without the heavy financial burden
                of multiple subscriptions.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="ring-2 ring-black/10 rounded-xl bg-white flex flex-col md:flex-row justify-between items-center gap-10 p-8">
            <div className="w-full md:w-1/2">
              <p className="font-medium text-2xl md:text-[28px] text-[#3E4247] leading-snug">
                Smart tools that
                <span className="text-[#007AFF]"> save money and minutes</span>
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                Every click in MUN-C is designed to make your day more
                productive. From auto-generated reports and AI-driven insights
                to real-time notifications, our platform helps reduce human
                errors, lower operational costs, and improve accuracy across
                departments.
              </p>
            </div>
            <img
              className="w-full max-w-[280px] h-auto object-contain md:scale-x-[-1]"
              src={SaveMoney}
              alt="save-money"
            />
          </div>

          {/* 4 */}
          <div className="ring-2 ring-black/10 rounded-xl bg-white flex flex-col md:flex-row justify-between items-center gap-10 p-8">
            <img
              className="w-full max-w-[320px] h-auto object-contain md:scale-x-[-1]"
              src={onePlatfrom}
              alt="one-platform"
            />
            <div className="w-full md:w-1/2">
              <p className="font-medium text-2xl md:text-[28px] text-[#3E4247] leading-snug">
                <span className="text-[#007AFF]"> One platform </span>
                for every part of your business
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                No more switching between apps or juggling multiple dashboards.
                MUN-C connects your HR, inventory, lead, and school management
                systems into one unified ecosystem. Manage payrolls, admissions,
                leads, and reports—all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients_LoveUs;
