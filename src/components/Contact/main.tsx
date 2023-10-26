import React from "react";
import Header from "../Home/Header";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import Pinterest from "../../images/Pinterest.svg";
import TikTok from "../../images/Tiktok.svg";
import Youtube from "../../images/Youtube.svg";
import Footer from "../Home/footer"
import Reviews from "../Home/reviews"
import Card from "../Home/card"
import Logo from "../Home/logo"
import FooterLinks from "../Home/footerLinks"
import Copyright from "../Home/copyright"


function main() {
  return (
    <div>
      <div className="Contact position-relative">
        <Header />
      </div>
      <div className="px-1 pt-1  row justify-content-center align-items-center">
        <div className="col-xl-11 justify-content-center align-items-center">
          <div className="col-lg-12 align-items-center">
            <p className="text-center col-lg-12 m-0 px-3 py-2">
              <span className="text-danger fs-1 fw-light font-family-Poppins">
                Here to Help, available{" "}
              </span>
              <span className="text-danger fs-1 fw-semibold font-family-Poppins">
                24/7.
              </span>
            </p>
          </div>
        </div>
        <div className="col-xl-10 row justify-content-center align-items-center">
          <div className="col-lg-6 justify-content-center align-items-center d-flex">
            <div className="col-12 row align-items-center">
              <p className="text-center text-danger fs-4 fw-medium font-family-Poppins col-12 m-0 py-2">
                Please fill out all the required fields *
              </p>
              <div className="col-12 row d-flex">
                <div className="rounded-1 col-12 row d-flex">
                  <div className="pb-1 col-12 align-items-center d-flex">
                    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 py-2">
                      Full Name
                    </p>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Jesse Smith"
                      className="px-2 py-1 bg-white rounded-1 border border-1 border-success-subtle col-12 justify-content-center align-items-center"
                    />
                  </div>
                  <div className="pt-1 col-12 align-items-center d-flex">
                    <p className="text-secondary fs-6 fw-normal font-family-Poppins col-12 m-0 py-2">
                      We'll never share your email with anyone else.
                    </p>
                  </div>
                </div>
                <div className="rounded-1 col-12 row d-flex">
                  <div className="pb-1 col-12 align-items-center d-flex">
                    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 py-2">
                      Email Address
                    </p>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="jesse.smith@host.com"
                      className="px-2 py-1 bg-white rounded-1 border border-1 border-success-subtle col-12 justify-content-center align-items-center"
                    />
                  </div>
                  <div className="pt-1 col-12 align-items-center d-flex">
                    <p className="text-secondary fs-6 fw-normal font-family-Poppins col-12 m-0 py-2">
                      We'll never share your email with anyone else.
                    </p>
                  </div>
                </div>
                <div className="rounded-1 col-12 row d-flex">
                  <div className="pb-1 col-12 align-items-center d-flex">
                    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 py-2">
                      Phone Number
                    </p>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="###-###-####"
                      className="px-2 py-1 bg-white rounded-1 border border-1 border-success-subtle col-12 justify-content-center align-items-center"
                    />
                  </div>
                </div>
                <div className="col-12 row">
                  <div className="col-3 row align-items-center d-flex">
                    <div className="position-relative col-2">
                      <input type="checkbox" name="buyer" id="buyer" />
                    </div>
                    <p className="text-dark fs-6 fw-medium font-family-Poppins col-8 m-0 px-3 py-2">
                      Buyer
                    </p>
                  </div>
                  <div className="col-3 row align-items-center d-flex">
                    <div className="position-relative col-2">
                      <input type="checkbox" name="seller" id="seller" />
                    </div>
                    <p className="text-dark fs-6 fw-medium font-family-Poppins col-8 m-0 px-3 py-2">
                      Seller
                    </p>
                  </div>
                  <div className="col-4 row align-items-center d-flex">
                    <div className="position-relative col-2">
                      <input type="checkbox" name="investor" id="investor" />
                    </div>
                    <p className="text-dark fs-6 fw-medium font-family-Poppins col-9 m-0 px-3 py-2">
                      Investor
                    </p>
                  </div>
                </div>
                <div className="rounded-1 col-6 row d-flex">
                  <div className="pb-1 col-12 align-items-center d-flex">
                    <p className="text-dark fs-6 fw-medium font-family-Poppins col-12 m-0 py-2">
                      Message
                    </p>
                  </div>
                  <div className="">
                    <textarea
                      name=""
                      id=""
                      placeholder="..."
                      className="px-3 py-2"
                    ></textarea>
                    <div className="p-0.5 col-1 align-items-center">
                      <div className="position-relative col-8 row"></div>
                    </div>
                  </div>
                  <div className="pt-1 col-12 align-items-center d-flex">
                    <p className="text-secondary fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                      150 word max
                    </p>
                  </div>
                </div>
                <div className="d-flex imagebutton">
                  <div className="px-1 py-1 bg-danger rounded-5 justify-content-center align-items-center d-flex">
                    <div className="justify-content-center align-items-center">
                      <p className="text-center text-white fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">
                        Send
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 justify-content-center align-items-center">
            <div className="col-12 row justify-content-center align-items-center d-flex">
              <div className="col-10 row justify-content-center align-items-center d-flex">
                <p className="text-center text-dark fs-5 fw-light font-family-Poppins col-8 m-0 px-3 py-2">
                  Sales & Support
                </p>
                <p className="text-center text-danger fs-2 fw-semibold font-family-Poppins col-12 m-0 px-3 py-2">
                  732.475.7705
                </p>
              </div>
              <div className="col-12 justify-content-center align-items-center">
                <div className="col-12 row justify-content-center align-items-center">
                  <p className="text-center text-dark fs-6 fw-normal font-family-Poppins text-decoration-underline col-12 m-0 px-3 py-2">
                    contact@MikeKoenRealtyNJ.com
                  </p>
                  <div className="col-12 row justify-content-center align-items-center gap-4">
                    <div className="position-relative col-1">
                      <img src={Facebook} alt="" className="FooterLinks" />
                    </div>
                    <div className="position-relative col-1">
                      <img src={Instagram} alt="" className="FooterLinks" />
                    </div>
                    <div className="position-relative col-1">
                      <img src={Pinterest} alt="" className="FooterLinks" />
                    </div>
                    <div className="position-relative col-1">
                      <img src={TikTok} alt="" className="FooterLinks" />
                    </div>
                    <div className="position-relative col-1">
                      <img src={Youtube} alt="" className="FooterLinks" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer />
<Reviews />
<div className="d-flex col-12 flex-break">
<Card />
<Logo />
</div>
<div className="mt-5">
<FooterLinks />
</div>
<div className="mt-5">
<Copyright />
</div>
    </div>
  );
}

export default main;
