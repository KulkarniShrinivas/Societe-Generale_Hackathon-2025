"use client";
import React from "react";
// import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
  //   const { clientX, clientY } = event;
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   const x = (clientX - (rect.left + rect.width / 2)) / 20;
  //   const y = (clientY - (rect.top + rect.height / 2)) / 20;
  //   setMousePosition({ x, y });
  // };
  return (
      <div
        className={cn("relative p-5 text-center  h-full w-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl", "mx-auto w-full bg-indigo-800  relative rounded-2xl",
        containerClassName)}
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
          <Noise />
          {children}
      </div>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
