"use client"

import React, { useEffect, useRef } from "react";
import "./style.scss";
import Card from "./card/index";
import CustomButton from "../custom-button";
import { servicesData } from "../../../../public/data/all-services-data";
import { useRouter } from "next/navigation";

const CardList = () => {
  const cardListRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  function scrollToRight() {
    if(!cardListRef.current) {
      return;
    }
    
    cardListRef.current.scrollLeft =
      cardListRef.current.scrollWidth - cardListRef.current.clientWidth - 100;
  }

  useEffect(() => {
    scrollToRight();
  }, []);

  return (
    <>
      <section className="card-list-section">
        <h2 className="card-list-heading">Most Popular Pujas</h2>
        <CustomButton
          text={"See All Puja Services"}
          onClick={() => router.push("/allpujas/pujas")}
        />
        <div ref={cardListRef} className="card-list">
          {servicesData
            .filter((c) => c.category === "pujas")
            .slice(0, 5)
            .map((card, index) => (
              <Card
                key={card.title + index}
                poojaTitle={card.title}
                src={card.src}
                handleViewMoreClick={() => router.push("/puja/" + card.title)}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default CardList;
