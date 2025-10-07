import React from "react";
import { Link } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import logo from "../../assets/HomeSection/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Grid Section */}
        <div
          className="
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-5 
        gap-10 
        text-left
      "
        >
          <div className="flex flex-col items-start text-left">
            <img
              src={logo}
              alt="MUN-C Logo"
              className="h-8 sm:h-10 md:h-12 mb-4"
            />
            <p className="text-sm sm:text-base text-[#3E4247] leading-relaxed font-medium max-w-xs">
              MUN-C is an all-in-one business management suite that simplifies
              operations, saves time, and helps businesses grow.
            </p>
          </div>

          <div className="flex flex-col items-start text-left">
            <h3 className="font-medium text-gray-800 mb-3 text-base sm:text-lg">
              Company
            </h3>

            <div className="list-none space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products/human-resource-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Product Details
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Blogs
                </Link>
              </li>
            </div>
          </div>

          <div className="list-none flex flex-col items-start text-left">
            <h3 className="font-medium text-gray-800 mb-3 text-base sm:text-lg">
              Our Products
            </h3>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <Link
                  to="/products/inventory-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/lead-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Lead Management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/human-resource-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Human Resource Management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/school-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  School Management
                </Link>
              </li>
            </div>
          </div>
          <div className="flex flex-col items-start text-left">
            <h3 className="font-medium text-gray-800 mb-3 text-base sm:text-lg">
              Upcoming modules
            </h3>

            <div className="list-none space-y-2 text-sm sm:text-base text-gray-600">
              <li className=" text-[#3E4247]">
                Finance and accounting
              </li>
              <li className=" text-[#3E4247]">
                Manufacturing Management
              </li>
              <li className=" text-[#3E4247]">
                Supply Chain Management
              </li>
              <li className=" text-[#3E4247]">
                Marketing Automation
              </li>
            </div>
          </div>

          <div className="flex flex-col items-start text-left">
            <h3 className="font-medium text-gray-800 mb-3 text-base sm:text-lg">
              Head Office
            </h3>
            <div className="text-sm sm:text-base text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt size={20} className="mt-1 text-black" />
                <span>
                  Kasper Infotech Pvt. Ltd. <br />
                  Office No. 214, Tower B, The iThum Towers, Sector 62, Noida,
                  Uttar Pradesh 201301
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone size={16} className="text-black" />
                <a
                  href="tel:8006236800"
                  className="hover:text-blue-600 no-underline text-[#3E4247]"
                >
                  +91 80062 36800
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosMail size={20} className="text-black" />
                <a
                  href="mailto:info@kasperinfotech.com"
                  className="hover:text-blue-600 no-underline text-[#3E4247]"
                >
                  info@kasperinfotech.com
                </a>
              </li>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
        mt-10 pt-4 border-t border-gray-200 
        flex flex-col md:flex-row 
        items-center md:items-center 
        justify-between 
        gap-4 text-sm text-gray-500
      "
        >
          <p className="text-center md:text-left">
            All rights reserved by Kasper Infotech Pvt. Ltd.
          </p>

          <div className="flex gap-4">
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://www.linkedin.com/company/mun-c/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={18} className="text-white" />
            </a>
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://x.com/mun_c1 "
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={18} className="text-white" />
            </a>
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://www.instagram.com/munc_bms/"
              target="_blank"
              rel="noreferrer"
            >
              <CiInstagram size={18} className="text-white" />
            </a>
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://www.facebook.com/profile.php?id=61573443763703"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
