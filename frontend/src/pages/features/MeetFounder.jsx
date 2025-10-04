import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MaleFounder from "../../assets/HomeSection/OurFounder/Kishor Sir.png";
import Lakshmi from "../../assets/HomeSection/OurFounder/Lakshmi.jpg"
import './features.css'

const MeetFounder = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kishor Kumar",
      title: "Founder Of Kasper Infotech Pvt. Ltd.",
      text: "From the very beginning, our mission at MUNC has been clear—to empower businesses with tools that simplify complexity. We believe no business should struggle with scattered software, so we built an all-in-one suite that brings everything together. With MUNC, organizations of every size can manage operations, boost teamwork, and grow smarter, faster, and more efficiently.",
      image: MaleFounder,
    },
    {
      id: 2,
      name: "Lakshmi Mittal",
      title: "Director & Founder Of Kasper Infotech Pvt. Ltd.",
      text: "At MUNC, we see technology as an enabler, not a barrier. Our vision is to create simple, powerful solutions that help every business grow smarter, faster, and with greater ease.",
      image:Lakshmi
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-[36px] text-[#1C2B33] font-medium text-center py-8">
          Meet Our Founder
        </h1>
      </div>
      <div>
        <div className="max-w-6xl mx-auto py-12 px-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col md:flex-row items-center justify-start gap-8 bg-white rounded-xl p-8  ">
                  {/* Founder Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[360px] w-[300px] object-cover rounded-lg shadow-md"
                  />

                  {/* Content */}
                  <div className=" founder-desc">
                    <p className="text-[#7D7D7D] text-base font-normal leading-[120%] mb-4">
                      {item.text}
                    </p>
                    <p className="font-semibold text-[#3E4247]">{item.name}</p>
                    <p className="text-sm text-[#3E4247]">{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MeetFounder;
