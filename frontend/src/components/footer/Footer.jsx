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
    <footer className="bg-white border-t-[2px] border-gray-200 ">
      <div className="max-w-9xl mx-auto py-6 ">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="MUN-C Logo" className="h-8 mb-4" />
            <p className="text-sm text-[#3E4247] leading-[120%]">
              MUN-C is an all-in-one business management suite that simplifies
              operations, saves time, and helps businesses grow.
            </p>
          </div>

          <div className="">
            <h3 className="font-medium  text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
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
              <li>
                {/* <Link to="/demo" className="hover:text-blue-500 no-underline text-[#3E4247]">
                  Get Free Demo
                </Link> */}
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start items-center mx-auto">
            <h3 className="font-medium text-gray-800 mb-3">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  to="/products/inventory-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Inventory management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/lead-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Lead-management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/human-resource-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  Human resource management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/school-management-system"
                  className="hover:text-blue-500 no-underline text-[#3E4247]"
                >
                  School management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className=" flex flex-col justify-start items-center mx-auto">
            <h3 className="font-medium text-gray-800 mb-2">Head Office</h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt size={26} className="mt-1 text-black" />
                <span>
                  Kasper Infotech Pvt. Ltd. <br />
                  Office Number 214, Tower B, The iThum Towers, Sector 62,
                  Noida, Uttar Pradesh 201301
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
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto px-6 py-2 border-t-[1px] border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>All rights reserved by Kasper Infotech Pvt. Ltd.</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 md:mt-0">
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://in.linkedin.com/company/mun-c?trk=similar-pages"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={18} className="text-white" />
            </a>
            <a
              className="bg-[#007AFF] p-2 rounded-full"
              href="https://x.com/mun_c1"
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
              href="https://www.facebook.com/people/MUN-C/61573443763703/?rdid=ew3U1DxjXmOj9PJ5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JXx7JGSXX%2F"
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
