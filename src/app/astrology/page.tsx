"use client"

import React from "react";
import "./astrology.scss";
import "../_components/AboutUs/aboutus.scss";
import Box from "@mui/material/Box";
import astroImage from "../../../public/assets/Astro.jpeg"
import { astroData } from "../../../public/data/astro-data";
import CustomButton from "../_components/custom-button";
import { whatsappData } from "@/lib/whatsapp";

const Astrologer = () => {

  return (
    <div className="astrology-container">
      <Box
        className="contact-us-header"
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: `linear-gradient(to bottom, var(--primary-color), var(--primary-color-dark)),url(${astroImage.src})`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "right",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& .heading": {
            color: "white !important",
          },
        }}
      >
        <h1 className="heading">
          Astro<span>logy</span>
        </h1>
      </Box>
      <div className="astro-container pt-4 pb-4">
        <div className="subhead">
          {astroData.heading.map((data) => (
            <h2 key={data} className="font-bold text-2xl mb-4">
              {data}
            </h2>
          ))}
        </div>
        <CustomButton text={"Book Now"} onClick={() => whatsappData()} />

        <section className="about-us astro-about">
          <div className="owner-item item-1">
            <h3>{astroData.astroAbout[0].title}</h3>
            <h4>{astroData.astroAbout[0].para}</h4>
          </div>
          <div className="owner-item item-2">
            <h3>{astroData.astroAbout[1].title}</h3>
            <h4>{astroData.astroAbout[1].para}</h4>
          </div>
        </section>
        <section className="astrology-para">
          <p>{astroData.para}</p>
        </section>
      </div>
    </div>
  );
};

export default Astrologer;
