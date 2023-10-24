import React from 'react'
import CardImage1 from "../../images/card-image1.svg"
import CardImage2 from "../../images/card-image2.svg"
import CardImage3 from "../../images/card-image3.svg"

function ThreeCards() {
  return (
    <div className='d-flex justify-content-between m-3 mb-5 flex-wrap'>
    <div className="card card-responsive">
    <div className="card-body">
      <h5 className="card-title"><p className="text-center text-danger fs-5 fw-normal font-family-Poppins m-0 px-3 py-2">Bare Land Development</p></h5>
      <p className="card-text text-center">As a Licensed NJ Builder, Mike has years of experiencing developing land for residential and commercial structures. </p>
    </div>
    <img className="card-img-top" src={CardImage1} alt="Card image cap" loading='lazy'/>
  </div>
  <div className="card card-responsive">
  <img className="card-img-top" src={CardImage2} alt="Card image cap" loading='lazy'/>
  <div className="card-body">
    <h5 className="card-title"><p className="text-center text-danger fs-5 fw-normal font-family-Poppins m-0 px-3 py-2">HUD 203k Program</p></h5>
    <p className="card-text text-center">When it comes to renovating a property, exploring every avenue is Mike’s priority. Learn more about NJs HHUD 203k Program.</p>
  </div>
</div>
<div className="card card-responsive">
  <div className="card-body">
    <h5 className="card-title"><p className="text-center text-danger fs-5 fw-normal font-family-Poppins m-0 px-3 py-2">Sub Divisons</p></h5>
    <p className="card-text text-center">Whether  a new or existing property, Mike works with the home owners and municipalities to explore every option for sub dividing and variance approvals.</p>
  </div>
  <img className="card-img-top" src={CardImage3} alt="Card image cap" loading='lazy'/>
</div>
</div>
  )
}

export default ThreeCards
