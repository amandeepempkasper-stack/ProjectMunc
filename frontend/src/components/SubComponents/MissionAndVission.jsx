import React from 'react'
import ServiceMainSection from './ServiceComponents/ServiceSubComponents/ServiceMainSection';
import { BiBullseye } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
const MissionAndVission = () => {
  return (
    <div>
      
      <ServiceMainSection
          highlights="What Makes Kasper Different From Others"
          highlightsDouble="Different"
          heading="Whether you are a small start-up or a large enterprise, we offer a complete range of services to help you grow online. Our team has the expertise to drive measurable outcomes for your business, from designing and developing stunning websites that captivate visitors, to creating and implementing result-oriented digital marketing strategies."
        />
        <div className="missionContainer row container m-auto ">
        <div className="Vision col-12 col-md-6 text-start d-flex py-2 px-1">
        <div  className='w-25 d-flex flex-column aline-center justify-content-center fs-1 p-1'>
        <BiBullseye/>
        
        </div>
        <div className='px-3'><h4 className='fw-bold'>Our Mission</h4>
          <p>Our target is to become a leading IT solutions provider by revolutionizing the custom enterprise application development solutions industry. We are working hard to provide streamlined and targeted services that are customized to perfection.</p></div>
          
          
        </div>
        <div className="Vision col-12 col-md-6 text-start d-flex py-2 px-1">
        <div className='w-25 d-flex flex-column aline-center justify-content-center fs-1 p-1 '><FaEye /></div>
        <div className='px-3'><h4 className='fw-bold'>Our Vision</h4>
        <p>Our mission is to enrich different businesses and brands by providing state-of-the-art IT solutions which cater to their customers. Our approach is to develop products that not only align with but also complement the goals of our clients' company.</p></div>
        </div>
        
      </div>
    </div>
  )
}

export default MissionAndVission;  

