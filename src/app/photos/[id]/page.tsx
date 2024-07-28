"use client"

import { ParallaxScrollSecond } from "@/app/_components/parallax-photo-gallery";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { btnTextPhoto, photoGalleryData, vipPhotosData } from "../../../../public/data/photo-gallery-data";
import ServicesButton from "@/app/_components/all-services/services-button";
import "./photoGallery.scss"
import { useRouter } from "next/navigation";
import { btnClickHandler } from "./helper";
import ImageGalleryMain from "@/app/_components/image-gallery";

type Params = {
    params: {
        id: string;
    };
}


export default function PhotoGallery({ params }: Params) {
    const [allData, setData] = useState<any>(null);
    const [dialogOpen, setDialogOpen] = useState({
        state: false,
        img: null,
        title: "",
    });
    const router = useRouter();
    const id = decodeURIComponent(params.id)
    const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

    useEffect(() => {
        if (id === "vip-photos") {
            setData(vipPhotosData.map((d) => d.img));
        } else {
            setData(photoGalleryData.map(d => d.img));
        }
    }, [id]);


    return (
        <>
            <main className="Photo-Gallery mt-5 bg-[var(--primary-color)]">
                <ImageGalleryMain images={allData || []} id={id} />
            </main>
        </>


    )
}