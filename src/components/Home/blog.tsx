import React from 'react'
import Image1 from "../../images/Image.svg"
import Image2 from "../../images/Image2.svg"
import Image3 from "../../images/Image3.svg"
import Image4 from "../../images/Image4.svg"

function blog() {
  return (
    <div className="row align-items-center justify-content-center">
    <div className="py-1 row justify-content-center align-items-center d-flex gap-4">
        <p className="text-danger text-center fs-1 fw-light font-family-Poppins m-0 py-2">Featured Articles</p>
        <div className="ms-3 d-flex justify-content-center flex">
            <div className="blog-responsive">
                <div className="bg-white col-12 row align-items-center justify-content-center d-flex blog">
                    <img className="position-relative col-12" src={Image1} alt="" loading='lazy'/>
                    <div className="p-1 bg-white row align-items-center d-flex justify-content-center">
                        <div className="row align-items-center d-flex">
                            <p className="text-center text-danger fs-4 fw-medium font-family-Poppins m-0 px-3 py-2">Blog Post Title</p>
                            <p className="text-center text-secondary fs-6 fw-normal font-family-Poppins  m-0 px-3 py-2">June 11, 2023</p>
                        </div>
                        <p className="text-center text-dark fs-6 fw-normal font-family-Poppins m-0 py-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="blog-responsive">
                <div className="bg-white col-12 row align-items-center justify-content-center d-flex">
                    <img className="position-relative col-12" src={Image2} alt="" loading='lazy'/>
                    <div className="p-1 bg-white row align-items-center d-flex justify-content-center">
                        <div className="row align-items-center d-flex">
                            <p className="text-center text-danger fs-4 fw-medium font-family-Poppins m-0 px-3 py-2">Blog Post Title</p>
                            <p className="text-center text-secondary fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">May 2, 2023</p>
                        </div>
                        <p className="text-center text-dark fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="blog-responsive">
                <div className="bg-white col-12 row align-items-center justify-content-center d-flex">
                    <img className="position-relative col-12" src={Image3} alt="" loading='lazy'/>
                    <div className="p-1 bg-white row align-items-center d-flex justify-content-center">
                        <div className="row align-items-center d-flex">
                            <p className="text-center text-danger fs-4 fw-medium font-family-Poppins m-0 px-3 py-2">Blog Post Title</p>
                            <p className="text-center text-secondary fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">April 7, 2023</p>
                        </div>
                        <p className="text-center text-dark fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="blog-responsive">
                <div className="bg-white col-12 row align-items-center justify-content-center d-flex">
                    <img className="position-relative col-12" src={Image4} alt="" loading='lazy'/>
                    <div className="p-1 bg-white row align-items-center d-flex justify-content-center">
                        <div className="row align-items-center d-flex">
                            <p className="text-center text-danger fs-4 fw-medium font-family-Poppins col-12 m-0 px-3 py-2">Blog Post Title</p>
                            <p className="text-center text-secondary fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">March 22, 2023</p>
                        </div>
                        <p className="text-center text-dark fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-100 background-danger align-items-center d-flex justify-content-center mb-4 gap-3 py-5">
        <div className="px-1 align-items-center justify-content-center d-flex">
            <div className="py-1 row d-flex flex-column justify-content-center align-items-center d-flex">
                <p className="text-center text-white fs-1 fw-semibold font-family-Poppins col-xl-6 m-0 px-3 py-2">Let’s Stay Connected</p>
                <p className="text-center col-xl-7 m-0 px-3 py-2"><span className="text-light fs-4 fw-normal font-family-Poppins">Join our newsletter today & receive </span><span className="text-light fs-4 fw-semibold font-family-Poppins text-decoration-underline">monthly</span><span className="text-light fs-4 fw-normal font-family-Poppins"> updates!</span></p>
                <div className="row justify-content-center align-items-center gap-3">
                        <input type="text" className="px-4 py-1 bg-white col-6 rounded-5 row justify-content-center align-items-center d-flex input py-2" placeholder='Enter Your Email'/>
                    <div className="w-auto">
                        <div className="px-1 py-1 rounded-5 border border-1 border-light col-12 justify-content-center align-items-center d-flex">
                            <div className="justify-content-center align-items-center w-auto">
                                <p className="text-center text-light fs-6 fw-medium font-family-Poppins m-0 px-3 py-2 imagebutton">Sign Up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default blog
