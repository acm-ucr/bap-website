"use client";
import Image from "next/image";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import clubimage1 from "@/public/clubimage1.webp";

import clubimage5 from "@/public/clubimage5.webp";
import clubimage6 from "@/public/clubimage6.webp";
import clubimage7 from "@/public/clubimage7.webp";
import clubimage8 from "@/public/clubimage8.webp";
import clubimage9 from "@/public/clubimage9.webp";
import clubimage10 from "@/public/clubimage10.webp";
import clubimage13 from "@/public/clubimage13.webp";
import clubimage14 from "@/public/clubimage14.webp";
import clubimage15 from "@/public/clubimage15.webp";
import clubimage16 from "@/public/clubimage16.webp";

import { useState } from "react";

const images = [
  clubimage14,
  clubimage15,
  clubimage16,
  clubimage1,
  clubimage5,
  clubimage6,
  clubimage7,
  clubimage8,
  clubimage9,
  clubimage10,
  clubimage13,
];

const EventGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="flex w-full select-none flex-row items-center justify-center">
      <div className="relative">
        <div className="absolute left-0 top-[50%] aspect-square opacity-80 shadow-3xl">
          <SlArrowLeft
            size={65}
            className="cursor-pointer bg-red-700 p-2 text-white"
            onClick={prevImage}
          />
        </div>
        <div className="flex place-items-center overflow-clip">
          <Image
            src={images[currentImageIndex]}
            alt="club image"
            className=""
            width={2000}
            height={2000}
          />
        </div>

        <div className="absolute right-0 top-[50%] aspect-square opacity-80 shadow-3xl">
          <SlArrowRight
            size={65}
            className="cursor-pointer bg-red-700 p-2 text-sm text-white"
            onClick={nextImage}
          />
        </div>
        <p className="z-1 text-md absolute right-0 top-[-5%] m-0 rounded-sm bg-red-800 p-4 shadow-5xl md:text-3xl">
          EVENT GALLERY
        </p>
      </div>
    </div>
  );
};

export default EventGallery;
