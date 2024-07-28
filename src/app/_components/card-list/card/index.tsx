"use client"

import React from "react";
import "./style.scss";
import { whatsappData } from "@/lib/whatsapp";
import Image from "next/image";

type Props = {
  poojaTitle: string;
  src: string;
  handleViewMoreClick: () => void;
}

const Card = ({ poojaTitle, src, handleViewMoreClick }: Props) => {
  return (
    <article className="card">
      <header className="card-header">
        <h2 onClick={handleViewMoreClick}>{poojaTitle}</h2>
      </header>
      <div className="card-img">
        <Image src={src} width={250} height={250} alt={poojaTitle} />
      </div>

      <div className="tags">
        <a onClick={() => whatsappData()}>Book Now</a>
        <a onClick={handleViewMoreClick}>View More</a>
      </div>
    </article>
  );
};

export default Card;
