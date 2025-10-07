import React from "react";
import safeBanner from "../../assets/HomeSection/Banner/safe.png";

const SafeBanner = () => {
  return (
    <div className="w-full">
      <img
        src={safeBanner}
        alt="Safe Banner"
        className="
          w-full object-cover object-center md:rounded-xl
          h-[74px] sm:h-[120px] md:h-[210px] lg:h-[220px]
        "
      />
    </div>
  );
};

export default SafeBanner;
