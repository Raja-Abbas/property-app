import React from 'react'
import Logo from "../../images/logo (1).svg"

function logo() {
  return (
    <div className="position-relative d-flex justify-content-center logo-image mb-4">
        <img src={Logo} alt="" loading='lazy' className='img-fluid'/>
    </div>
  )
}

export default logo
