import React from "react";
import "../../CustomCss/Slider.css";
import MeetTeam1 from "../../assets/HomeSection/MeetTeamImg/_DSF4896.JPG";
import MeetTeam2 from "../../assets/HomeSection/MeetTeamImg/_DSF4905.JPG";
import MeetTeam3 from "../../assets/HomeSection/MeetTeamImg/_DSF4909.JPG";
import MeetTeam4 from "../../assets/HomeSection/MeetTeamImg/_DSF4977.JPG";
import MeetTeam5 from "../../assets/HomeSection/MeetTeamImg/_DSF4981.JPG";
import MeetTeam6 from "../../assets/HomeSection/MeetTeamImg/_DSF4983.JPG";
import MeetTeam7 from "../../assets/HomeSection/MeetTeamImg/_DSF5039.JPG";
import MeetTeam8 from "../../assets/HomeSection/MeetTeamImg/_DSF5075.JPG";
import MeetTeam9 from "../../assets/HomeSection/MeetTeamImg/_DSF5089.JPG";
import MeetTeam10 from "../../assets/HomeSection/MeetTeamImg/_DSF5119.JPG";
import MeetTeam11 from "../../assets/HomeSection/MeetTeamImg/_DSF5176.JPG";
import MeetTeam12 from "../../assets/HomeSection/MeetTeamImg/_DSF5224.JPG";
import MeetTeam13 from "../../assets/HomeSection/MeetTeamImg/_DSF5298.JPG";
import MeetTeam14 from "../../assets/HomeSection/MeetTeamImg/_DSF5317.JPG";
import MeetTeam15 from "../../assets/HomeSection/MeetTeamImg/_DSF5348.JPG";
import MeetTeam16 from "../../assets/HomeSection/MeetTeamImg/_DSF5538.JPG";
import MeetTeam17 from "../../assets/HomeSection/MeetTeamImg/_DSF5583.JPG";
import MeetTeam18 from "../../assets/HomeSection/MeetTeamImg/_DSF5630.JPG";
import MeetTeam19 from "../../assets/HomeSection/MeetTeamImg/_DSF5301.JPG";

const MeetTeam = () => {
  const images = [
    MeetTeam1,
    MeetTeam2,
    MeetTeam3,
    MeetTeam4,
    MeetTeam5,
    MeetTeam6,
    MeetTeam7,
    MeetTeam8,
    MeetTeam9,
    MeetTeam10,
    MeetTeam11,
    MeetTeam12,
    MeetTeam13,
    MeetTeam14,
    MeetTeam15,
    MeetTeam16,
    MeetTeam17,
    MeetTeam18,
    MeetTeam19,
  ];

  return (
    <div className="mb-5">
      <h1
        className="
    text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px]
    text-[#1C2B33]
    font-medium
    text-center
    py-6 sm:py-8
    leading-snug
  "
      >
        Meet Our Team
      </h1>

      <div className="slider relative overflow-hidden w-full h-[200px] bg-white">
        <div className="slide-track flex">
          {images.concat(images).map((src, i) => (
            <div
              className="slide flex items-center justify-center min-w-[250px] h-[200px] p-2"
              key={i}
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="
                  h-full w-auto rounded-lg shadow-md object-cover
                  grayscale-0 xl:grayscale xl:hover:grayscale-0 
                  transition duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
