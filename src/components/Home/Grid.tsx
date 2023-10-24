import React from 'react'
import ImageWeb from "../../images/logo.svg"

function Grid() {
  return (
    <div className="d-flex justify-content-center grid flex-wrap">
      <div className="position-relative  row imageweb">
        <img src={ImageWeb} alt="ImageWeb" loading='lazy'/>
      </div>
      <div className="py-1 justify-content-center align-items-center textweb">
    <div className="col-12 row align-items-center d-flex">
        <p className="text-center text-dark fs-3 fw-light font-family-Poppins m-0 px-3 py-2">Welcome to Mike Koen Realty</p>
        <p className="text-center text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">With over 25+ Years of Experience as a Realtor and Licensed Builder, Mike offers a Wide Variety of Realty Services.</p>
    </div>
</div>
    </div>
  )
}

export default Grid
