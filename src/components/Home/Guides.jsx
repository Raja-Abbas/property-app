import React from "react";

function Guide(props) {
  return (
    <div className="d-flex mt-4 mb-4 justify-content-between col-12 gap-lg-5 flex-breakresponsive">
    <div className="mx-xl-4 py-1 bg-image bg-opacity-25 justify-content-end align-items-center position-relative">
        <div className="text-guide">
            <p className="text-center text-white fs-1 font-family-Poppins col-12 m-0 px-3 py-2">Buyers</p>
            <div className="w-auto row justify-content-center align-items-center">
                <div className="w-auto imagebutton">
                    <div className="px-1 py-1 bg-light rounded-5 col-12 justify-content-center align-items-center d-flex">
                        <div className="justify-content-center align-items-center">
                            <p className="text-center text-danger fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">Buyer’s  Guide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="px-1 py-1 bg-imageTwo bg-opacity-25 justify-content-end align-items-center position-relative mx-xl-5">
        <div className="text-guide">
            <p className="text-center text-white fs-1 font-family-Poppins col-12 m-0 px-3 py-2">Sellers</p>
            <div className="w-auto row justify-content-center align-items-center">
                <div className="w-auto imagebutton">
                    <div className="px-1 py-1 bg-light  rounded-5 col-12 justify-content-center align-items-center d-flex">
                        <div className="justify-content-center align-items-center">
                            <p className="text-center text-danger fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2">Seller’s  Guide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Guide;
