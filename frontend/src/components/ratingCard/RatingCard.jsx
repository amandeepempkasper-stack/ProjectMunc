import React from 'react'
import './ratingcard.css'
import { IoStar } from "react-icons/io5";

const RatingCard = ({ starCount, company, review, image }) => {
  return (
    <div className="rating-card p-2 px-3 rounded-2" style={{border:'2px solid rgba(134, 125, 125, 0.1)'}}>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < starCount ? "filled" : "empty"}>
            <IoStar />
          </span>
        ))}
      </div>
      <p className="user-rating-text p-2 rounded-2" style={{background:'rgba(204, 197, 197, 0.14)'}}>{review}</p>
      <div className="d-flex align-items-center gap-3">
       <div style={{height:"3rem", width:'3rem', borderRadius:'50%', overflow:'hidden'}}>
       <img  style={{objectFit:'cover', height:'100%', width:'100%'}} src={image} alt={company} />
       </div>
        <div className="user-text">
          <p className='my-0'>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard