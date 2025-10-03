import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-section company-info">
            <h4>RO DROPS</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
            <div className="social-icons">
              <Link to="#"><FaFacebookF /></Link>
              <Link to="#"><FaTwitter /></Link>
              <Link to="#"><FaInstagram /></Link>
            </div>
          </div>

          <div className="footer-section services">
            <h4>Our Service</h4>
            <ul>
              <li><Link to="#">Housing and Land</Link></li>
              <li><Link to="#">Finance and Economy</Link></li>
              <li><Link to="#">Roads and Transport</Link></li>
              <li><Link to="#">Business & Industry</Link></li>
            </ul>
          </div>

          <div className="footer-section recent-posts">
            <h4>Recent Posts</h4>
            <ul>
              <li><Link to="#">RO vs UV Purifiers: Which One is Right for You?</Link></li>
              <li><Link to="#">The Benefits of Alkaline RO Water</Link></li>
              <li><Link to="#">Understanding TDS in Drinking Water</Link></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>Contact Us</h4>
            <p>Netario Innovations private limited, patna India</p>
            <p>📞 +1 207-876-1059</p>
            <p>📧 netario@example.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Rodrops. All rights reserved.</p>
        <ul>
          <li><Link to="#">Privacy Policy</Link></li>
          <li><Link to="#">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
