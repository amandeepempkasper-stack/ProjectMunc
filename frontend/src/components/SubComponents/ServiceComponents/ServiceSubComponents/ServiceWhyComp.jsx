import React from "react";
import HighQuality from "../../../../Assets/Images/Services/WebDevelopment/HighQuality.png";
import Satisfaction from "../../../../Assets/Images/Services/WebDevelopment/Satisfaction.png";
import Unique from "../../../../Assets/Images/Services/WebDevelopment/Unique.png";
import ServiceMainSection from "./ServiceMainSection";

import './ServiceSubComp.css'
const ServiceWhyComp = () => {
  return (
    <>
      <div className="py-4">
        <div className="container pt-3 pb-1">
          <ServiceMainSection
            highlights="OUR STANDARD"
            highlightsDouble="STANDARD"
            heading="Empower Your Vision with Our Web App Development Experts"
          />
          <div className="row py-2">
            <div className="card-bg col-12 col-md-4 py-1 px-5">
              <div className="img-container w-10 d-flex">
                <img className="w-25 p-2" src={HighQuality} alt="" />
              </div>
              <div className="text-container">
                <p className="text-start py-2 px-3">
                Providing an exceptional professional team assisting with the best web app development services. Our professionals are enthusiastic about helping businesses get the best out of the possibilities. 
                </p>
              </div>
            </div>
            <div className="card-bg col-12 col-md-4 py-1 px-5">
              <div className="img-container w-10 d-flex">
                <img className="w-25 p-2" src={Unique} alt="" />
              </div>
              <div className="text-container">
                <p className="text-start py-2 px-3">
                We are a skilled team of professionals creating out-of-the-box websites that boost your business globally. Helping organizations run their business flexibly is one of our prior goals. 
Every business idea is unique, and we understand your needs and requirements. 

                </p>
              </div>
            </div>
            <div className="card-bg col-12 col-md-4 py-1 px-5">
              <div className="img-container w-10 d-flex">
                <img className="w-25 p-2" src={Satisfaction} alt="" />
              </div>
              <div className="text-container">
                <p className="text-start py-2 px-3">
                While making your firm run smoothly in the market.  We assure you that we provide excellent app development services and are accessible to address your queries and concerns through our UI Developer. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceWhyComp;
