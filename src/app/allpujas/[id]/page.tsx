"use client"

import "./all-services.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import ServiceCard from "@/app/_components/all-services/service-card/service-card";
import { btnText, servicesData } from "../../../../public/data/all-services-data";
import { useRouter } from "next/navigation";
import ServicesButton from "@/app/_components/all-services/services-button";
import { BackgroundGradientCard } from "@/app/_components/ui/card-gradient";

type Params = {
    params: {
        id: string;
    };
}

const AllPujaServices = ({ params }: Params) => {
    const [allData, setData] = useState<any[] | null>(null);
    const router = useRouter();
    const id = params.id;
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

    const handleBtnClick = (category: string) => {
        router.push("/allpujas/" + category);
        !isDesktopScreen &&
            window.scrollTo({
                top: 400,
                behavior: "smooth", // Smooth scrolling animation
            });
    };

    useLayoutEffect(() => {
        setData(servicesData.filter((service) => service.category === id));
    }, [id]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="all-puja-services">
            <div className="all-puja-services-headers">
                <h1 className="heading font-bold mt-10">Puja Services</h1>
                <p className="para">
                    Explore the complete range of puja services we provide
                </p>
            </div>

            <div className="btn-container">
                {btnText.map((btn) => (
                    <ServicesButton
                        category={btn.category}
                        text={btn.text}
                        key={btn.text}
                        id={id}
                        handleClick={() => handleBtnClick(btn.category)}
                    />
                ))}
            </div>

            <div className="all-services">
                {allData?.map((data, index) => (
                    <ServiceCard
                        key={data.title + index}
                        text={data.title}
                        src={data.src}
                        handleClick={() => router.push("/puja/" + data.title)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllPujaServices;
