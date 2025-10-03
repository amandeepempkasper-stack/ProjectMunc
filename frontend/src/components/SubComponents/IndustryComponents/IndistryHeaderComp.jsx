import React from 'react'
import "./IndustryComponentStyle.css"
import { Link } from 'react-router-dom'

const IndistryHeaderComp = (props) => {
  return (
    <div style={{overflow:"hidden"}} className="IndistryHeader py-3 py-md-5 mb-5">
        <div className="container position-relative text-start  m-auto row py-5">
            <div className="col-md-6 col-12 d-flex flex-column gap-3 justify-content-center">
                <h1 className='fs-1 text-white fw-bold text-uppercase'>{props.heading}</h1>
                <h2 className='fs-5 text-light '>{props.subheading}</h2>
                 <Link to="/Contact-us" className='btn btn-quote text-white px-5 py-2 fw-bold text-uppercase mb-5 m-auto m-md-0' >Contact Us </Link>
            </div>
            <div className="col-md-6 col-12 position-relative">
              <img className='imageHeader' src={props.HeaderImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default IndistryHeaderComp