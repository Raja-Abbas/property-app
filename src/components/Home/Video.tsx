import React from 'react'
import Video1 from "../../images/video1.svg"
import Video2 from "../../images/Video2.svg"
import Video3 from "../../images/Video3.svg"

function Video() {
  return (
    <div>
      <div className="px-1 py-1  row align-items-center justify-content-center">
      <div id="component" className="container-fluid py-3 d-flex justify-content-center">
    <p className="text-center text-black col-6 opacity-50 fs-1 font-family-Poppins  m-0 px-3 py-2">
    Explore The Beautiful Jersey Shore
    </p>
</div>    <div className=" row align-items-center d-flex">
        <div className="px-1 py-5 bg-opacity-50 justify-content-center align-items-center d-flex">
            <div className="position-relative shadow mx-2">
            <img src={Video1} className="img-fluid" alt="Responsive image" loading='lazy'/>
            </div>
        </div>
        <div className="justify-content-center d-flex flex-sm-nowrap gap-5">
            <div className="bg-opacity-50 justify-content-center align-items-center video">
                <div className="position-relative shadow d-flex justify-content-center">
                <img src={Video2} alt="..." className="img-fluid" loading='lazy'/>
                </div>
            </div>
            <div className="bg-opacity-50 justify-content-center align-items-center video">
                <div className="position-relative shadow d-flex justify-content-center">
                <img src={Video3} alt="Video3" className="img-fluid" loading='lazy'/>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Video
