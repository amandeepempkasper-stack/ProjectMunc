import React from "react";

import chatBoat from '../../../Assets/Images/projects/Biogaschatbot.jpg'
import ARSWA from '../../../Assets/Images/projects/ARSWA.jpg'
import pyrexia from '../../../Assets/Images/projects/pyrexia.jpg'
import ServiceMainSection from "../ServiceComponents/ServiceSubComponents/ServiceMainSection";

const OurProjects = () => {
  return (
    <div className="testimonial-mainarea">
      <section className="home-Project py-5">
        <div className="Projects container d-flex flex-column justify-content-center aline-item-center text-center">
        <ServiceMainSection highlights="OUR PROJECTS" highlightsDouble="PROJECTS"/>
          <div className="project-card-container d-flex">
            <div className="project-card">
              <h5>
                C<br />H<br />A<br />T<br />B<br />O<br />T
              </h5>
              <div className="project-card-img">
                <img
                  src={chatBoat}
                  alt="Biogas Chatboat"
                />
              </div>
              <div className="project-card-content d-flex flex-column justify-content-center aline-item-center">
                <h6>Ministry of New And Renewable Energy</h6>
                <hr />
                <p>
                  A chatbot having 4 layer query solver capabilities regarding
                  biogas, biomass for our esteemed ministry of new and renewable
                  energy- government of India project.
                </p>
                {/* <a href className="btn">
                  Read More →
                </a> */}
              </div>
            </div>
            <div className="project-card">
              <h5>
                W<br />E<br />B<br />S<br />I<br />T<br />E
              </h5>
              <div className="project-card-img">
                <img
                  src={ARSWA}
                  alt="Biogas Chatboat"
                />
              </div>
              <div className="project-card-content d-flex flex-column justify-content-center aline-item-center">
                <h6>AIIMS Rishikesh Studennt Wellfare Association</h6>
                <hr />
                <p>
                  A project website for AIIMS Rishikesh student welfare
                  association where students can get any kind of help related to
                  academics and general issues
                </p>
                {/* <a href className="btn">
                  Read More →
                </a> */}
              </div>
            </div>
            <div className="project-card">
              <h5>
                W<br />E<br />B<br />S<br />I<br />T<br />E
              </h5>
              <div className="project-card-img">
                <img
                  src={pyrexia}
                  alt="pyrexiafest"
                />
              </div>
              <div className="project-card-content d-flex flex-column justify-content-center aline-item-center">
                <h6>Pyrexia an AIIMS Rishikesh Annual Fest</h6>
                <hr />
                <p>
                  Pyrexia is an AIIMS Rishikesh annual fest programme and event
                  website for students of the academics to celebrate the unity
                  and promote culture.
                </p>
                {/* <a href className="btn">
                  Read More →
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
