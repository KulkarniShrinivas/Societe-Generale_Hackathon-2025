"use client"
import "./aboutUsMain.scss";
import { ParticlesBackground } from "../../particlesConfig/particlesConfig";
import { aboutUsPageData } from "../../../../../public/data/about-us-page-data";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const AboutUsMain = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");

  return (
    <div className="about-us-main">
      <ParticlesBackground />
      <div className="about-us-main-img">
        <Image
          src={aboutUsPageData.main.pandit_img}
          alt="Manoj Kulkarni Purohit"
          width={isMobileScreen ? 250: 500}
          height={isMobileScreen ? 250: 500}
        />
        <h1>{aboutUsPageData.main.pandit_name}</h1>
      </div>
    </div>
  );
};

export default AboutUsMain;
