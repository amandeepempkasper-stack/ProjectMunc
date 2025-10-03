import React from "react";
import IMS from "../../assets/HomeSection/Product_Img/IMS.png";
import HRMS from "../../assets/HomeSection/Product_Img/HRMS.png";
import LMS from "../../assets/HomeSection/Product_Img/LMS.png";
import SMS from "../../assets/HomeSection/Product_Img/SMS.png";
import { Link } from "react-router";

const Our_Product = () => {
  const products = [
    {
      id: 1,
      name: "Inventory Management Software",
      description: "Track, manage, and optimize inventory in real time.",
      img: IMS,
      slug: "inventory",
    },
    {
      id: 2,
      name: "HR Management Software",
      description:
        "HRMS streamlines payroll, attendance, and employee management.",
      img: HRMS,
      slug: "hr",
    },
    {
      id: 3,
      name: "Lead Management Software",
      description:
        "LMS helps capture, track, and manage leads to boost sales efficiency.",
      img: LMS,
      slug: "leads",
    },
    {
      id: 4,
      name: "School Management Software",
      description:
        "SMS simplifies admissions, attendance, fees, exams, and communication in one platform.",
      img: SMS,
      slug: "school",
    },
  ];

  return (
    <div className="px-8 sm:px-20 lg:px-40 " id="product">
      <h1 className="text-[25px] sm:text-[32px] lg:text-[36px] text-[#1C2B33] font-medium text-center py-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              group relative bg-white rounded-xl shadow-md overflow-hidden
              w-full sm:max-w-[280px] transition-all duration-300 ease-in-out
              hover:-translate-y-5 hover:shadow-lg
            "
          >
            <div className="relative flex items-center justify-center h-auto sm:h-auto lg:h-auto bg-gray-50">
              <img
                src={product.img}
                alt={product.name}
                className="max-h-full w-full object-contain"
              />
            </div>

            <div
              className="
    p-4 sm:p-5 md:p-5 lg:p-6 xl:p-6 
    transition-all duration-300 bg-white 
    max-h-none md:max-h-[80px] md:group-hover:max-h-[160px] 
    absolute z-10 bottom-0 left-0 right-0 
    rounded-t-xl translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 
    overflow-hidden
  "
            >
              <div className="mb-2">
                <h3
                  className="
        font-semibold text-[#1C2B33] 
        text-[14px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px]
      "
                >
                  {product.name}
                </h3>

                <p
                  className="
        font-normal text-[#6A7982] mt-1 
        text-[13.6px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px]
        transition-all duration-300 md:group-hover:text-[#1C2B33]
      "
                >
                  {product.description}
                </p>
              </div>

              <div className="mt-2 sm:mt-3 flex justify-between">
                <Link
                  to={`/products/${product.slug}`}
                  style={{ color: "white" }}
                  className="
        text-[14px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px]
        px-3 py-2 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2
        bg-[#007AFF] text-white text-center 
        rounded-md hover:bg-blue-700 transition
      "
                >
                  Try For Free →
                </Link>

                <button
                  className="
        text-[#007AFF] font-medium 
        text-[14px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px]
        px-2 py-1 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2
        hover:underline transition cursor-pointer
      "
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our_Product;
