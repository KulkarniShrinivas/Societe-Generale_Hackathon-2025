"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { btnTextPhoto } from "../../../../public/data/photo-gallery-data";
import ServicesButton from "../all-services/services-button";
import { btnClickHandler } from "@/app/photos/[id]/helper";
import { useMediaQuery } from "@mui/material";
import Modal from "./components/Modal";

const ImageGalleryMain = ({ images, id }: { images: string[], id: string }) => {
  const router = useRouter();
  const [imageDialog, setImageDialog] = useState<{state: boolean, image: null | string}>({
    state: false,
    image: null,
  })
  const isDesktopScreen = useMediaQuery("(min-width: 1000px)")


  return (
    <>
      <div className="btn-container mb-2 ">
        {btnTextPhoto.map((btn) => (
          <ServicesButton
            category={btn.category}
            text={btn.text}
            key={btn.text}
            id={id}
            handleClick={() =>
              btnClickHandler(router, isDesktopScreen, btn.category)
            }
          />
        ))}
      </div>
      <section className="mx-auto max-w-[1960px] p-4 ">
        {imageDialog.image &&
          <Modal
            isOpen={imageDialog.state}
            image={imageDialog.image}
            onClose={() => {
              setImageDialog(() => ({ image: null, state: false }))
            }}
          />
        }

        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map((src, index) => (
            <div
              key={src}
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              onClick={() => {
                setImageDialog({state: true, image: src});
              }}
            >
              <Image
                alt="Marathi Sarva Pooja"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                src={src}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageGalleryMain