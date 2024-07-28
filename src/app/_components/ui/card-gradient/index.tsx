"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../background-gradient";

type Props = {
    text: string;
    src: string;
    handleClick(): void;
  }

export function BackgroundGradientCard({text,src,handleClick}: Props) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={src}
          alt={text}
          height="400"
          width="400"
          className="rounded-sm h-[400px] w-[400px]"
        />
        <p className="text-base text-center sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {text}
        </p>
      </BackgroundGradient>
    </div>
  );
}
