"use client"

import { ImagesSliderDemo } from "./hero-image-slider";
import { heroSectionImages } from "../../../public/data/photo-gallery-data";
import React from "react";

export const mainData = {
  typeWriterText: ["Authentic Vedic Puja", "In Traditional Way"],
};

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const TEXTS = mainData.typeWriterText;

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const images = heroSectionImages;

  return (
    <main className="mt-[70px]">
      <ImagesSliderDemo
        images={images}
        btnName="Book Now"
        heading={<span>Experience <br/> {mainData.typeWriterText[0]}</span>}
      />
    </main>
  );
};

export default Main;
