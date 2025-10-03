import React from "react";
import Service1 from "../../../Assets/Images/Services/Service1.webp";
import Service2 from "../../../Assets/Images/Services/Service2.webp";
import Service3 from "../../../Assets/Images/Services/Service3.webp";
import Service4 from "../../../Assets/Images/Services/Service4.webp";
import Service5 from "../../../Assets/Images/Services/Service5.webp";
import Service6 from "../../../Assets/Images/Services/Service6.webp";

import "../SubComponents.css";
import { Link } from "react-router-dom";

const AboutServices = () => {
  return (
    <div className="testimonial-mainarea">
      <section className="home-Service">
        <div className="container d-flex flex-column text-center pt-5 pb-5">
          <div className="highlights-text text-center">
            <h6>
              OUR SERVICES
              <span className="highlights-text-bg">SERVICES</span>
            </h6>
          </div>
          <div className="home-service-card-container d-flex flex-wrap justify-content-center mt-4">
            <div className="home-service-card d-flex flex-column text-decoration-none">
              <div className="service-img overflow-hidden">
                <img src={Service1} alt="Service" />
                <div className="service-overlay" />
              </div>
              <div className="HoverView d-flex flex-column justify-content-center aline-center">
                <h5>Web Development</h5>
                <Link
                  to="/web-application-development"
                  className="btn btn-light fw-bold"
                >
                  {" "}
                  View More{" "}
                </Link>
              </div>
            </div>
            <div className="home-service-card d-flex flex-column text-decoration-none">
              <div className="service-img overflow-hidden">
                <img src={Service2} alt="Service" />
                <div className="service-overlay" />
              </div>
              <div className="HoverView d-flex flex-column justify-content-center aline-center">
                <h5>App Development </h5>
                <Link
                  to="/mobile-app-development"
                  className="btn btn-light fw-bold"
                >
                  {" "}
                  View More{" "}
                </Link>
              </div>
            </div>
            <div className="home-service-card d-flex flex-column text-decoration-none">
              <div className="service-img overflow-hidden">
                <img src={Service3} alt="Service" />
                <div className="service-overlay" />
              </div>
              <div className="HoverView d-flex flex-column justify-content-center aline-center">
                <h5>Digital Marketing </h5>
                <Link
                  to="/digital-marketing-agency"
                  className="btn btn-light fw-bold"
                >
                  {" "}
                  View More{" "}
                </Link>
              </div>
            </div>
            <div className="home-service-card d-flex flex-column text-decoration-none">
              <div className="service-img overflow-hidden">
                <img src={Service4} alt="Service" />
                <div className="service-overlay" />
              </div>
              <div className="HoverView d-flex flex-column justify-content-center aline-center">
                <h5>CRM Development </h5>
                <Link
                  to="/CRM-Development-Service"
                  className="btn btn-light fw-bold"
                >
                  {" "}
                  View More{" "}
                </Link>
              </div>
            </div>
            <div className="home-service-card d-flex flex-column text-decoration-none">
              <div className="service-img overflow-hidden">
                <img src={Service5} alt="Service" />
                <div className="service-overlay" />
              </div>
              <div className="HoverView d-flex flex-column justify-content-center aline-center">
                <h5>ERP Development </h5>
                <Link
                  to="/erp-software-development"
                  className="btn btn-light fw-bold"
                >
                  {" "}
                  View More{" "}
                </Link>
              </div>
            </div>
            <div className="home-service-card d-flex flex-column text-decoration-none">
              <div className="service-img overflow-hidden">
                <img src={Service6} alt="Service" />
                <div className="service-overlay" />
              </div>
              <div className="HoverView d-flex flex-column justify-content-center aline-center">
                <h5>CMS DEVELOPMENT </h5>
                <Link
                  to="/cms-development-services"
                  className="btn btn-light fw-bold"
                >
                  {" "}
                  View More{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutServices;
