import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/HomeSection/logo.svg";
import BlueButton from "../../UI/BlueButton";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import Contact from "./Contact";
// import Contact from "./ProductDemo";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Products", path: "#", dropdown: true },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/#contact", scroll: true },
    { label: "Blogs", path: "/blogs" },
  ];

  const productItems = [
    { label: "HRMS", path: "/products/human-resource-management-system" },
    { label: "LMS", path: "/products/lead-management-system" },
    { label: "SMS", path: "/products/school-management-system" },
    { label: "IMS", path: "/products/inventory-management-system" },
  ];

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 md:bg-white md:backdrop-blur-sm bg-white shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div>
            <NavLink to="/">
              <img width={120} src={Logo} alt="Logo" />
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            <ul className="flex gap-8 text-[#3E4247] relative">
              {links.map((el, idx) => (
                <li
                  key={idx}
                  className="list-none relative"
                  onMouseEnter={() => el.dropdown && setShowDropdown(true)}
                  onMouseLeave={() => el.dropdown && setShowDropdown(false)}
                >
                  {!el.dropdown && !el.scroll ? (
                    <NavLink
                      to={el.path}
                      className={({ isActive }) =>
                        `relative cursor-pointer transition-colors duration-300 
                        hover:text-blue-500 hover:underline 
                        ${isActive ? "text-blue-500 underline font-medium" : "text-gray-800"}`
                      }
                    >
                      {el.label}
                    </NavLink>
                  ) : el.scroll ? (
                    <HashLink
                      smooth
                      to={el.path}
                      className="relative cursor-pointer text-gray-800 hover:text-blue-500 hover:underline transition-colors duration-300"
                    >
                      {el.label}
                    </HashLink>
                  ) : (
                    <span className="relative cursor-pointer flex items-center gap-1 text-gray-800 hover:text-blue-500 hover:underline transition-colors duration-300">
                      {el.label}
                      <FaChevronDown
                        className={`ml-1 transition-transform duration-300 ${
                          showDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  )}

                  {/* Dropdown Menu */}
                  {el.dropdown && showDropdown && (
                    <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                      {productItems.map((item, i) => (
                        <NavLink
                          key={i}
                          to={item.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition-colors duration-300 
                            hover:bg-blue-50 hover:text-blue-600 
                            ${isActive ? "text-blue-600 underline font-medium" : "text-gray-700"}`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <BlueButton Addname="Try a Demo" handleForm={() => setShowForm(true)} />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <BlueButton
              Addname="Try For Free"
              handleForm={() => {
                setShowForm(true);
                setMobileMenuOpen(false);
              }}
            />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <HiX className="w-7 h-7 text-gray-700" />
              ) : (
                <HiMenu className="w-7 h-7 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm shadow-lg px-6 py-6 space-y-2 flex flex-col">
            <div className="flex justify-between items-center">
              <img width={100} src={Logo} alt="Logo" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <HiX className="w-7 h-7 text-gray-700" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {links.map((el, idx) => (
                <div key={idx}>
                  {!el.dropdown && !el.scroll ? (
                    <NavLink
                      to={el.path}
                      className={({ isActive }) =>
                        `block py-2 transition-colors duration-300 
                        hover:text-blue-500 hover:underline 
                        ${isActive ? "text-blue-500 underline font-medium" : "text-gray-800"}`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {el.label}
                    </NavLink>
                  ) : el.scroll ? (
                    <HashLink
                      smooth
                      to={el.path}
                      className="block py-2 text-gray-800 hover:text-blue-500 hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {el.label}
                    </HashLink>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex justify-between items-center w-full py-2 text-gray-800 hover:text-blue-500 hover:underline"
                      >
                        <span>{el.label}</span>
                        <FaChevronDown
                          className={`ml-1 transition-transform duration-300 ${
                            mobileDropdownOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      {mobileDropdownOpen && (
                        <div className="pl-4 flex flex-col gap-2">
                          {productItems.map((item, i) => (
                            <NavLink
                              key={i}
                              to={item.path}
                              className={({ isActive }) =>
                                `block py-1 text-sm transition-colors duration-300 
                                hover:text-blue-600 hover:underline 
                                ${isActive ? "text-blue-600 underline font-medium" : "text-gray-800"}`
                              }
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Contact setShowForm={setShowForm} showForm={showForm} />
    </>
  );
};

export default NavBar;
