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
    <div className="flex items-center justify-center whitespace-nowrap p-3 text-white shadow-lg">
      <div className="flex w-3/4 flex-row items-center justify-center">
        <div className="relative">
          <div className="m-4">
            <div className="relative">
              <div className="absolute left-0 top-[50%] aspect-square opacity-80">
                <SlArrowLeft
                  size={50}
                  className="cursor-pointer bg-red-700 p-2 text-xl text-white"
                  onClick={prevImage}
                />
              </div>
              <Image
                src={images[currentImageIndex]}
                alt="club image 1"
                className="w-full"
              />
              <div className="absolute right-0 top-[48%] aspect-square opacity-80">
                <SlArrowRight
                  size={50}
                  className="cursor-pointer bg-red-700 p-2 text-xl text-white"
                  onClick={nextImage}
                />
              </div>
            </div>
          </div>
          <p className="z-1 absolute right-0 top-0 m-0 bg-red-800 p-4 text-2xl shadow-2xl">
            EVENT GALLERY
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
