import React from 'react'

function ColorCard() {
  return (
    <div className="px-1  row justify-content-center mx-3 my-4">
    <div className="px-1 background-danger col-xl-6 justify-content-center align-items-center d-flex w-50 py-5 gap-2">
        <div className="py-1 justify-content-center align-items-center d-flex">
            <div className="row align-items-center">
                <p className="text-center m-0 px-3 py-2"><span className="text-light fs-6 fw-light font-family-Poppins">Our </span><span className="text-light fs-6 fw-semibold font-family-Poppins">ipsum</span><span className="text-light fs-6 fw-light font-family-Poppins"> dolor</span></p>
                <p className="text-center text-light fs-1 fw-light font-family-Poppins m-0 px-3 py-2">Find The Best Rate</p>
                <p className="text-center text-light fs-6 fw-light font-family-Poppins m-0 px-3 py-2">Explore NJ Mortgage Rates</p>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="">
                            <div className="px-1 py-1 rounded-5 border border-1 border-light justify-content-center align-items-center d-flex">
                                <div className="justify-content-center align-items-center">
                                    <p className="text-center text-light fs-6 fw-normal font-family-Poppins m-0 px-3 py-2 imagebutton">Learn More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="px-1 bg-dark col-xl-6 justify-content-center align-items-center d-flex w-50">
        <div className="py-1 justify-content-center align-items-center d-flex">
            <div className="row align-items-center">
                <p className="text-center m-0 px-3 py-2"><span className="text-light fs-6 fw-light font-family-Poppins">Our </span><span className="text-light fs-6 fw-semibold font-family-Poppins">ipsum</span><span className="text-light fs-6 fw-light font-family-Poppins"> dolor taxes</span></p>
                <p className="text-center text-light fs-1 fw-light font-family-Poppins m-0 px-3 py-2">Donate a Home</p>
                <p className="text-center text-light fs-6 fw-light font-family-Poppins m-0 px-3 py-2">Discover Tax Advantages of Donating a Property.</p>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="">
                            <div className="px-1 py-1 rounded-5 border border-1 border-light justify-content-center align-items-center d-flex">
                                <div className=" justify-content-center align-items-center">
                                    <p className="text-center text-light fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2 imagebutton">Find Out How</p>
                                </div>
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

export default ColorCard
