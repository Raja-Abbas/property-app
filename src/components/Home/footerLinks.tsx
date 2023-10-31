import React from 'react'
import Facebook from "../../images/Facebook.svg"
import Instagram from "../../images/Instagram.svg"
import Pinterest from "../../images/Pinterest.svg"
import TikTok from "../../images/Tiktok.svg"
import Youtube from "../../images/Youtube.svg"

function footerLinks() {
  return (
    <div className=" row justify-content-center align-items-center">
    <div className="col-5 row justify-content-center align-items-center">
        <p className="text-center text-dark fs-5 fw-light font-family-Poppins col-8 m-0 px-3 py-2">Sales & Support</p>
        <p className="text-center text-danger fs-2 fw-semibold font-family-Poppins col-12 m-0 px-3 py-2">732.475.7705</p>
    </div>
    <div className="col-6 justify-content-center align-items-center d-flex">
        <div className="col-12 row justify-content-center align-items-center">
            <p className="text-center text-dark fs-6 fw-normal font-family-Poppins text-decoration-underline col-12 m-0 px-3 py-2">contact@MikeKoenRealtyNJ.com</p>
            <div className="col-6 row justify-content-between align-items-center">
                <div className="footer-links position-relative col-1">
                    <img src={Facebook} alt="" className='FooterLinks' loading='lazy'/>
                </div>
                <div className="footer-links position-relative col-1">
                    <img src={Instagram} alt="" className='FooterLinks' loading='lazy'/>
                </div>
                <div className="footer-links position-relative col-1">
                    <img src={Pinterest} alt="" className='FooterLinks' loading='lazy'/>
                </div>
                <div className="footer-links position-relative col-1">
                    <img src={TikTok} alt="" className='FooterLinks' loading='lazy'/>
                </div>
                <div className="footer-links position-relative col-1">
                    <img src={Youtube} alt="" className='FooterLinks' loading='lazy'/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default footerLinks
