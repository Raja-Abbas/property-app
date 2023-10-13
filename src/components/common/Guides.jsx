import React from "react";

function Guide(props) {
  return (
    <div className={`px-1 row justify-content-center`}>
      <div
        className={`px-1 py-1 bg-image ${props.bgClass} bg-opacity-25 col-xl-6 justify-content-end align-items-center`}
      >
        <div className="col-5 row justify-content-center align-items-center d-flex">
          <p
            className={`text-center text-white fs-1 font-family-Poppins col-12 m-0 px-3 py-2`}
          >
            {props.title}
          </p>
          <div className="col-9 row justify-content-center align-items-center">
            <div className="col-12">
              <div className="px-1 py-1 ${props.bgClass} bg-light rounded-5 col-12 justify-content-center align-items-center d-flex">
                <div className="col-10 justify-content-center align-items-center">
                  <p
                    className={`text-center text-danger fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2`}
                  >
                    {props.subtitle}
                  </p>
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
