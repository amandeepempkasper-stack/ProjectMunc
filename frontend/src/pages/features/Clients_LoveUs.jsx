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
                Built for,
                <span className="text-[#007AFF]"> simplicity </span>
                designed for you.
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                Our software removes the clutter and confusion, giving you an
                intuitive experience that makes managing your business
                effortless.
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
                Premium features,
                <span className="text-[#007AFF]"> pocket-friendly </span>
                pricing.
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                Save time, reduce errors, and manage your business better—with
                software that’s as affordable as it is powerful.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="ring-2 ring-black/10 rounded-xl bg-white flex flex-col md:flex-row justify-between items-center gap-10 p-8">
            <div className="w-full md:w-1/2">
              <p className="font-medium text-2xl md:text-[28px] text-[#3E4247] leading-snug">
                Smart tools that
                <span className="text-[#007AFF]"> save money and minutes.</span>
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                Our platform helps you lower expenses and boost efficiency,
                keeping your business ahead of the curve.
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
                for every part of your business.
              </p>
              <p className="text-[#7D7D7D] leading-[150%] font-normal mt-2">
                From HR to inventory, leads to school management—manage it all
                without switching between multiple tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients_LoveUs;
