import React from "react";
import ImageLarge from "../../images/Frame 8.svg";
import ImageLargeTwo from "../../images/Frame 9.svg";
import Guides from "./Guides";

interface TextSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

function TextSection({ title, description, buttonText }: TextSectionProps) {
  return (
    <div className="row justify-content-center align-items-center grid-width">
      <div className="py-1 col-md-9 justify-content-center align-items-center">
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
        <div className="col-12">
          <div className="px-1 py-1 bg-danger rounded-5 border border-1 border-danger col-12 justify-content-center align-items-center d-flex">
            <div className="justify-content-center align-items-center w-100 button-chat">
              <p className="text-center text-white fs-6 fw-normal font-family-Poppins m-0 py-2">
                {buttonText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImageGridSectionProps {
  backgrounds: string[];
  imageSource: string;
}

function ImageGridSection({ backgrounds, imageSource }: ImageGridSectionProps) {
  return (
    <div className="d-flex justify-content-center m-4 flex">
      <div className="w-100">
        <div className="">
          <div className="d-flex gap-2 flex-wrap">
            {backgrounds.map((backgroundClass, index) => (
              <div
                key={index}
                className={`bg-opacity-50 col-5 justify-content-end align-items-center ${backgroundClass}`}
              >
                {/* Your content for each grid item */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-opacity-50">
        <img src={imageSource} alt="Image" className="background5" />
      </div>
    </div>
  );
}

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
      <TextSection
        title="Specialty Realty Services For Buyers, Sellers, and Investors."
        description="Your dynamic description here."
        buttonText="Your dynamic button text"
      />

      {/* Second Image Grid Section */}
      <ImageGridSection
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
      <Guides title="Buyers" subtitle="Buyer’s Guide" bgClass="bg-image" />
      <Guides title="Sellers" subtitle="Seller’s Guide" bgClass="bg-imageTwo" />
    </div>
  );
}

export default ImagesGrid;
