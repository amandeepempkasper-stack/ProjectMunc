import React from 'react'
import './ServiceSubComp.css'


const ServiceTopHeader = (props) => {
  return (
    <>
    <div style={{position:'relative'}} className="service-Header d-flex flex-column justify-content-center aline-items-center">
          <img style={{width:'100%', zIndex:'-1', opacity:'100%'}} src={props.TopBanner} alt="" />
        <div className="container d-flex flex-column justify-content-center aline-center">                      
            <h1 className='text-center text-white fw-bold text-uppercase w-100 fs-2 fs-md-1 m-auto'>
            {props.title}
            </h1>
            <p style={{lineHeight:"1.9rem"}} className='text-center text-white my-3 fw-bold m-auto'>{props.disc}</p>
        </div>
    </div>
    </>
  )
}

export default ServiceTopHeader