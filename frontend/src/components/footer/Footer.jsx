import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/footerlogo.png";
import muncin from "../../assets/muncin.png";
import kasperqr from "../../assets/kasperqr.png";

const Footer = () => {
  return (
    <footer className="section_padding">
      <div className="footer-top">
        <div className="footer-logo d-flex flex-column align-items-center ">
          <div>
            <img src={FooterLogo} alt="" />
          </div>
          <div className="d-flex align-items-center gap-2">
            <div>
              <div style={{ height: "6rem", width: "6rem" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={muncin}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="sitemap text-center text-md-start">
            <h4>Quick Links</h4>
            <a className="link" href="#feature">
              <p>Features</p>
            </a>
            <a className="link" href="#testimonial">
              <p>Testimonial</p>
            </a>
            <a className="link" href="#mission">
              <p>Mission</p>
            </a>
            <a className="link" href="#Product">
              <p>Product</p>
            </a>
            {/* <a className="link" href="#Product">
              <p>Product</p>
            </a>
            <a className="link" href="/privacy-policy">
              <p>Privacy Policy</p>
            </a>
            <a className="link" href="/refund-policy">
              <p>Refund Policy</p>
            </a> */}
            {/* <a className="link" href="https://munc.solutions/" target="_blank" rel="noopener noreferrer">
  <p>Munc Solution</p>
</a> */}
          </div>
          <div className="socials text-center text-md-start">
            <h4>Social Media</h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/people/MUN-C/61573443763703/?rdid=ew3U1DxjXmOj9PJ5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JXx7JGSXX%2F"
            >
              Facebook
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/munc_bms/"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/mun_c1"
            >
              X / Twitter
            </a>
            <a target="_blank" rel="noopener noreferrer" href="">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="head-office text-center text-md-start">
          <h4>Head Office</h4>
          <h6 className="text-white my-0 mt-1">Kasper Infotech Pvt. Ltd.</h6>
          <p className="my-0">
            {" "}
            Office Number 214, Tower B, The iThum Towers, Sector 62, Noida,
            Uttar Pradesh 201301
          </p>

          {/* <div>
            <div
              className="mt-3 d-none d-md-flex"
              style={{ height: "6rem", width: "6rem" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src={kasperqr}
                alt=""
              />
            </div>
            <div
              className="mt-3 mx-auto d-flex d-md-none"
              style={{ height: "6rem", width: "6rem" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src={kasperqr}
                alt=""
              />
            </div>
          </div> */}
        </div>
        <div className="contact-details text-center text-md-start">
          <h4>Contact us</h4>
          <p className="my-0 mt-1">
            Email:{" "}
            <a href="mailto:info@mymunc.in" className="text-white">
              info@kasperinfotech.com
            </a>
          </p>
          <p className="my-0 mt-1">
            Mobile:{" "}
            <a href="tel:8006236800" className="text-white">
              +91 800-6236-800
            </a>
          </p>
          <div>
            <div
              className="mt-3 d-none d-md-flex"
              style={{ height: "6rem", width: "6rem" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src={kasperqr}
                alt=""
              />
            </div>
            <div
              className="mt-3 mx-auto d-flex d-md-none"
              style={{ height: "6rem", width: "6rem" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src={kasperqr}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="head-office text-center text-md-start">
          <h4>Head Office</h4>
          <h6 className="text-white my-0">Kasper Infotech Pvt. Ltd.</h6>
          <p className="my-0">
            {" "}
            Office Number 214, Tower B, The iThum Towers, Sector 62, Noida,
            Uttar Pradesh 201301
          </p>
          <div>
            <div
              className="mt-3 d-none d-md-flex"
              style={{ height: "6rem", width: "6rem" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src={kasperqr}
                alt=""
              />
            </div>
            <div
              className="mt-3 mx-auto d-flex d-md-none"
              style={{ height: "6rem", width: "6rem" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src={kasperqr}
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>All rights reserved by kasper infotech pvt.ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
