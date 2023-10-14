import React from 'react'
import Video1 from "../../images/video1.svg"
import Video2 from "../../images/Video2.svg"
import Video3 from "../../images/Video3.svg"

function Video() {
  return (
    <div>
      <div className="px-1 py-1  row align-items-center justify-content-center">
    <p className="text-center text-black fs-1 font-family-Poppins col-xl-9 m-0 px-3 py-2">Explore The Beautiful Jersey Shore</p>
    <div className=" row align-items-center d-flex">
        <div className="px-1 py-1 bg-opacity-50 justify-content-center align-items-center d-flex">
            <div className="position-relative shadow mx-5">
            <img src={Video1} alt="Video1"/>
            </div>
        </div>
        <div className="row justify-content-around d-flex flex-wrap w-100">
            <div className="px-1 py-1 bg-opacity-50 justify-content-center align-items-center w-25">
                <div className="position-relative shadow d-flex justify-content-center">
                <img src={Video2} alt="Video2"/>
                </div>
            </div>
            <div className="px-1 py-1 bg-opacity-50 justify-content-center align-items-center w-25">
                <div className="position-relative shadow d-flex justify-content-center">
                <img src={Video3} alt="Video3"/>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Video
