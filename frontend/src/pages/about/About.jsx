import React from "react";
import AboutImg1 from "../../assets/AboutImg/About1.jpg";
import AboutImg2 from "../../assets/AboutImg/About2.png";

const About = () => {
  return (
    <div className="bg-[#F0FDFF] mt-12">
      <div className="space-y-16 px-6 sm:px-10 lg:px-20 xl:px-40 py-12 lg:py-20">
        
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-[39px]">
          <div className="text-[#363636] w-full max-w-[657px]">
            <div className="space-y-5 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] leading-[130%] text-[#1C2B33] font-medium">
                About
              </h1>
              <p className="text-sm sm:text-base lg:text-[16px]">
                Kasper Infotech Private Limited. is the proud developer of
                MUN-C, our flagship business management brand.
              </p>
              <p className="text-sm sm:text-base lg:text-[16px]">
                As a technology-driven company, we focus on building scalable,
                secure, and user-friendly solutions that help businesses thrive
                in the digital era.
              </p>
              <p className="text-sm sm:text-base lg:text-[16px]">
                With MUN-C BMS (Business Management Suite), we bring all
                essential management systems under one powerful, integrated
                platform.
              </p>
            </div>
          </div>

          <div className="w-full max-w-[598px]">
            <img src={AboutImg1} alt="About Kasper" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-[85px]">
          <div className="w-full max-w-[538px]">
            <img src={AboutImg2} alt="Our Brand Story" className="w-full h-auto rounded-lg" />
          </div>

          <div className="w-full max-w-[657px]">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] leading-[130%] text-[#1C2B33] font-medium">
                Our Brand Story
              </h1>
              <p className="text-sm sm:text-base lg:text-[16px]">
                In today’s fast-paced digital world, MUN-C carries forward that
                same spirit, acting as a trusted digital manager that simplifies
                complex operations with clarity, intelligence, and fairness.
              </p>
              <p className="text-sm sm:text-base lg:text-[16px]">
                MUN-C is not just software—it is a brand rooted in history and
                inspired by the ancient word “Munshi ji”. A Munshi ji was a
                respected figure known for wisdom, discipline, and the art of
                managing people and trade fairly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
