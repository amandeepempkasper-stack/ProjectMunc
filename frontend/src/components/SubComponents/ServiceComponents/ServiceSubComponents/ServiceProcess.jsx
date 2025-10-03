import React from "react";
import Consultation from "../../../../Assets/Images/Services/WebDevelopment/Consultation.svg";
import Deployment from "../../../../Assets/Images/Services/WebDevelopment/Deployment.svg";
import Prototyping from "../../../../Assets/Images/Services/WebDevelopment/Prototyping.svg";
import Planning from "../../../../Assets/Images/Services/WebDevelopment/Planning.svg";
import Development from "../../../../Assets/Images/Services/WebDevelopment/Development.svg";
import Testing from "../../../../Assets/Images/Services/WebDevelopment/Testing.svg";
import Maintenance from "../../../../Assets/Images/Services/WebDevelopment/Maintenance.svg";


const ServiceProcess = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="highlights-text text-center pt-4">
            <h6>
              OUR PROCESS
              <span className="highlights-text-bg">PROCESS</span>
            </h6>
          </div>
          <h6 className=" w-lg-75 w-100 m-auto fw-bold mb-2">
            The process we follow to to minimize the time and enhance the quaility of our work 
          </h6>
        </div>
      </div>
      <div className="container">
        <div className="row aline-item-center my-3">
          <div className="col-12, col-md-6 p-md-2 p-4 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center  fw-bold mt-3 text-muted">
              Initial Consultation and Exploration
            </h3>
            <p className="text-md-start text-center mt-2">
              Our journey begins with understanding your business goals. During
              this stage, we have in-depth discussions to learn your objectives,
              target audience and unique needs. We value your insights as they
              form the foundation of our project.
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img style={{ width: "50%" }} src={Consultation} alt="Serviceimg" />
            </div>
          </div>
        </div>
        <div className="row aline-item-center my-3 flex-row-reverse">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center fw-bold mt-3 text-muted">
              Planning and Strategy Building
            </h3>
            <p className="text-md-start text-center mt-2">
              With your objectives in mind, we create a comprehensive project
              plan and strategy. It involves defining the project's scope,
              setting milestones and establishing timelines. We carefully select
              the right technologies and frameworks that align with your web
              application.
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img style={{ width: "50%" }} src={Planning} alt="Serviceimg" />
            </div>
          </div>
        </div>
        <div className="row aline-item-center my-3 ">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center fw-bold mt-3 text-muted">Design and Prototyping</h3>
            <p className="text-md-start text-center mt-2">
              Our talented design team takes over to craft the visual identity
              of your web application. We prioritize creating user-friendly
              interfaces that enhance engagement. To ensure we are on the same
              page, we present you with prototypes for your input.
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                style={{ width: "50%" }}
                src={Prototyping}
                alt="Serviceimg"
              />
            </div>
          </div>
        </div>
        <div className="row aline-item-center my-3 flex-row-reverse">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center fw-bold mt-3 text-muted">Development Phase</h3>
            <p className="text-md-start text-center mt-2">
              Once the design is approved, our development team takes the reins.
              They diligently write clean and efficient code to build the core
              functionality of your web application. We maintain open lines of
              communication to keep you updated and seek your feedback.
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                style={{ width: "50%" }}
                src={Development}
                alt="Serviceimg"
              />
            </div>
          </div>
        </div>
        <div className="row aline-item-center my-3 ">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center fw-bold mt-3 text-muted">
              Testing and Quality Assurance
            </h3>
            <p className="text-md-start text-center mt-2">
              Quality is at the core of our process. We conduct extensive
              testing to uncover and address any issues. Our testing includes
              functional, performance, security and compatibility checks across
              different browsers and devices.
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img style={{ width: "50%" }} src={Testing} alt="Serviceimg" />
            </div>
          </div>
        </div>
        <div className="row aline-item-center my-3 flex-row-reverse">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center fw-bold mt-3 text-muted">Deployment and Launch</h3>
            <p className="text-md-start text-center mt-2">
              With thorough testing and refinements complete, we move to the
              deployment phase. Our team ensures a flawless transition from
              development to production, overseeing the launch to ensure a
              smooth start.
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img
                style={{ width: "50%" }}
                src={Deployment}
                alt="Serviceimg"
              />
            </div>
          </div>
        </div>
        <div className="row aline-item-center my-3 ">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center fw-bold mt-3 text-muted">
              Post-Launch Support and Maintenance
            </h3>
            <p className="text-md-start text-center mt-2">
              We offer ongoing support and maintenance to keep your web
              application secure, up-to-date and performing at its best. We
              remain responsive to any evolving needs or improvements.
            </p>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <img style={{ width: "50%" }} src={Maintenance} alt="Serviceimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProcess;
