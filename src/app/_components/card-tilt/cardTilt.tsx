import React from "react";
import Tilt from "react-parallax-tilt";
import "./cardTilt.scss";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";

const CardTilt = (props: any) => {
  return (
    <Tilt>
      <Box
        sx={{
          width: props?.width || "180px",
          height: props?.width || "180px",
        }}
        className="tilt-card"
      >
        <div className="img-container">
          <Image
            src={props.img}
            loading="lazy"
            alt={props.title}
            width={props?.width || "180"}
            height={props?.width || "180"}
            className="service-img"
          />
          <div className="gradient-overlay"></div>
        </div>
        <h3 className="card-tilt-heading">
          <Link className="card-tilt-tag" href={props.link}>
            {props.title}
          </Link>
        </h3>
      </Box>
    </Tilt>
  );
};

export default CardTilt;
