import React from "react";
import Header from "../Home/Header";
import Image1 from "../../images/Frame 81.svg";
import Image2 from "../../images/Frame 82.svg";

function main() {
  return (
    <div>
      <div className="Investor">
        <Header />
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
          <img className="px-1 py-1 col-lg-6" src={Image1} />
        </div>
        <div>
          <div className="mt-5 mx-2 row justify-content-center align-items-center">
            <img
              className="px-1 py-1 col-lg-6"
              src={Image2}
            />
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
        </div>
      </div>
    </div>
  );
}

export default main;
