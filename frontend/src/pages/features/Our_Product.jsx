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
      description: "Track, Manage, and Optimize Inventory in real time...",
      img: IMS,
      slug: "inventory-management-system",
    },
    {
      id: 2,
      name: "HR Management Software",
      description:
        "Automate payroll, attendance, and employee data in minutes.",
      img: HRMS,
      slug: "human-resource-management-system",
    },
    {
      id: 3,
      name: "Lead Management Software",
      description:
        "Capture, assign, and convert leads faster using intelligent automation.",
      img: LMS,
      slug: "lead-management-system",
    },
    {
      id: 4,
      name: "School Management Software",
      description:
        "Digitize admissions, attendance, exams, and fee collection with ease.",
      img: SMS,
      slug: "school-management-system",
    },
  ];

  return (
    <div className="px-8 sm:px-20 lg:px-40 " id="product">
      <h1 className="text-[25px] sm:text-[32px] lg:text-[36px] text-[#1C2B33] font-medium text-center py-10">
        Our Smart Business Solutions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2  justify-items-center" >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              group relative bg-white rounded-xl shadow-md overflow-hidden
              w-full sm:max-w-[280px] transition-all duration-300 ease-in-out
              hover:shadow-lg border
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
              className="p-4 sm:p-5 md:p-5 lg:p-6 xl:p-6 border
    transition-all duration-300 bg-white 
    absolute z-10 bottom-0 left-0 right-0 
    rounded-t-xl translate-y-14 group-hover:translate-y-4
    overflow-hidden
  "
            >
              <div className="mb-2">
                <h3
                  className="
        font-semibold text-[#1C2B33] 
        text-[14px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] line-clamp-2
      "
                >
                  {product.name}
                </h3>

                <p
                  className="
        font-normal text-[#6A7982] mt-1 
        text-[13.6px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px]
        transition-all duration-300 md:group-hover:text-[#1C2B33] line-clamp-2
      "
                >
                  {product.description}
                </p>
              </div>

              <div className="mt-2 sm:mt-3 flex justify-between">
                <Link
                  to={`/products/${product.slug}`}
                  className="
        bg-[#007AFF] text-white font-medium 
        text-[14px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px]
        px-2 py-1 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2
         transition cursor-pointer no-underline rounded-md whitespace-nowrap
      "
                >
                  Know More
                </Link>

                {/* <button
                  className="
        text-[#007AFF] font-medium 
        text-[14px] sm:text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px]
        px-2 py-1 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2
         transition cursor-pointer whitespace-nowrap
      "
                ></button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our_Product;
