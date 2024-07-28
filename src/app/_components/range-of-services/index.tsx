"use client"

import "./servicesRange.scss";
import { Box, useMediaQuery } from "@mui/material";
import flowersLine from "../../../../public/assets/flowers.jpeg";
import bigFlowerLine from "../../../../public/assets/flowers_big.webp";
import CardTilt from "../card-tilt/cardTilt";
import { rangeData } from "../../../../public/data/rangeServicesData";
import Image from "next/image";

const RangeOfServices = () => {
  const isMobileScreen = useMediaQuery("(max-width: 800px)");

  return (
    <Box className="range-of-services">
      <div className="flowerdiv">
        {!isMobileScreen ? (
          <Image  width={1080} height={500} src={bigFlowerLine} alt="A line of Flowers" />
        ) : (
          <Image  width={1080} height={500} src={flowersLine} alt="A line of Flowers" />
        )}
      </div>

      <div className="services-heading">
        <h2>
          We provide a range of <span>services</span>
        </h2>
        <p>Seamless and Reverent Puja Services Delivered to Your Doorstep</p>
      </div>
      <div className="services-list">
        {rangeData.map((r, index) => (
          <CardTilt
            link={r.link}
            key={r.title + index}
            img={r.img}
            title={r.title}
          />
        ))}
      </div>
    </Box>
  );
};

export default RangeOfServices;
