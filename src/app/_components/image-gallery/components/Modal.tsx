"use client"

import { Dialog, useMediaQuery } from "@mui/material";
import NextImage from "next/image";
import { useEffect, useState } from "react";

export default function DialogModal({
  isOpen,
  image,
  onClose,
}: {
  isOpen: boolean;
  image: string;
  onClose: () => void;
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
  }, [image]);

  if (dimensions.width === 0 || dimensions.height === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
    <NextImage
      src={image}
      alt={image}
      style={{
        maxHeight: "90vh"
      }}
      layout="responsive"
      width={dimensions.width}
      height={dimensions.height}
    />
    </Dialog>
  );
}
