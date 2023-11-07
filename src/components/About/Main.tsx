import React from 'react'
import Header from "../Home/Header"
import Image1 from "../../images/Frame 8 (2).svg"
import Image2 from "../../images/Frame 116.svg"
import Image3 from "../../images/Frame 8 (3).svg"
import Image4 from "../../images/Frame 10 (1).svg"
import Footer from "../Home/footer"
import Reviews from "../Home/reviews"
import Card from "../Home/card"
import Logo from "../Home/logo"
import FooterLinks from "../Home/footerLinks"
import Copyright from "../Home/copyright"


function Main() {
  return (
    <div>
      <div className='About'>
        <Header />
        <div className="z-1 ms-4 d-lg-flex px-1 py-1 justify-content-end position-absolute bottom-0 mb-3 align-items-center">
          <div className="d-lg-flex justify-content-center align-items-center gap-4">
            <div className="row justify-content-end align-items-center">
              <p className="text-center text-white font-header fw-medium font-family-Poppins col-12 m-0 px-3 py-2">
                About Us
              </p>
            </div>
            <div className="justify-content-center align-items-center d-flex mt-3">
              <div className="">
                <div className="px-2 py-1 w-auto imagebutton rounded-5 border border-1 border-light btn btn-outline-dark justify-content-center align-items-center d-flex">
                  <div className="justify-content-center align-items-center">
                    <p className="text-center text-light fs-8 fw-normal font-family-Poppins m-0 px-1">
                      Get Started
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-4'>
      <div className="mt-4 mx-4 row justify-content-center align-items-center">
    <div className="col-lg-6 row align-items-center">
        <p className="text-center text-danger fs-1 fw-light font-family-Poppins col-12 m-0 px-3 py-2">MIKE KOEN</p>
        <p className="text-center col-12 m-0 px-3 py-2"><span className="text-dark fs-4 fw-light font-family-Poppins"><br/>“Real Estate is more than my passion. <br/>It’s my </span><span className="text-dark fs-4 fw-bold font-family-Poppins">purpose</span><span className="text-dark fs-4 fw-light font-family-Poppins">.”</span></p>
    </div>
    <img className="px-1 py-1 col-lg-6" src={Image1} />
</div>
      </div>
      <div>
      <div className="mx-4 mt-5 row justify-content-center">
    <p className="text-danger fs-3 fw-medium font-family-Poppins col-lg-12 m-0 px-3 py-2">Experience</p>
    <p className="text-dark fs-5 fw-normal font-family-Poppins col-lg-12 m-0 px-3 py-2">With over 25+ years of experience in residential and commercial real estate, Mike Koen has helped hundreds of New Jersey residents secure properties that build lasting memories and financial independence. He takes pride in working with his clients to navigate the complex process of buying, selling, building, and investing.</p>
    <img className="py-1 col-lg-12" src={Image2} />
    <p className="text-dark fs-5 fw-normal font-family-Poppins col-lg-12 m-0 px-3 py-2">Mike is more than a real estate agent. He is also a Licensed Builder and has served as a Home Inspector for the State of NJ. After years in the field, he uses his experience to help owners and investors navigate the complexities of NJ real estate and lending.</p>
</div>
      </div>
      <div>
      <div className="mx-4 mt-5 row justify-content-center align-items-center">
    <div className="col-lg-4 align-items-center">
        <p className="text-dark fs-5 fw-normal font-family-Poppins col-12 m-0 px-1 py-2">Serving as a state building inspector for over 10 years, he holds vast knowledge in property management, subdivision protocols, and has extensive experience collaborating with DEP/municipalities. <br/><br/>In addition, Mike works with an extensive team of lenders, surveyors, engineers, and attorneys who will guide you through the process.</p>
    </div>
    <img className="px-1 py-1 col-lg-4 col-md-4" src={Image3} />
    <img className="px-1 py-1 col-lg-4 col-md-4" src={Image4} />
</div>
      </div>
      <div>
      <div className="mx-4 mt-5 row">
    <p className="text-danger fs-3 fw-medium font-family-Poppins col-lg-12 m-0 px-3 py-2">Accreditations</p>
    <p className="text-dark fs-5 fw-normal font-family-Poppins col-lg-12 m-0 px-3 py-2">Mike holds an NJ builders license ---&gt; 🚨which we need to get the numbers for.</p>
</div>
      </div>
      <div className='mt-5'>
      <Footer />
</div>
<Reviews />
<Card />
<div className="mt-5">
<Logo />
</div>
<div className="mt-5">
<FooterLinks />
</div>
<div className="mt-5">
<Copyright />
</div>
    </div>
  )
}

export default Main
