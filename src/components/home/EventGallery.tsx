"use client";
import Image from "next/image";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import clubimage1 from "@/public/clubimage1.webp";
import clubimage2 from "@/public/clubimage2.webp";
import clubimage3 from "@/public/clubimage3.webp";
import { useState } from "react";

const images = [clubimage1, clubimage2, clubimage3];

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
            className="cursor-pointer bg-red-700 p-2 text-2xl text-white"
            onClick={nextImage}
          />
        </div>
        <p className="z-1 absolute right-0 top-[-5%] m-0 rounded-sm bg-red-800 p-4 text-3xl shadow-5xl">
          EVENT GALLERY
        </p>
      </div>
    </div>
  );
};

export default EventGallery;
