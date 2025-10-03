import React from "react";
import AiimsRishikesh from "../../../Assets/Images/clients/AIIMSRISHIKESH.webp";
import MNRE from "../../../Assets/Images/clients/MNRE.webp";
import pyrexia from "../../../Assets/Images/clients/pyrexia.webp";
import akdie from "../../../Assets/Images/clients/akdie.webp";
import Amata from "../../../Assets/Images/clients/Amata.webp";
import AWARA from "../../../Assets/Images/clients/AWARA.webp";
import billerbird from "../../../Assets/Images/clients/billerbird.webp";
import cihlex from "../../../Assets/Images/clients/cihlex.webp";
import dynore from "../../../Assets/Images/clients/dynore.webp";
import SYNKA from "../../../Assets/Images/clients/SYNKA.webp";
import Tanip from "../../../Assets/Images/clients/Tanip.webp";
import ServiceMainSection from "../ServiceComponents/ServiceSubComponents/ServiceMainSection";

const OurAssociates = () => {
  return (
    <div className="testimonial-mainarea">
      <section className="home-Service px-sm-1 px-md-0">
        <div className="container d-flex flex-column text-center py-3">
        <ServiceMainSection highlights="OUR CLIENT" highlightsDouble="CLIENTS"/>
          <div className="clients-container">
            <li>
              <img src={AiimsRishikesh} alt="clients" />
            </li>
            <li>
              <img src={MNRE} alt="clients" />
            </li>
            <li>
              <img src={pyrexia} alt="clients" />
            </li>
            <li>
              <img src={akdie} alt="clients" />
            </li>
            <li>
              <img src={Amata} alt="clients" />
            </li>
            <li>
              <img src={AWARA} alt="clients" />
            </li>
            <li>
              <img src={billerbird} alt="clients" />
            </li>
            <li>
              <img src={cihlex} alt="clients" />
            </li>
            <li>
              <img src={dynore} alt="clients" />
            </li>
            <li>
              <img src={SYNKA} alt="clients" />
            </li>
            <li>
              <img src={Tanip} alt="clients" />
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAssociates;
