import React from 'react'
import ChevronRight from "../../images/Chevron right.svg"
import ChevronLeft from "../../images/Chevron left.svg"

function reviews() {
  return (
    <div className="py-1 bg-light py-4 d-flex justify-content-center align-items-center mx-4 mt-5 mb-5 flex">
    <div className="d-flex justify-content-center align-items-center d-flex">
        <div className="position-relative col-1">
            <img src={ChevronLeft} alt="" className='imagebutton' loading='lazy'/>
        </div>
        <div className="p-1 col-7 row justify-content-end align-items-end">
            <p className="text-secondary fs-6 fw-light font-family-Poppins col-11 m-0 px-3 py-2">June 11, 2023</p>
            <p className="text-dark fs-6 fw-normal font-family-Poppins col-11 m-0 px-3 py-2">“We are so happy with  quick example text to build on the card title and make up the bulk of the card's content.”</p>
            <p className="text-end text-danger fs-6 fw-light font-family-Poppins m-0 px-3 py-2">Jesse A.</p>
        </div>
        <div className="position-relative col-2">
            <img src={ChevronRight} alt="" className='imagebutton' loading='lazy'/>
        </div>
    </div>
    <div className="row align-items-end col-3 mx-5 gap-2">
        <div className="p-1 bg-white rounded-3 col-12 row">
            <textarea className="text-secondary fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-4" placeholder='Leave a review...'/>
        </div>
        <div className="d-flex w-100 justify-content-end">
            <div className="px-1 py-1 rounded-5 border border-1 border-dark justify-content-center align-items-center d-flex justify-content-end">
                <div className="justify-content-center align-items-center">
                    <p className="text-center text-dark fs-6 fw-medium font-family-Poppins m-0 row col-8 px-3 py-2 imagebutton">Post</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default reviews
