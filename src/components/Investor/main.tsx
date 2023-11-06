import React from "react";
import Header from "../Home/Header";
import Image1 from "../../images/Frame 81.svg";
import Image2 from "../../images/Frame 82.svg";
import Image3 from "../../images/Frame 83.svg";
import Image4 from "../../images/Frame 84.svg";
import Image5 from "../../images/Frame 85.svg";
import Image6 from "../../images/Frame 87.svg";
import Footer from "../Home/footer";
import Reviews from "../Home/reviews";
import Card from "../Home/card";
import Logo from "../Home/logo";
import FooterLinks from "../Home/footerLinks";
import Copyright from "../Home/copyright";

function main() {
  return (
    <div>
      <div className="Investor position-relative">
        <Header />
        <div className=" ms-2 d-flex px-1 py-1 justify-content-end position-absolute bottom-0 investor-button d-flex gap-2">
          <div className="row justify-content-center align-items-center">
            <div className="col-8 row justify-content-end align-items-center">
              <p className="text-center text-white fs-1 fw-medium font-family-Poppins col-12 m-0 px-3 py-2">
                Investors
              </p>
            </div>
            <div className="row justify-content-center align-items-center d-flex">
              <div className="">
                <div className="px-1 py-1 w-auto imagebutton rounded-5 border border-1 border-light btn btn-outline-dark justify-content-center align-items-center d-flex">
                  <div className="justify-content-center align-items-center">
                    <p className="text-center text-light fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">
                      Get Started
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-2 row justify-content-center align-items-center">
          <div className="col-lg-6 row align-items-center">
            <p className="text-center text-danger fs-1 fw-light font-family-Poppins col-12 m-0 px-3 py-2">
              Financial Strategy & Contribution. 
            </p>
            <p className="text-center text-dark fs-5 fw-medium font-family-Poppins col-12 m-0 px-3 py-2">
              Boost Your Portfolio. Explore Tax Incentives.
            </p>
          </div>
          <img className="px-3 py-1 col-lg-6" src={Image1} alt="i" />
        </div>
        <div>
          <div className="mt-5 mx-2 row justify-content-center align-items-center">
            <img className="px-3 py-1 col-lg-6" src={Image2} alt="i" />
            <div className="col-lg-6 row align-items-center">
              <p className="text-center text-danger fs-4 fw-medium font-family-Poppins col-12 m-0 px-3 py-2">
                Taking Advantage of Charitable Real Estate Donation
              </p>
              <p className="text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                Take part in philanthropy by donating your property. By donating
                your property through the federally approved 501c3 tax law
                provision, you can give others the gift of home ownership.
              </p>
            </div>
          </div>
          <div>
            <div className="mt-5 mx-2 row justify-content-center align-items-center">
              <div className="col-lg-6 row align-items-center">
                <p className="text-danger fs-4 fw-medium font-family-Poppins col-9 m-0 px-3 py-2">
                  Understanding The Tax Benefits.
                </p>
                <p className="text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                  Section 501c3 is a tax law provision that grants exemption
                  from income taxes by donating your property to a nonprofit
                  organization. The provision allows a property owner to offset
                  capital gains over the course of 5 years.
                </p>
              </div>
              <img className="px-3 py-1 col-lg-6" src={Image3} />
            </div>
            <div>
              <div className="mt-5 mx-2 row justify-content-center align-items-center">
                <img className="px-3 py-1 col-lg-6" src={Image4} />
                <div className="col-lg-6 row align-items-center">
                  <p className="text-danger fs-4 fw-medium font-family-Poppins col-12 m-0 px-3 py-2">
                    What Types of Properties Qualify?
                  </p>
                  <p className="text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                    Most charities are lenient on the types of properties that
                    can be donated. Categories include residential, commercial,
                    industrial, vacant land, and international property. The
                    property must b free of debts or liens, and meets
                    environmental standards.
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-5 row justify-content-center align-items-center">
                  <div className="col-lg-9 justify-content-center align-items-center d-flex">
                    <div className="col-md-12 row align-items-center d-flex">
                      <p className="col-md-11 m-0 px-3 py-2">
                        <span className="text-danger fs-2 fw-bold font-family-Poppins">
                          OffSet
                        </span>
                        <span className="text-danger fs-2 fw-medium font-family-Poppins">
                          {" "}
                        </span>
                        <span className="text-danger fs-2 fw-normal font-family-Poppins">
                          Renovation Costs with a FHA 203K Loan.
                        </span>
                      </p>
                      <p className="text-center text-dark fs-6 fw-normal font-family-Poppins col-md-12 m-0 px-3 py-2">
                        If you are a property owner needing financing for home
                        renovations or upgrades, an FHA 203K Renovation Loan can
                        be used to finance the work. Backed by the Federal
                        Housing Administration (FHA), an FHA 203K loan is a
                        mortgage loan used to finance renovations. An FHA 203K
                        is the best option when it comes to lowering the costs
                        for construction.
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-dark fs-4 fw-medium font-family-Poppins  m-0 px-3 py-2">
                    Types of FHA Loans
                  </p>
                  <div className="col-lg-12 gap-5 row justify-content-center">
                    <div className="col-lg-5 row align-items-center">
                      <p className="col-12 m-0 px-3 py-2">
                        <span className="text-danger fs-4 fw-medium font-family-Poppins">
                          FHA 203K{" "}
                        </span>
                        <span className="text-danger fs-4 fw-bold font-family-Poppins">
                          Full/Standard.
                        </span>
                      </p>
                      <img className="px-1 py-1 col-12" src={Image5} />
                      <p className="text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2 mb-4">
                        FHA 203k Full/Standard is designed to provide financing
                        for modernization of older properties, covering
                        structural repairs and major renovations. Some examples
                        include repairs to plumbing, electric, roofing,
                        flooring, or all of the above.
                      </p>
                    </div>
                    <div className="col-lg-5 row align-items-center">
                      <p className="col-12 m-0 px-3 py-2">
                        <span className="text-danger fs-4 fw-medium font-family-Poppins">
                          FHA 203K{" "}
                        </span>
                        <span className="text-danger fs-4 fw-bold font-family-Poppins">
                          Limited.
                        </span>
                      </p>
                      <img className="px-1 py-1 col-12" src={Image6} />
                      <p className="text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">
                        For smaller projects that do not require major
                        renovation, a FHA 203K limited loan is designed for just
                        that. This covers minor changes of up to $35,000. This
                        loan can be used for minor repairs such as painting,
                        weatherizing, and appliance replacements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mb-5">
                <div className="px-1 py-1 bg-frame bg-opacity-50 justify-content-center align-items-center">
                  <div className="col-lg-8 row justify-content-center align-items-center d-flex">
                    <p className="text-center text-white fs-1 fw-semibold font-family-Poppins col-md-12 m-0 px-3 py-2">
                      Donating a Property?
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="button-chat row justify-content-center align-items-center d-flex">
                        <div className="">
                          <div className="px-1 py-1 bg-light col-12 rounded-5 justify-content-center align-items-center d-flex">
                            <div className="justify-content-center align-items-center">
                              <p className="text-center text-danger fs-6 fw-medium font-family-Poppins text-decoration-underline w-auto m-0 px-3 py-2">
                                Explore The Tax Benefits
                              </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
