import React from "react";
import ImageLarge from "../../images/Frame 8.svg";
import ImageLargeTwo from "../../images/Frame 9.svg";
import Guides from "./Guides";
import Video from "./Video";
import Company from "./Company";
import ThreeCards from "./ThreeCards";

interface TextSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

function TextSection({ title, description, buttonText }: TextSectionProps) {
  return (
    <div className="row col-12 mx-2 justify-content-center align-items-center grid-width">
      <div className="py-1 col-md-8 justify-content-center align-items-center">
        <div className="row align-items-center d-flex">
          <p className="text-center text-dark fs-3 fw-light font-family-Poppins col-10 m-0 px-3 py-2">
            {title}
          </p>
          <p className="text-center text-dark fs-6 fw-normal font-family-Poppins col-12 m-0 px-3 py-2 w-75">
            {description}
          </p>
        </div>
      </div>
      <div className="col-md-2 row justify-content-center align-items-center d-flex">
        <div className="">
          <div className="px-1 py-1 bg-danger rounded-5 border border-1 border-danger col-12 justify-content-center align-items-center d-flex">
            <div className="justify-content-center align-items-center button-chat">
              <p className="text-center text-white fs-6 fw-normal font-family-Poppins w-auto m-0 py-2">
                {buttonText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TextSectionTwoProps{
  title:string;
}
function TextSectionTwo({title}: TextSectionTwoProps){
  return(
  <div>
    <p className="text-center text-dark fs-3 fw-light font-family-Poppins  m-0 px-3 py-2">{title}</p>
  </div>
  )
}

interface ImageGridSectionProps {
  backgrounds: string[];
  imageSource: string;
}

function ImageGridSection({ backgrounds, imageSource }: ImageGridSectionProps) {
  return (
<div className="d-flex justify-content-evenly mx-4 mb-4 mt-4 flex-break">
    <div className="col-xl-5 col-lg-5 row gap-4">
            <div className="background1 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
            <div className="background2 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
            <div className="background3 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
            <div className="background4 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
    </div>
      <img src={ImageLarge} alt="" className='bg-opacity-50 col-xl-5 col-lg-7 justify-content-end align-items-center'/>
</div>
  );
}
// 

interface ImageGridSectionTwoProps {
  backgrounds: string[];
  imageSource: string;
}

function ImageGridSectionTwo({ backgrounds, imageSource }: ImageGridSectionTwoProps) {
  return (
    <div className="d-flex justify-content-around mt-4 mb-4 flex-break">
      <img src={ImageLargeTwo} alt="" className='bg-opacity-50 col-xl-5 col-lg-7 justify-content-end align-items-center'/>
    <div className="col-xl-5 col-lg-5 row gap-5">
            <div className="background6 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
            <div className="background7 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
            <div className="background8 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
            <div className="background9 bg-opacity-50 col-5 justify-content-end align-items-center">
            </div>
    </div>
</div>
  );
}


// 
function ImagesGrid() {
  return (
    <div>
      {/* First Image Grid Section */}
      <ImageGridSection
        backgrounds={[
          "background1",
          "background2",
          "background3",
          "background4",
        ]}
        imageSource={ImageLarge}
      />
      
      {/* Text Section */}
      <TextSectionTwo
        title="Specialty Realty Services For Buyers, Sellers, and Investors."
      />

      {/* Second Image Grid Section */}
      <ImageGridSectionTwo
        backgrounds={[
          "background6",
          "background7",
          "background8",
          "background9",
        ]}
        imageSource={ImageLargeTwo}
      />
      {/* Text Section */}
      <TextSection
        title="Financing & Mortgage Options."
        description="Every family is unique when it comes to financing. Let us help guide you through the lending process and find the best rate."
        buttonText="Chat Now"
      />

      {/* Guides Components */}
      <div className="d-flex mx-5 justify-content-between">
      <Guides />
      </div>
      <Video/>
      <div>
      <Company/>
      <ThreeCards/>
      </div>
    </div>
  );
}

export default ImagesGrid;
