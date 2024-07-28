"use client"

import "./pujaPage.scss";
import { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { servicesData } from "../../../../public/data/all-services-data";
import Image from "next/image";
import { WobbleCard } from "@/app/_components/ui/wobble-card";
import ColorButton from "@/app/_components/ui/color-btn";
import CustomButton from "@/app/_components/custom-button";
import { whatsappData } from "@/lib/whatsapp";

type Params = {
  params: {
    id: string;
  };
}

const PujaPage = ({ params }: Params) => {
  const id = decodeURIComponent(params.id);
  const pujaData = useMemo(() => {
    return servicesData.find((data) => {
      return data.title === id
    });
  }, [id]);
  return (
    <>
      {pujaData && (
        <main className="puja-details-card">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-center flex-col gap-4">
              <Tilt>
                <Box
                  sx={{
                    borderRadius: "10px",
                    width: "300px",
                    height: "300px",
                    position: "relative",
                    overflow: "hidden",
                    "@media (min-width: 1000px)": {
                      width: "400px",
                      height: "400px",
                    },
                  }}
                  className="tilt-card"
                >
                  <div className="img-container block h-full">
                    <Image
                      src={pujaData?.src}
                      alt={pujaData?.title}
                      className="service-img"
                      layout="fill"
                    />
                    <div className="gradient-overlay"></div>
                  </div>

                </Box>
              </Tilt>
              <CustomButton 
                text="Book Now"
                onClick={() => whatsappData()}
              />
            </div>

            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <section className="puja-desc text-white text-center w-full h-full flex items-center justify-center flex-col">
                {pujaData?.description.map((data: any, index: number) => (
                  <p key={data + index}>{data}</p>
                ))}
              </section>
            </WobbleCard>

            <WobbleCard containerClassName="flex col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="animation-container text-white text-center w-full h-full">
                <section className="puja-benefits-container w-full h-full flex items-center justify-center flex-col">
                  {pujaData?.benefits?.title && (
                    <h4 className="font-semibold">{pujaData?.benefits?.title}</h4>
                  )}
                  <ul>
                    {pujaData?.benefits?.points?.map((data: any, index: number) => (
                      <li className="py-2" key={data.title + index}>
                        <h5 className="font-semibold">{data.title}</h5>
                        <p>{data.description}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </WobbleCard>
          </div>
        </main>
      )}
    </>
  );
};

export default PujaPage;
