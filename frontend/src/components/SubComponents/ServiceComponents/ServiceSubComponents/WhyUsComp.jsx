import React from 'react'

const WhyUsComp = (props) => {
  return (
    <div className='container m-auto'>   
        <div className="row my-4">
        <div className="why-us-para col-12 col-md-6 py-2 text-start">
            <ul className='p-0'><p>{props.whytext1}</p>
            <p>{props.whytext2}</p></ul>
        </div>
        <div className=" why-us-para col-12 col-md-6 py-2 text-start">
            <ul className='p-0'>
            <p>{props.whytext3}</p>
            <p>{props.whytext4}</p>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default WhyUsComp