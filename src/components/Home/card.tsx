import React from 'react'
import WhiteLogo from "../../images/white dark mark shape.svg"
import PlayFillButton from "../../images/Play fill.svg"

function card() {
  return (
    <div className="background-danger card-center py-2 my-3 logo-image mt-4 mb-4">
        <p className="text-center text-white fs-5 fw-normal font-family-Poppins  m-0 px-3 py-2">Discover MIKE KOEN Careers</p>
        <div className="position-relative center text-center">
            <img src={PlayFillButton} alt="" />
        </div>
        <div className="position-relative opacity-50 WhiteLogo text-end w-100">
            <img src={WhiteLogo} alt=""/>
        </div>
    </div>
  )
}

export default card
