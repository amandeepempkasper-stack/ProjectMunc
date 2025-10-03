import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
   // State for mobile menu toggles
   const [menuOpen, setMenuOpen] = useState(false);
   // State for submenu toggle
   const [submenuOpen, setSubmenuOpen] = useState({});
    // Toggle mobile menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

   // Toggle submenu items
   const handleSubmenuToggle = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle state for clicked submenu
    }));
  };
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <div className="ro_mainnavsection d-none d-md-block">
      <div className="ro_navarea ">
        <div className="container-fluid">
          <div className="row navrow">
            {/* logo */}
            <div className="col-md-3 col-sm-3 col-xs-4 logo_left">
              <div className="logo">
              
                <Link to="/index.html" title="rodrops" className="roweb_Link">
                  <img src="/kasper.png" alt="Rodrops" />
                </Link>
              </div>
              </div>
                {/* logo */}
                {/* nav */}
              <div className="col-md-9 col-sm-9 col-xs-8">
                <nav className="ro-menu">
                <ul className="ro-menulist">
                  <li className="ro-menuitems">
                    <Link to="/home" className="ro-menuitems_link">Home</Link>
                    <RiArrowDropDownLine className="dropdown_icon"/>
                    
                  <ul className="ro-submenulist">
                    <li className="ro-submenuitems">
                    <Link to="/a">a</Link></li>
                    <li className="ro-submenuitems">
                    <Link to="/b">b</Link></li>
                  </ul>
                  </li>
                  <li className="ro-menuitems"> 
                    <Link to="/company" className="ro-menuitems_link">Company</Link><RiArrowDropDownLine className="dropdown_icon"/>
                  <ul className="ro-submenulist">
                    <li className="ro-submenuitems">
                    <Link to="/a">a</Link></li>
                    <li className="ro-submenuitems">
                    <Link to="/b">b</Link></li>
                    <li className="ro-submenuitems">
                    <Link to="/c">c</Link></li>
                    <li className="ro-submenuitems">
                    <Link to="/d">d</Link></li>
                    <li className="ro-submenuitems">
                    <Link to="/e">e</Link></li>
                  </ul>
                  </li>
                  <li className="ro-menuitems" >
                  <Link to="/portfolio" className="ro-menuitems_link">Portfolio</Link>
                  <RiArrowDropDownLine className="dropdown_icon"/>
                  <ul className="ro-submenulist">
                    <li className="ro-submenuitems">
                    <Link to="/a">a</Link></li>
                    <li className="ro-submenuitems">
                    <Link to="/b">b</Link>
                    </li>
                   
                  </ul>
                  </li>
                  

                  <li className="ro-menuitems" >
                  <Link to="/services" className="ro-menuitems_link">Services</Link><RiArrowDropDownLine className="dropdown_icon"/>
                  <ul className="ro-submenulist">
                    <li className="ro-submenuitems">
                    <Link to="/a">a</Link>
                    </li>
                    <li className="ro-submenuitems">
                    <Link to="/b">b</Link>
                    </li>
                   
                  </ul>
                  </li>
                  <li className="ro-menuitems" >
                  <Link to="/Blog" className="ro-menuitems_link">Blog</Link>
                
                 
                  </li>
                
                </ul>
                <div className="contact-us-button">
                  <Link to="/Get in touch">Get In Touch</Link>
                </div>
                {token &&  (
  <div className="dashboard-btn">
    <Link to="/adminsidebar/blogs">Dashboard</Link>
  </div>
)}

                </nav>
              </div>
              </div>  
              </div>
              </div>
              </div>
              {/* mobile menu logo */}
              <div className="mobile_logo hidden-md hidden-lg">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="mobile_menu_logo text-center">
                        <Link to="/index.html" title="rodrops">
                        <img src="/kasper.png" alt="kasper" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         {/* mobile menu section */}
         <div className={`mobile_nav hidden-lg hidden-md ${menuOpen ? "open" : ""}`} >
     
        <div className="menu-bar">
          {/* Hamburger Menu Button */}
          <button onClick={handleMenuToggle} className="mobilemenu_detail">
            {menuOpen ? "X" : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </button>
            {/* Close Button (Visible Only When Menu is Open) */}
    {menuOpen && (
      <button onClick={handleMenuToggle} className="mobilemenu_close">
        Close
      </button>
    )}

          {/* Mobile Navigation */}
          <nav className="mobile_navbar">
          <ul className={`mobile_submenu ${menuOpen ? "open" : ""}`}>
              
              {/* === Home Menu Item === */}
              <li className="mobile_menuitems">
                <Link to="/home" className="mobile_link">Home</Link>
                <button 
                  className="menu-expand" 
                  onClick={() => handleSubmenuToggle(1)}
                >
                  {submenuOpen[1] ? "-" : "+"}
                </button>
                
                {/* Submenu */}
                {submenuOpen[1] && (
                <ul className={`mobile_submenus ${submenuOpen[1] ? "open" : ""}`}>
                    <li><Link to="/a">a</Link></li>
                    <li><Link to="/b">b</Link></li>
                  </ul>
                )}
              </li>

              {/* === Company Menu Item === */}
              <li className="mobile_menuitems">
                <Link to="/company" className="mobile_link">Company</Link>
                <button 
                  className="menu-expand" 
                  onClick={() => handleSubmenuToggle(2)}
                >
                  {submenuOpen[2] ? "-" : "+"}
                </button>

                {/* Submenu */}
                {submenuOpen[2] && (
                      <ul className={`mobile_submenus ${submenuOpen[2] ? "open" : ""}`}>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                  </ul>
                )}
              </li>

              {/* === Services Menu Item === */}
              <li className="mobile_menuitems">
                <Link to="/services" className="mobile_link">Services</Link>
                <button 
                  className="menu-expand" 
                  onClick={() => handleSubmenuToggle(3)}
                >
                  {submenuOpen[3] ? "-" : "+"}
                </button>

                {/* Submenu */}
                {submenuOpen[3] && (
                     <ul className={`mobile_submenus ${submenuOpen[3] ? "open" : ""}`}>
                    <li><Link to="/delivery">Delivery</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                  </ul>
                )}
              </li>

            </ul>
          </nav>
        </div>
     
    </div>
  



         
       
     
              </>
  );
};

export default Navbar;
