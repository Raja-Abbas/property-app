import React from 'react'
import checkcircle from "../../images/Check circle.svg"
import ShieldShaded from "../../images/Shield shaded.svg"

function textCard() {
  return (
      <div className="d-flex flex-wrap justify-content-around m-1 mt-5 mb-4 h-100 w-100">
  <div className="">
    <div className="card cardtwo border-0">
        <img src={checkcircle} alt="" className='checkcircle'/>
      <div className="card-body text-center">
        <h5 className="card-title"><p className="text-center text-danger fs-2 fw-medium font-family-Poppins  m-0 px-3 py-2">Licensed Builder</p></h5>
        <p className="card-text"><p className="text-center text-dark fs-5 fw-light font-family-Poppins  m-0 px-3 py-2">25+ Years Experience</p></p>
        <p className="card-text"><p className="text-center text-dark fs-6 fw-light font-family-Poppins  m-0 px-3 py-2">As a New Jersey Licensed & Insured Builder, Mike has experience developing from the ground up. Whether you are interested in residential or commercial property, Mike can help guide you through the entire process.</p></p>
      </div>
    </div>
  </div>
  <div className="">
    <div className="card cardtwo border-0">
      <div className="card-body text-center">
        <img src={ShieldShaded} alt="" className='checkcircle'/>
        <h5 className="card-title"><p className="text-center text-danger fs-2 fw-medium font-family-Poppins  m-0 px-3 py-2">Federal Building Inspector</p></h5>
        <p className="card-text"><p className="text-center text-dark fs-5 fw-light font-family-Poppins  m-0 px-3 py-2">10+ Years Experience</p></p>
        <p className="card-text"><p className="text-center text-dark fs-6 fw-light font-family-Poppins  m-0 px-3 py-2">Mike spent 10+ years as a State Certified NJ Inspector. When it comes to permits, variances, and approvals, he has seen it all. He uses his expertise to help families when navigating home inspections.</p></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default textCard
