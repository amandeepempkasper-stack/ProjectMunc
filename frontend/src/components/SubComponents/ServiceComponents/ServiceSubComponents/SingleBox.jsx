import React from 'react'
import '../../SubComponents.css'
const SingleBox = (props) => {
  return (
    <div>
        <div className="row">
            <div   className="col-12 singlebox-shadow text-center p-2 my-3">
                <h3>{props.title}</h3>
                <p>{props.Discription}</p>
            </div>
        </div>
    </div>
  )
}

export default SingleBox