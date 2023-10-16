import React from "react";
import HeaderNav from "./common/Header";
import Grid from "./common/Grid";
import ChatBubble from "../images/chat bubble.png";
import ImagesGrid from "./common/ImagesGrid";
import TextCard from "./common/textCard";
import ColorCard from "./common/ColorCard";
interface HeroProps {
  title: string;
  buttonText: string;
}
function Hero({ title, buttonText }: HeroProps) {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="default position-relative">
               <div className="position-absolute col-3 left-0 bottom-0">
                  <img src={ChatBubble} alt="" />
                </div>
                <div className="position-absolute px-1 py-1 bg-black rounded-1 col-12 d-flex w-25 bottom-0">
                    <p className="text-center text-light fs-6 fw-semibold font-family-Poppins col-11 m-0 px-3 py-2">How can I help you?</p>
                </div>
        <HeaderNav />
        <div className="d-flex justify-content-center align-items-center m-auto position-absolute mb-4 bottom-0 start-0 end-0">
          <div className="col-xl-6 row justify-content-center align-items-center d-flex">
            <div className="col-12 row justify-content-center align-items-center d-flex">
              <p className="text text-center text-white fs-1 font-family-Poppins col-12 m-0 px-3 py-2">
                {title}
              </p>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="">
                <div className="button-get px-1 py-1 rounded-5 border border-1 border-light justify-content-center align-items-center d-flex">
                  <div className="justify-content-center px-2 py-2 align-items-center">
                    <p className="button-start text-light fs-4 font-family-Poppins d-flex align-items-center text-center">
                      {buttonText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
     
          </div>
        </div>
      </div>
      <Grid />
      <ImagesGrid/>
      <TextCard/>
      <ColorCard/>
    </div>
  );
}

export default Hero;
