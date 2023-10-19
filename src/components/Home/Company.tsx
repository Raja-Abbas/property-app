import React from 'react'
import ImageAlts from "../../images/logo alts.svg"

function Company() {
  return (
    <div>
      <div className="py-1  row justify-content-center align-items-center m-5">
    <div className="position-relative col-12 w-50 row">
      <img src={ImageAlts} alt="" />
    </div>
    <div className="col-12 justify-content-center">
        <div className="col-12">
            <p className="text-center text-dark fs-1 fw-light font-family-Poppins col-12 m-0 px-3 py-2">New Jersey Licensed Builder.</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Company
